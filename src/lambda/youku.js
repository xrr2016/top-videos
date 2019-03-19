const { request } = require('../utils/index')

const BASE =
  'https://index.api.youku.com/getData?orderPro=vv&startindex=1&endindex=30&dateDim=d'

const channels = [
  { cid: 97, text: '剧集', num: 700009 },
  { cid: 96, text: '电影', num: 700009 },
  { cid: 85, text: '综艺', num: 700009 },
  { cid: 100, text: '动漫', num: 700009 },
  { cid: 98, text: '体育', num: 700008 }
]

function generateUrl(c) {
  const url = `${BASE}&num=${c.num}&channelId=${c.cid}&_=${Date.now()}`
  c.url = url
  return url
}

const missions = channels.map(c => {
  return request(generateUrl(c)).then(res => res)
})

exports.handler = async (event, context) => {
  const rankList = []
  const results = await Promise.all(missions)

  results.forEach((result, index) => {
    const dataList = []
    const { data } = JSON.parse(result).result

    data.forEach((item, idx) => {
      if (dataList.length > 19) {
        return
      }

      dataList.push({
        rank: idx,
        origin: 'YOUKU',
        title: item.title,
        url: item.homepageurl,
        score: item.vv
      })
    })

    rankList.push({
      type: channels[index].text,
      list: dataList
    })
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rankList)
  }
}

const { request } = require('../utils/index')

const BASE =
  'https://index.api.youku.com/getData?orderPro=vv&startindex=1&endindex=10&dateDim=d'

const channels = [
  { cid: 97, text: '剧集', num: 700009 },
  { cid: 96, text: '电影', num: 700009 },
  { cid: 85, text: '综艺', num: 700009 },
  { cid: 100, text: '动漫', num: 700009 },
  { cid: 95, text: '音乐', num: 700009 },
  { cid: 99, text: '游戏', num: 700008 },
  { cid: 87, text: '教育', num: 700009 },
  { cid: 84, text: '纪实', num: 700009 },
  { cid: 86, text: '娱乐', num: 700008 },
  { cid: 98, text: '体育', num: 700008 },
  { cid: 94, text: '搞笑', num: 700008 },
  { cid: 103, text: '生活', num: 700008 }
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

  results.forEach((item, index) => {
    const itemObj = JSON.parse(item)
    const dataList = itemObj.result.data.map((item, idx) => {
      return {
        rank: idx,
        origin: 'YOUKU',
        title: item.title,
        url: item.homepageurl,
        score: item.vv
      }
    })

    rankList.push({
      dataUrl: channels[index].url,
      type: channels[index].text,
      list: dataList
    })
  })

  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: JSON.stringify(rankList)
  }
}

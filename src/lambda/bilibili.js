const { request } = require('../utils/index')
const API = 'https://api.bilibili.com/x/web-interface/ranking?day=3&rid='

function generateUrl(rid = 0) {
  return `${API}${rid}`
}

exports.handler = async (event, context) => {
  const { cid } = event.queryStringParameters
  const url = generateUrl(cid)
  const list = await request(url).then(res => JSON.parse(res).data.list)
  const rank = []

  list.forEach((item, index) => {
    if (rank.length > 29) {
      return
    }
    rank.push({
      url: `https://www.bilibili.com/video/av${item.aid}`,
      rank: index + 1,
      title: item.title,
      origin: 0,
      play: item.play,
      image: item.pic,
      author: item.author
    })
  })

  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: JSON.stringify(rank)
  }
}

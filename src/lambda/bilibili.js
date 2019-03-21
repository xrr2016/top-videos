const { request } = require('../utils/index')
const API = 'https://api.bilibili.com/x/web-interface/ranking?day=3&rid='

function generateUrl(rid = 0) {
  return `${API}${rid}`
}

exports.handler = async (event, context) => {
  const { rid } = event.queryStringParameters
  const url = generateUrl(rid)
  const list = await request(url).then(res => JSON.parse(res).data.list)
  const rank = []

  list.forEach((item, index) => {
    rank.push({
      url: `https://www.bilibili.com/video/av${item.aid}`,
      rank: index + 1,
      title: item.title,
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

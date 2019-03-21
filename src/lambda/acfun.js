const { request } = require('../utils/index')

const API =
  'http://api.aixifan.com/searches/channel?sort=1&pageNo=1&pageSize=50&range=86400000&parentChannelId='

function generateUrl(cid = 1) {
  return `${API}${cid}`
}

exports.handler = async (event, context) => {
  const { cid } = event.queryStringParameters
  const url = generateUrl(cid)

  const list = await request(url, {
    scheme: 'http:',
    headers: { deviceType: 2 }
  }).then(res => JSON.parse(res).data.list)

  const rank = []

  list.forEach((item, index) => {
    rank.push({
      url: `http://www.acfun.cn/v/ac${item.contentId}`,
      rank: index + 1,
      title: item.title,
      play: item.views,
      image: item.cover,
      author: item.user.username
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

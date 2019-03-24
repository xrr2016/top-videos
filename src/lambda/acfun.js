import fetch from 'node-fetch'

const API =
  'http://api.aixifan.com/searches/channel?sort=1&pageNo=1&pageSize=30&range=86400000&parentChannelId='

function generateUrl(cid = 1) {
  return `${API}${cid}`
}

exports.handler = async (event, context) => {
  const { cid } = event.queryStringParameters
  const url = generateUrl(cid)

  const list = await fetch(url, {
    headers: { deviceType: 2 }
  })
    .then(response => response.json())
    .then(result => {
      if (result.code !== 200) {
        return []
      }
      return result.data.list
    })
    .catch(err => [])

  const rank = []

  list.forEach((item, index) => {
    if (rank.length > 29) {
      return
    }
    rank.push({
      url: `http://www.acfun.cn/v/ac${item.contentId}`,
      rank: index + 1,
      title: item.title,
      origin: 'acfun',
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

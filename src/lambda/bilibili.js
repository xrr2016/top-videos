import fetch from 'node-fetch'

const API = 'https://api.bilibili.com/x/web-interface/ranking?day=3&rid='

function generateUrl(rid = 0) {
  return `${API}${rid}`
}

exports.handler = async (event, context) => {
  const { cid } = event.queryStringParameters
  const url = generateUrl(cid)

  const list = await fetch(url)
    .then(response => response.json())
    .then(result => {
      if (result.code !== 0) {
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
      url: `https://www.bilibili.com/video/av${item.aid}`,
      rank: index + 1,
      title: item.title,
      origin: 'bilibili',
      play: item.play,
      image: item.pic,
      author: item.author
    })
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rank)
  }
}

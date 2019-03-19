const cheerio = require('cheerio')
const { request } = require('../utils/index')

const BASE = 'https://v.qq.com/x/list'

const channels = [
  { channel: '电影', type: 'movie', url: 'https://v.qq.com/x/list/movie' },
  { channel: '电视剧', type: 'tv', url: 'https://v.qq.com/x/list/tv' },
  { channel: '综艺', type: 'variety', url: 'https://v.qq.com/x/list/variety' },
  { channel: '动漫', type: 'cartoon', url: 'https://v.qq.com/x/list/cartoon' },
  { channel: '音乐', type: 'music', url: 'https://v.qq.com/x/list/music' }
]

const missions = channels.map(c => request(c.url).then(res => res))

exports.handler = async (event, context) => {
  const rankList = []
  const results = await Promise.all(missions)

  results.forEach((html, index) => {
    const $ = cheerio.load(html)
    const $list = $('.figures_list')
    const list = []

    $list.children().each((idx, item) => {
      const $item = $(item)
      const $link = $item.find('a.figure')

      if (list.length > 19) {
        return
      }

      list.push({
        rank: idx,
        origin: 'TENCENT',
        title: $link.find('img').attr('alt'),
        url: $link.attr('href'),
        score: $item.find('.num').text()
      })
    })

    rankList.push({
      type: channels[index].channel,
      list
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

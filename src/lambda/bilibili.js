const cheerio = require('cheerio')
const { request } = require('../utils/index')

const BASE = 'https://www.bilibili.com/ranking/all/0/1/3'

exports.handler = async (event, context) => {
  const data = await request(BASE).then(res => res)
  const $ = cheerio.load(data)

  const rankList = []

  $('.rank-list')
    .children()
    .each(function(index, ele) {
      const $item = $(ele)
      const $title = $item.find('.title')

      if (rankList.length > 19) {
        return
      }

      rankList.push({
        rank: index,
        origin: 'BILIBILI',
        title: $title.text(),
        url: $title.attr('href'),
        image: $item.find('img').attr('src'),
        score: parseInt(
          $item
            .find('.pts')
            .first()
            .text()
        )
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

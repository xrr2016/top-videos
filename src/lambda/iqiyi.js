// Copyright (c) 2019 轻剑快马
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const cheerio = require('cheerio')
const { request } = require('../utils/index')

const BASE = 'http://top.iqiyi.com/rebobang.html'

exports.handler = async (event, context) => {
  const data = await request(BASE, false).then(res => res)
  const $ = cheerio.load(data)

  const rankList = []

  $('.topDetails-list')
    .children()
    .each(function(index, ele) {
      const $item = $(ele)
      const $content = $item.find('.topDetails-con')
      const $link = $content.find('a')

      rankList.push({
        rank: index,
        origin: 'IQIYI',
        title: $link.attr('title'),
        description: $content.find('h3').text(),
        url: $link.attr('href'),
        score: parseInt(
          $content
            .find('em')
            .last()
            .text()
            .slice(3)
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

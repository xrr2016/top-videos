// Copyright (c) 2019 轻剑快马
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const http = require('http')
const https = require('https')

function request(
  url = '',
  options = {
    scheme: 'https:',
    headers: { 'Content-Type': 'application/json' }
  }
) {
  if (!url) {
    return
  }

  return new Promise((resolve, reject) => {
    let data = ''
    const isHttps = options.scheme === 'https:'

    if (isHttps) {
      https
        .get(url, options, res => {
          res.on('data', d => {
            data += d
          })
          res.on('end', () => {
            resolve(data)
          })
        })
        .on('error', e => {
          reject(e)
        })
    } else {
      http
        .get(url, options, res => {
          res.on('data', d => {
            data += d
          })
          res.on('end', () => {
            resolve(data)
          })
        })
        .on('error', e => {
          reject(e)
        })
    }
  })
}

module.exports = {
  request
}

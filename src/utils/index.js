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
    let rawData = ''
    const isHttps = options.scheme === 'https:'

    if (isHttps) {
      https
        .get(url, options, res => {
          res.setEncoding('utf8')
          res.on('data', d => {
            rawData += d
          })
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(rawData)
              resolve(parsedData)
            } catch (e) {
              reject(e.message)
            }
          })
        })
        .on('error', e => {
          reject(e.message)
        })
    } else {
      http
        .get(url, options, res => {
          res.setEncoding('utf8')
          res.on('data', d => {
            rawData += d
          })
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(rawData)
              resolve(parsedData)
            } catch (e) {
              reject(e.message)
            }
          })
        })
        .on('error', e => {
          reject(e.message)
        })
    }
  })
}

module.exports = request

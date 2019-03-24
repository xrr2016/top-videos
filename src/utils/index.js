// Copyright (c) 2019 轻剑快马
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const http = require('http')
const https = require('https')

function request(
  url = '',
  options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
) {
  if (!url) {
    return
  }

  const _opts = new URL(url).toJSON()

  console.log('url :', url)

  console.log('_opts :', _opts)
  // const _options = {}

  // for (const key in _opts) {
  //   if (_opts.hasOwnProperty(key)) {
  //     _options[key] = _opts[key]
  //   }
  // }

  // _options.headers = Object.assign(
  //   { 'Content-Type': 'application/json' },
  //   options.headers
  // )
  // _options.method = options.method

  // console.log('_options :', _options)

  return Promise.resolve({
    data: {
      list: []
    }
  })

  // return new Promise((resolve, reject) => {
  //   let rawData = ''
  //   const isHttps = options.scheme === 'https:'

  //   if (isHttps) {
  //     https
  //       .get(url, res => {
  //         res.setEncoding('utf8')
  //         res.on('data', d => {
  //           rawData += d
  //         })
  //         res.on('end', () => {
  //           try {
  //             const parsedData = JSON.parse(rawData)
  //             resolve(parsedData)
  //           } catch (e) {
  //             reject(e.message)
  //           }
  //         })
  //       })
  //       .on('error', e => {
  //         reject(e.message)
  //       })
  //   } else {
  //     http
  //       .get(url, res => {
  //         res.setEncoding('utf8')
  //         res.on('data', d => {
  //           rawData += d
  //         })
  //         res.on('end', () => {
  //           try {
  //             const parsedData = JSON.parse(rawData)
  //             resolve(parsedData)
  //           } catch (e) {
  //             reject(e.message)
  //           }
  //         })
  //       })
  //       .on('error', e => {
  //         reject(e.message)
  //       })
  //   }
  // })
}

module.exports = request

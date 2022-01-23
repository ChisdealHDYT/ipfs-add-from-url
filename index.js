#!/usr/bin/env node
'use strict'

const { create, urlSource } = require('ipfs-http-client')
const [ url ] = process.argv.slice(2)

const ipfs = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

if (!url) {
  console.error('expected a url as argument')
  process.exit(1)
}

ipfs.add(urlSource(url))
.then(res => res[0] && res[0].cid)
.then(console.log)
.catch(console.error)

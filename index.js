#!/usr/bin/env node
'use strict'

const { create, urlSource } = require('ipfs-http-client')
const [ url ] = process.argv.slice(2)

const ipfs = create('https://ipfs.infura.io:5001/api/v0')

if (!url) {
  console.error('expected a url as argument')
  process.exit(1)
}

async function UrlToIPFS(url) {

const file = await ipfs.add(urlSource(url));

var cid = 'https://ipfs.infura.io/ipfs/'+file.cid;

return {'path': file.path, 'cid': file.cid, 'size': file.size, 'url': cid};

}

UrlToIPFS(url)
.then(res => res)
.then(console.log)
.catch(console.error)

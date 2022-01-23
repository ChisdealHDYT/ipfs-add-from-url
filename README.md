# ipfs-add-from-url
A command line executable to add a file to [IPFS](http://ipfs.io) from a URL instead of a file path

## Dependency
Make sure GIT is [installed](https://git-scm.com/download) for Windows / MAC

for Linux 
```
sudo apt install -y git (UBUNTU)

sudo yum install git (CENTOS)
```


## Install
**Globally**
```sh
npm install -g https://github.com/ChisdealHDYT/ipfs-add-from-url-updated
# Use anywhere
ipfs-add-from-url https://inventaire.io/public/icon/120.png
```

**In a project**
```sh
npm install https://github.com/ChisdealHDYT/ipfs-add-from-url-updated --save
# Use directly from npm scripts
ipfs-add-from-url https://inventaire.io/public/icon/120.png
# Or using the relative path from the command line
./node_modules/.bin/ipfs-add-from-url https://inventaire.io/public/icon/120.png
```

**RESPONSE CODE**

```
{
  path: '120.png',
  cid: CID(QmQeSacrxh2se6MNzvahWZL9Zimrx3wqLkGFjiabiYEhzp),
  size: 4774,
  url: 'https://ipfs.infura.io/ipfs/QmQeSacrxh2se6MNzvahWZL9Zimrx3wqLkGFjiabiYEhzp'
}
```

**MANUAL CODE FOR YOUR COMMANDS AND ETC**

```
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

UrlToIPFS(url).then(data => {
	console.log(data);
});
```

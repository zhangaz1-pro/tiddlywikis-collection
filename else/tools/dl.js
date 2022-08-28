const fs = require('fs');

const uniqueElements = arr => [...new Set(arr)];

fs.promises.readFile('spots.txt', 'utf8')
	.then(
		urls => uniqueElements(urls.split(/\s/g))
			.sort()
			.map(url => {
				const fileName = `${url.replace('http://', '')}.html`;
				return `
if [ ! -f "${fileName}" ]; then
	wget "${url}" -O "${fileName}"
fi
						`
			})
			.join('\n')
	)
	// .then()
	.then(console.log);
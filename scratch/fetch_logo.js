const https = require('https');
https.get('https://www.livepixeltechnologies.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<img[^>]+src=["']([^"']+logo[^"']*)["'][^>]*>/i);
    console.log(match ? match[1] : 'No logo found');
  });
});

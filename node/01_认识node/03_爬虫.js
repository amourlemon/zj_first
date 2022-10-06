const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

request('http://www.lanrentuku.com/', (error, response, body) => {
    let $ = cheerio.load(body);
    $('img', '.in-ne').each((i, e) => {
        let src = $(e).attr('src');
        let name = src.substr(src.lastIndexOf('/') + 1);
        request(src).pipe(fs.createWriteStream(name))
    })
})
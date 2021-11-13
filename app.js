const ytdl = require('ytdl-core');
const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const colors = require('colors')


readline.question('Please put the URL here:', url => {
    ytdl(url)
        .pipe(fs.createWriteStream('video.mp4'));
    readline.close()
});
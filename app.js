const ytdl = require('ytdl-core');
var ProgressBar = require('progress');
const fs = require('fs')
const chalk = require('chalk')

async function main(url) { 
    
    let info = await ytdl.getInfo(url);

    ytdl(url)
        .pipe(fs.createWriteStream(`${info.videoDetails.title}.mp4`));

    var bar = new ProgressBar(`:bar ${chalk.red(':current')}${chalk.grey('/')}${chalk.blue(':total')}`, { total: 10 });
    var timer = setInterval(function () {
        bar.tick();
        if (bar.complete) {
        console.log(`\n${chalk.greenBright('Video downloaded')}\n`);
        clearInterval(timer);
        }
    }, 100);


}

main('https://www.youtube.com/watch?v=UT5F9AXjwhg')

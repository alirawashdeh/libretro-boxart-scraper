
const config = require('./config.json')
const findimage = require('./lib/findimage.js')
const saveFile = require('./lib/save.js')
const resizeFile = require('./lib/resize.js')
const path = require('path');
const fs = require('fs');

const scrape = async (gamename,romspath,siteurl,imgheight) => {
  const url = await findimage(siteurl,gamename)
  if(url){
  await saveFile(romspath + '/' + gamename + '.png',url)
  await resizeFile(romspath + '/' + gamename + '.png',parseInt(imgheight)).then(
    console.log('✅ Saved image for ' + gamename)
  )
  }
  else{
    console.log('🤷‍♀️ No image found for ' + gamename);
  }
}

const start = async () => {
  config.forEach(entry => {
    const files = fs.readdirSync(entry.folder)
    files.forEach(async file => {
      if(path.parse(file).ext != ".png")
        await scrape(path.parse(file).name,
        path.resolve(entry.folder),
        entry.url,
        entry.imgheight)
      })
  }
  )
}

start()

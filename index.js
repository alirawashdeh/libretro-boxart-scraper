
const config = require('./config.json')
const findimage = require('./lib/findimage.js')
const saveFile = require('./lib/save.js')
const resizeFile = require('./lib/resize.js')
const path = require('path');
const fs = require('fs');

const scrape = async (gamename,romspath) => {
  const url = await findimage(config.url,gamename)
  if(url){
  await saveFile('./roms/' + gamename + '.png',url)
  await resizeFile(romspath + '/' + gamename + '.png',parseInt(config.imgheight)).then(
    console.log('✅ Saved image for ' + gamename)
  )
  }
  else{
    console.log('🤷‍♀️ No image found for ' + gamename);
  }
}

const start = async () => {
  const files = fs.readdirSync('./roms/')
  files.forEach(async file => {
   await scrape(path.parse(file).name,path.resolve('./roms/'));
  })
}

start()

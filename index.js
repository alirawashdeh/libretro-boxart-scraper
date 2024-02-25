
const config = require('./config.json')
const findimage = require('./lib/findimage.js')
const saveFile = require('./lib/save.js')
const path = require('path');
const fs = require('fs');

const scrape = async (game) => {
  const url = await findimage(config.url,game)
  if(url){
  await saveFile('./roms/' + game + '.png',url)
  console.log('✅ Saved image for ' + game);
  }
  else{
    console.log('🤷‍♀️ No image found for ' + game);
  }
}

const start = async () => {
  const files = fs.readdirSync('./roms/')
  files.forEach(file => {
   scrape(path.parse(file).name);
  })
}

start()

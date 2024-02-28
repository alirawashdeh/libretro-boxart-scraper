const jimp = require('jimp');

const resizeFile = async (filename,imgheight)  => 
{
  jimp.read(filename, (err, file) => {
  if (err) {
    console.log("Could not resize image " + filename + " " + err)
    return
  }
  file
    .resize(jimp.AUTO, imgheight) // resize
    .write(filename); // save
})
}

module.exports = resizeFile;

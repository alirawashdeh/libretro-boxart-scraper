const jimp = require('jimp');

const resizeFile = async (filename,imgheight)  => 
{
  jimp.read(filename, (err, file) => {
  if (err) throw err;
  file
    .resize(jimp.AUTO, imgheight) // resize
    .write(filename); // save
});
}

module.exports = resizeFile;

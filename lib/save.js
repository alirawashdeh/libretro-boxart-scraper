const fs = require('fs').promises;

const saveFile = async (filename, url)  => 
{
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const buffer = Buffer.from( await blob.arrayBuffer() )
    await fs.writeFile(filename, buffer, function (err) {
      if (err) return console.log('❌ Error outputting file ' + filename + ' ' + err);
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = saveFile;

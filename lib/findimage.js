const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const findimage = async (url, name) => {
  try {
    const response = await fetch(url)
    const body = await response.text()
    const dom = new JSDOM(body)
    const links = dom.window.document.querySelectorAll("a")
    for (var i = 0; i<links.length; i++)
    {
      if(links[i].textContent.startsWith(name)){
      return url + links[i].getAttribute("href")
      }
    }
  } catch (error) {
    console.error(error);
  }

}

module.exports = findimage;

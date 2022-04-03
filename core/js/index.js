import { is, each } from "https://x-titan.github.io/utils/index.js"
import { search, css, scrollTo } from "https://x-titan.github.io/web-utils/index.js"
const body = search.id("body")
const msg = search.id("msg")
const alist = search.all("a")

each(alist, (a) => {
  const href = a.getAttribute("href")
  if (href[0] === "#") a.onclick = function (e) {
    e.preventDefault()
    history.pushState(null, null, href)
    scrollTo(search(href))
  }
})

window.onpopstate = function (e) {
  console.log(e)
  const { hash } = location
  if (hash === "") return scrollTo(body)
  scrollTo(search(hash))
}

search.id("msgclose").onclick = closeMSG

new Promise((res, rej) => {
  rej("<h1>This site doesnt work</h1>")
  try {
    if (location.hash) {
      scrollTo(search(location.hash))
    }
  } catch (e) { rej() }

  res()
}).catch(err => {
  if (is.error(err)) {
    console.error(err)
    openMSG("<div fill_ flex center col>" + err.message + "</div>")
  } else
    openMSG("<div fill_ flex center col>Error this site doesnt work</div>")
})

function closeMSG() {
  document.body.removeAttribute("msgopen")
  msg.innerHTML = ""

}
function openMSG(innerHTML) {
  document.body.setAttribute("msgopen", "")
  msg.innerHTML = innerHTML
}
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
    openSection(href.slice(1))
  }
})

function openSection(id) {
  const section = search.id(id)
  const input = search("input", section)
  input.checked = true
}

window.onpopstate = function (e) {
  const { hash } = location
  if (hash === "") return scrollTo(body)
}

search.id("msgclose").onclick = closeMSG

new Promise((res, rej) => {
  try {
    if (location.hash) {
      openSection(location.hash.slice(1))
    }
  } catch (e) {
    location.hash = ""
  }
  res()
}).catch(err => {
  if (is.error(err)) {
    console.error(err)
    openMSG("<div fill_ flex center col>" + err.message + "</div>")
  } else
    openMSG("<div fill_ flex center col>" + err + "</div>")
})

function closeMSG() {
  document.body.removeAttribute("msgopen")
  msg.innerHTML = ""

}
function openMSG(innerHTML) {
  document.body.setAttribute("msgopen", "")
  msg.innerHTML = innerHTML
}
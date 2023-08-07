import { is, each, extend } from "https://x-titan.github.io/utils/index.js"
import { search, css, attr } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const { head, body } = d

const loadT = 750
const longUpdT = 7000
const loadAnimT = 500
const updT = 50
const openAnimT = loadAnimT * 2

function failure(href) {
  location.href = href
  location.reload()
}

function init(html) {
  attr.add(body,"loading")

  return new Promise((res, rej) => {
    let startTime = Date.now()

    if (is.str(html)) {
      body.scrollTop = 0
      body.innerHTML = html
      startTime += openAnimT
    }

    const update = () => {
      if (
        d.readyState === "complete"
        && (startTime + loadT) < Date.now()
      ) return res()

      if (startTime + longUpdT < Date.now()) {
        return rej(new Error("It took a long time to load the website"))
      }

      setTimeout(update, updT)
    }

    d.addEventListener(
      "DOMContentLoaded",
      d.onreadystatechange = update
    )
    if (is.str(html)) update()
  }).then(() => {
    body.removeAttribute("loading")
  })
}

init()
import { is, each, range, validate } from "https://x-titan.github.io/utils/index.js"
import { List } from "https://x-titan.github.io/list/index.js"
import * as path from "https://x-titan.github.io/path/index.js"
import { search, css, validHTML, isHTML, attr, } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const { body } = d
const { log } = console

const Content = (search.id("content") || search.new("div"))

const ReadmeList = [
  "readme.md",
  "readme.txt",
  "readme",
]

function errorContent(href, callback) {
  GET(path.join(location.origin, "404.md"))
    .then(callback)
    .catch(() => {
      location.href = (path.join(location.origin, "404.html") + "#" + location.href.split("#")[0])
    })
}

function loadContent(href, callback, attemp = 0) {
  validate(is.str, href)
  validate(is.func, callback)

  if (attemp >= ReadmeList.length) {
    return errorContent(href, callback)
  }

  GET(path.join(href, ReadmeList[attemp]))
    .then(callback)
    .catch(() => (loadContent(href, callback, ++attemp)))
}

async function GET(href) {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest

    xml.responseType = "text"
    xml.onerror = reject
    xml.onload = (ev) => {
      if (xml.status === 200) {
        resolve(xml.responseText)
      } else {
        reject(ev)
      }
    }

    xml.open("GET", href)
    xml.send()
  })
}

function setMarkDownContent(value) {
  Content.innerHTML = marked.parse(value)
}

loadContent(location.href, setMarkDownContent)

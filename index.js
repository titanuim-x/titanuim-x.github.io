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
  "README.md",
  "readme.md",
  "README.txt",
  "readme.txt",
  "readme",
]

function errorContent(href, callback) {
  if (location.pathname === "404.html") return

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

function GET(href) {
  validate("string", href)
  console.log(href)
  return (
    fetch(href, { method: "GET" })
      .then((response) => (response.text()))
  )
}

function setMarkDownContent(value) {
  Content.innerHTML = marked.parse(value)
}

loadContent(location.pathname, setMarkDownContent)

const header = `
<header>

</header>`
const footer = `
<footer>
  
</footer>`
import { is, each, range, validate } from "https://x-titan.github.io/utils/index.js"
import { List } from "https://x-titan.github.io/list/index.js"
import * as path from "https://x-titan.github.io/path/index.js"
import { search, css, validHTML, isHTML, attr, } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const { body } = d
const { log } = console

const ReadmeList = [
  "readme.md",
  "readme.txt",
  "readme",
];



function getHEADER() {
  return `
<header>
  <nav class="header-container">
    <ul class="header-nav-list" flex="row">
      <div >
        <a href="/" class="header-hero header-main-link"><i class="icon-hero1"></i></a>
      </div >
      <div >
        <a href="/studio/index.html" class="header-main-link">Studio</a>
        <div class="header-submenu">
          <div class="header-container">
            <div class="header-group">
              First group
            </div>
            <div class="header-group">
              Second group
            </div>
            <div class="header-group">
              Last group
            </div>
          </div>
        </div>
      </div >
      <div >
        <a href="/gallery/index.html" class="header-main-link">Gallery</a>
        <div class="header-submenu">
          <div class="header-container">
            <div class="header-group">
              First group
            </div>
            <div class="header-group">
              Second group
            </div>
            <div class="header-group">
              Last group
            </div>
          </div>
        </div>
      </div >
      <div >
        <a href="/explore/index.html" class="header-main-link">Explore</a>
        <div class="header-submenu">
          <div class="header-container">
            <div class="header-group">
              First group
            </div>
            <div class="header-group">
              Second group
            </div>
            <div class="header-group">
              Last group
            </div>
          </div>
        </div>
      </div >
      <div >
        <a href="/support/index.html" class="header-main-link">Support</a>
        <div class="header-submenu">
          <div class="header-container">
            <div class="header-group">
              First group
            </div>
            <div class="header-group">
              Second group
            </div>
            <div class="header-group">
              Last group
            </div>
          </div>
        </div>
      </div >
    </ul>
  </nav>
</header>
`
}

function getFOOTER() {
  return `
<footer>
  <div container grid>
    footer grid
  </div>
</footer>
`
}

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
  body.innerHTML = (
    getHEADER() +
    "<main><div content container>" +
    marked.parse(value) +
    "</div></main>" +
    getFOOTER()
  )
}

loadContent(location.pathname, setMarkDownContent)

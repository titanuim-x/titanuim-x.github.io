import { is } from "https://x-titan.github.io/utils/index.js"
import { search, css } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const body = d.body
let once = 0

const headerHTML = `
<div header-container>
  <button header-button>
    <div header-icon></div>
  </button>
  <a href="/" header-button header-hero>
    <div header-icon>
      <img src="https://titanium-studio.github.io/src/svg/hero1.svg" alt="hero">
    </div>
  </a>
  <button onclick="headerOnClick()" header-button header-burger>
    <div header-icon>
      <span></span>
      <span></span>
    </div>
  </button>
</div>`

const footerHTML = `
<div fill grid>
  <div card></div>
  <div card></div>
  <div card></div>
  <div card></div>
  <div card></div>
  <div card></div>
  <div card></div>
  <div card></div>
</div>`

const navHTML = `
<div fill_ flex="row" center>
  <div></div>
  <div text-center>
    <ul>
      <li><a href="/works">Works</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</div>`


function onload() {
  if (once) { return }

  once++

  const content = search("#body")
  const header = search.new("header")
  const footer = search.new("footer")
  const nav = search.new("div")

  header.innerHTML = headerHTML
  footer.innerHTML = footerHTML
  nav.innerHTML = navHTML

  globalThis.headerOnClick = function () {
    css.toggle(body, "header_nav_active")
  }

  body.prepend(header)
  content.append(footer)
  body.append(nav)
}

globalThis.addEventListener("DOMContentLoaded", onload)
globalThis.addEventListener("load", onload)
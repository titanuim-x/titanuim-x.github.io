import { is } from "https://x-titan.github.io/utils/index.js"
import { search, css } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const body = d.body
let once = 0

const headerHTML = `
<div flex="row" header-container>
  <button header-button>
    <div header-icon></div>
  </button>
  <a href="/" button header-button header-hero>
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
<div fill grid class="notranslate" translate="no">
  <div card></div>
  <div card></div>
  <div card></div>
  <div card></div>
  <div card>
    <ul>
      <li><h6>Site map</h6></li>
      <li><a href="/">Index</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/work">Works</a></li>
      <li><a href="/help">Help</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div card>
    <ul>
      <li><h6>Socials</h6></li>
      <li><a href="https://www.behance.net/asettelmanov">Behance</a></li>
      <li><a href="https://wa.me/+77788405404">Whatsapp</a></li>
      <li><a href="https://www.facebook.com/ace.titan.404">Facebook</a></li>
      <li><a href="https://t.me/titanov">Telegram</a></li>
      <li><a href="https://vk.com/aset_telmanov">VKontakte</a></li>
      <li><a href="https://github.com/x-titan">Github</a></li>
    </ul>
  </div>
  <div card>
    <ul>
      <li><h6>Sites</h6></li>
      <li><a href="https://x-titan.herokuapp.com">Heroku/X-Titan</a></li>
      <li><a href="https://wa.me/+77788405404">Firebase/X-Titan</a></li>
      <li><a href="https://titanium-studio.github.io/">Github/Titanium-studio</a></li>
      <li><a href="https://x-titan.github.io/">Github/X-Titan</a></li>
    </ul>
  </div>
  <div card>
    <p>Powered by <a href="https://x-titan.github.io">X-Titan</a></p>
  </div>
</div>`

const navHTML = `
<div fill preset="1">
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

  header.id = "header"
  footer.id = "footer"
  nav.id = "navbox"

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
import { is } from "https://x-titan.github.io/utils/index.js"
import { search, css } from "https://x-titan.github.io/web-utils/index.js"





/** HTML tag
<></>
*/

/**
 * @param {globalThis} g
 * @param {document} d
 * @param {HTMLBodyElement} body
 */
function main(g, d, body) {
  const content = search.id("body")
  const header = search.newElement("header")
  const footer = search.newElement("footer")
  const nav_box = search.newElement("div")

  if (is.empty(content)) {
    return console.warn("Content is not defined. please create element in root html with tag `body`")
  }

  header.id = "header"
  footer.id = "footer"
  nav_box.id = "nav_box"

  header.innerHTML = `
  <div nolinkbefore header-container>
    <button header-button header-search>
      <div header-icon>
        <span header-search-circle></span>
        <span stick header-search-stick></span>
      </div>
    </button>
    <a href="/" header-button header-hero>
      <div header-icon>
        <img src="https://titanium-studio.github.io/src/svg/hero1.svg" alt="hero">
      </div>
    </a>
    <button onclick="headerOnClick()" header-button header-burger>
      <div header-icon>
        <span stick header-burger-stick></span>
        <span stick header-burger-stick></span>
      </div>
    </button>
  </div>`

  footer.innerHTML = `<div nolinkbefore class="container">
  <div>
    <h2>Site map</h2>
    <ul>
      <li><a href="/">Index</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div>
    <h2>Socials</h2>
    <ul>
      <li><a href="https://www.Behance.net/asettelmanov">Behance</a></li>
      <li><a href="https://wa.me/+77788405404">Whatsapp</a></li>
      <li><a href="https://www.Facebook.com/ace.titan.404">Facebook</a></li>
      <li><a href="https://t.me/titanov">Telegram</a></li>
      <li><a href="https://vk.com/aset_telmanov">VKontakte</a></li>
    </ul>
  </div>
  <div>
    <h2>Sites</h2>
    <ul>
      <li><a href="https://x-titan.herokuapp.com">X-Titan</a></li>
      <li><a href="https://titanium-studio.github.io">Titanium-Studio</a></li>
      <li><a href="https:/x-titan.web.app">Firebase/X-Titan</a></li>
      <li><a href="https:/x-titan.github.io">github/X-Titan</a></li>
    </ul>
  </div>
  <div>
    <h2>Githubs</h2>
    <ul>
      <li><a href="https://github.com/x-titan">X-Titan</a></li>
      <li><a href="https://github.com/titanium-studio">Titanium-Studio</a></li>
    </ul>
  </div>
  <div footer-hero class="footer-hero">
    <a href="/">
      <h2>X-Titan</h2>
    </a>
    <p>powered by <a href="https://titanium-studio.github.io">Titanium-Studio</a></p>
  </div>
</div>`; `
<div class="container">
  <a href="/" class="logo notranslate" nolinkbefore translate="no">
    <img src="https://titanium-studio.github.io/src/svg/hero1.svg" alt="hero">
  </a>
  <nav id="nav">
    <ul flex="row" id="nav_list">
      <li><a href="https://x-titan.herokuapp.com/archive">Archive</a></li>
      <li><a href="https://titanium-studio.github.io/gallery">Gallery</a></li>
      <li><a href="https://github.com/x-titan">Github</a></li>
    </ul>
  </nav>
</div>`

  nav_box.innerHTML = `
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

  globalThis.headerOnClick = function () {
    css.toggle(body, "header_nav_active")
  }

  body.prepend(header)
  content.append(footer)
  body.append(nav_box)
}

if (!search.id("root")) main(globalThis, document, document.body)
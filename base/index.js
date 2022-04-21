import { is } from "https://x-titan.github.io/utils/index.js"
import { search } from "https://x-titan.github.io/web-utils/index.js"


/**
 * @param {globalThis} g
 * @param {document} d
 * @param {HTMLBodyElement} body
 */
function main(g, d, body) {
  const content = search.id("body")
  const root = search.newElement("div")
  const header = search.newElement("header")
  const footer = search.newElement("footer")

  if (is.empty(content))
    return console.warn("Content is not defined. please create element in root html with id `body`")

  root.id = "root"
  header.id = "header"
  footer.id = "footer"

  header.innerHTML = `
<div class="container">
  <a href="/" class="logo notranslate" nolinkafter translate="no">
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

  footer.innerHTML = `
  <div class="container">
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
  <div class="footer-hero">
    <a href="/">
      <h2>X-Titan</h2>
    </a>
    <p>powered by <a href="https://titanium-studio.github.io">Titanium-Studio</a></p>
  </div>
</div>`

  body.innerHTML = ""
  root.appendChild(content)
  root.appendChild(footer)
  body.appendChild(header)
  body.appendChild(root)
}

if (!search.id("root")) main(globalThis, document, document.body)
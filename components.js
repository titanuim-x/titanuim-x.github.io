export function Header() {
  return `
<header>
  <div class="header-container">
    <nav class="header-nav">
      <div class="header-hero">
        <a href="/" class="header-hero header-link"><i class="icon-hero1"></i></a>
      </div>
      <ul class="header-nav-list">
        <div class="header-li-link">
          <a href="/studio/index.html" class="header-link">Studio</a>
          <div class="header-submenu">
            <div class="header-submenu-container">
              <div class="header-submenu-content">
                <div class="header-group">
                  <h2>Explore Studios</h2>
                  <ul>
                    <li><a href="https://x-titan.github.io/">X Titan</a></li>
                    <li><a href="https://titanium-studio.github.io/">Titanium Studio</a></li>
                    <li><a href="https://x-titan.onrender.com/">X Titan Studio</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-li-link">
          <a href="/gallery/index.html" class="header-link">Gallery</a>
          <div class="header-submenu">
            <div class="header-submenu-container">
              <div class="header-submenu-content">
                <div class="header-group">
                  <h2>Explore Location</h2>
                  <ul>
                    <li><a href="">Aktau</a></li>
                    <li><a href="">Almaty</a></li>
                    <li><a href="">Uralsk</a></li>
                  </ul>
                </div>
                <div class="header-group">
                  <h2>Wahct tags</h2>
                  <ul>
                    <li><a href="">Roboto tech</a></li>
                    <li><a href="">Abstract</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-li-link">
          <a href="/explore/index.html" class="header-link">Explore</a>
          <div class="header-submenu">
            <div class="header-submenu-container">
              <div class="header-submenu-content">
                <div class="header-group">
                  <h2>Explore Contents</h2>
                  <ul>
                    <li><a href="">Main</a></li>
                    <li><a href="">Second</a></li>
                    <li><a href="">Trihd</a></li>
                    <li><a href="">Fourth</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header-li-link">
          <a href="/support/index.html" class="header-link">Support</a>
          <div class="header-submenu">
            <div class="header-submenu-container">
              <div class="header-submenu-content">
                <div class="header-group">
                  <h2>Explore Support</h2>
                  <ul>
                    <li><a href="">First</a></li>
                    <li><a href="">Second</a></li>
                  </ul>
                </div>
                <div class="header-group">
                  <h2>Get Help</h2>
                  <ul>
                    <li><a href="">Road Map</a></li>
                    <li><a href="">Site Map</a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
                </div>
                <div class="header-group">
                  <h2>Explore Socials</h2>
                  <ul>
                    <li><a href="https://www.behance.net/asettelmanov">Behance</a></li>
                    <li><a href="https://www.facebook.com/ace.titan.404">Facebook</a></li>
                    <li><a href="https://wa.me/+77788405404">WhatsApp</a></li>
                    <li><a href="https://github.com/x-titan">Github</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  </div>
</header>
`
}

export function Footer() {
  return `
<footer>
  <div class="footer-container">
    <p>Powered by X Titan</p>
  </div>
</footer>
`
}

export function HeadCSS() {
  return `
<link rel="shortcut icon" href="/src/img/hero2.png" type="image/x-icon">
<link rel="stylesheet" href="/simple/index.css">
<link rel="stylesheet" href="/index.css">
<link rel="stylesheet" href="https://titanium-studio.github.io/fontello.css">
`
}

export function HeadScript() {
  return `
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" defer></script>
`
}

;
`<div class="menu-icon">
  <input class="menu-icon__cheeckbox" type="checkbox" />
  <div>
    <span></span>
    <span></span>
  </div>
</div>
<div search>
  <input type="search" placeholder="Search">
</div>

<style>
.menu-icon {
  position: relative;
  width: var(--size4);
  height: var(--size4);
  cursor: pointer;
}

.menu-icon .menu-icon__cheeckbox {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  z-index: 2;
  -webkit-touch-callout: none;
  position: absolute;
  opacity: 0;
}

.menu-icon div {
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 22px;
  height: 12px;
}

.menu-icon span {
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--header-color, #000);
  /* border-radius: 1px; */
  transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
}

.menu-icon span:first-of-type {
  top: 0;
}

.menu-icon span:last-of-type {
  bottom: 0;
}

.menu-icon.active span:first-of-type,
.menu-icon .menu-icon__cheeckbox:checked+div span:first-of-type {
  transform: rotate(45deg);
  top: 5px;
}

.menu-icon.active span:last-of-type,
.menu-icon .menu-icon__cheeckbox:checked+div span:last-of-type {
  transform: rotate(-45deg);
  bottom: 5px;
}

.menu-icon:hover span:first-of-type {
  width: 26px;
}

.menu-icon:hover span:last-of-type {
  width: 12px;
}

.menu-icon.active:hover span:first-of-type,
.menu-icon.active:hover span:last-of-type,
.menu-icon:hover .menu-icon__cheeckbox:checked+div span:first-of-type,
.menu-icon:hover .menu-icon__cheeckbox:checked+div span:last-of-type {
  width: 22px;
}
</style>
`;
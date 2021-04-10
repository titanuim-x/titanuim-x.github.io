const HOST_URL = "https://api.github.com/users"
const REPOS = "repos"
const USERS = [
  "nonametitan",
  "noname-titan"
]
const $$ = document
const BODY = $$.getElementById("body")

/**
 * @param { any[] } arr
 * @param { (item: any, index: number) => (void | true) } fn
 */
function forEach(arr, fn) { for (let i = 0; i < arr.length; i++) if (fn(arr[i], i) == true) return }

/**
 * @param  {...string } str
 */
function path(...str) {
  let z = "", y = "/"
  forEach(str, (x, i) => {
    if ("string" !== typeof x) throw new TypeError("Bad argument")
    x = x.trim()
    if (i > 0 && x.slice(0, 3) == "../") { z = z.slice(0, z.lastIndexOf("/")); x = s.slice(2) }
    if (i > 0 && x[0] !== y) x = y + x
    if (i < str.length && x.endsWith(y)) x = x.slice(0, x.length - 1)
    z += x
  })
  return z
}
/**
 * @param { string } css
 * @param { HTMLElement | HTMLDivElement } child
 * @param { string | "div" } tag
 */
function Div(css, child, tag) {
  let x = $$.createElement(tag ? tag : "div")
  if (css) x.classList.add(css)
  if ("string" == typeof child) x.innerHTML = child
  else if (child instanceof HTMLElement) x.appendChild(child)
  return x
}
forEach(USERS, user => fetch(path(HOST_URL, user, REPOS))
  .then(x => x.json()).then(x => forEach(x, y => {
    if (y.has_pages) BODY.appendChild(
      Div("card", `<h1>${y.name}</h1><h2>${y.owner.login}</h2><a href="${x.url}">Open</a>`)
    )
  })))
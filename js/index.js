import { tools, DOM } from "https://noname-titan.github.io/Tools/index.js"
import { attr, Block } from "./design.js"

const { each, is, path, getJSON } = tools
const { search, device, Div, styler, add, remove } = DOM

const HOST_URL = "https://api.github.com/users",
  REPOS = "repos",
  USERS = [
    "nonametitan",
    "noname-titan"
  ],
  BODY = search.id("body");

/**
 * @param { string[] } css
 * @param { HTMLElement | HTMLDivElement } child
 * @param { string | "div" } tag
 */
function Div_(css, child, tag) {
  let x = Div()
  if (Array.isArray(css)) x.classList.add(...css)
  if ("string" == typeof child) x.innerHTML = child
  else if (child instanceof HTMLElement) x.appendChild(child)
  return x
}
/**
 * @param {Object} user
 * @param {number} user.id
 * @param {string} user.name
 * @param {string} user.full_name
 * @param {string} user.url
 * @param {string} user.language
 * @param {boolean} user.has_pages
 * @param {Object} user.owner
 * @param {string} user.owner.login
 * @param {string} user.owner.id
 * @param {string} user.owner.avatar_url
 * @param {string} user.owner.url
 * @param {string} user.owner.html_url
 * @param {string} user.owner.type
 */
function CardRepo(user) {
  let x = Div()
  add(x, "card", "gold")
  x.innerHTML = `<h1>${user.name}</h1><h2>${user.owner.login}</h2><a href="${user.html_url}">Open</a>`
  return x
}

let content = search.id("content")

each(USERS, user => getJSON(path(HOST_URL, user, REPOS), (status, data) => {
  each(data,x=>{
    content.appendChild(
      Div_(x.has_pages ? ["card", "gold"] : ["card"],
        `<h4>${x.name}</h4>
        <h6>${x.owner.login}</h6>
        <a href="${x.html_url}">Open</a>`))
  })
  
}))
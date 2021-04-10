const HOST_URL = "https://api.github.com/users"
const REPOS = "repos"
const USERS = [
  "nonametitan",
  "noname-titan"
]

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

forEach(USERS, user => fetch(path(HOST_URL, user, REPOS)).then(x => x.json()).then(x => {
  forEach(x, console.log)
}))
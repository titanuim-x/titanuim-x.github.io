//#region Types
/** @typedef { (err: null | number, res: JSON | any) => void } fn */
//#endregion

/**
 * @param { string } url
 * @param { fn } fn
 */
const getData = (url, fn) => {
  let p = url
  if (p[0] !== "/") p = "/" + p
  getJSON(window.location.origin + p, fn)
},
  getJSON = (url, fn) => {
    let x = new XMLHttpRequest()
    x.open('GET', url, true)
    x.responseType = 'json'
    x.onload = () => fn(x.status === 200 ? null : x.status, x.response)
    x.send()
  }

getJSON("https://api.github.com/users/noname-titan/repos", (err, data) => {
  console.log(data)
})
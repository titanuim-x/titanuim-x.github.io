import { is, each, range } from "https://x-titan.github.io/utils/index.js"
import { List } from "https://x-titan.github.io/list/index.js"
import { search, css, validHTML, isHTML } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const body = d.body

const loadT = 750
const longUpdT = 7000
const loadAnimT = 500
const updT = 50

const noneVisibleQuery = "noneVisible"
const textQuery = "h1,h2,h3,h4,h5,h6,p,a,li,em,i,strong,img,[noneVisible]"
const textAnimationBlocks = search.all("[text-animation]")

const textArray = []
const textList = new List()

function isVisible(target) {
  if (!isHTML(target)) return
  const { top, bottom, height } = target.getBoundingClientRect()

  return (top + height >= 0) && (height + innerHeight >= bottom)
}

function hideAll() {
  each(textArray, (text) => {
    css.add(text, noneVisibleQuery)
  })
  textList.clear()
  textList.fromArray(textArray)
  console.log(textList)
}
function onScrollAnimation() {
  textList.filter((text) => {
    console.log(text)
    if (isVisible(text)) {
      css.remove(image, noneVisibleQuery)
      // return false
    }
    return true
  })
}

// new Promise((res, rej) => {
//   let startTime = Date.now()
//   const update = () => {
//     if (
//       (d.readyState === "complete")
//       && ((startTime + loadT) < Date.now())
//     ) return res()

//     if ((startTime + longUpdT) < Date.now()) {
//       return rej(new Error("It took a long time to load the website"))
//     }

//     setTimeout(update, updT)
//   }
//   // d.addEventListener(
//   //   "DOMContentLoaded",
//   //   d.onreadystatechange = update
//   // )
//   update()
// }).then(() => {
//   each(textAnimationBlocks, (block) => {
//     textArray.push(...search.all(textQuery, block))
//   })
//   hideAll()
// }).then(() => {
//   g.addEventListener("scroll", () => {
//     onScrollAnimation()
//   })
//   onScrollAnimation()
// })
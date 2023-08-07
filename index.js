import { is, each } from "https://x-titan.github.io/utils/index.js"
import { List } from "https://x-titan.github.io/list/index.js"
import { search, css, validHTML } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const body = d.body

console.log("A")

const noneVisibleQuery = "noneVisible"
const textQuery = "h1,h2,h3,h4,h5,h6,p,a,li,em,i,strong,img,[noneVisible]"
const textAnimationBlocks = search.all("[text-animation]")

const textList = []

each(textAnimationBlocks, (block) => {
  textList.push(...search.all(textQuery, block))
})

console.log(textList)

function isVisible(target) {
  const { top, bottom, height } = validHTML(target).getBoundingClientRect()

  return (top + height >= 0) && (height + innerHeight >= bottom)
}

function onScrollAnimation() {
  each(textList, (text, i) => {
    if (isVisible(item, i)) {
      css.remove(image, noneVisibleQuery)
    }
    textList.splice(i, 1)
  })
}
import { is, each, range, validate } from "https://x-titan.github.io/utils/index.js"
import { search, css, validHTML, isHTML, attr, } from "https://x-titan.github.io/web-utils/index.js"
import { List } from "https://x-titan.github.io/list/index.js"
import * as path from "https://x-titan.github.io/path/index.js"
import { Footer, Header, HeadCSS, HeadScript } from "/components.js"

const g = globalThis
const d = document
const { body, head } = d
const { log } = console

head.insertAdjacentHTML("beforeend", HeadCSS())
head.insertAdjacentHTML("beforeend", HeadScript())
body.insertAdjacentHTML("afterbegin", Header())
body.insertAdjacentHTML("beforeend", Footer())
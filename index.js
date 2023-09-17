import { is, each, range, validate } from "https://x-titan.github.io/utils/index.js"
import { List } from "https://x-titan.github.io/list/index.js"
import { search, css, validHTML, isHTML, attr } from "https://x-titan.github.io/web-utils/index.js"

const g = globalThis
const d = document
const { body } = d
const { log } = console

function repoCard(repoData) {
  const rdiv = search.new("div")
  const rname = search.new("div")
  const rowner = search.new("div")
  const rid = search.new("div")
  const rlink = search.new("a")


  attr.add(rdiv, "card")
  attr.add(rdiv, "repository_card")
  rlink.href = repoData.url


}


// fetch("https://api.github.com/users/x-titan/repos")
fetch("/repositories.json")
  .then((response) => (response.json()))
  .then((repositories) => {
    log(repositories)
    validate(is.arr, repositories)

    each(repositories, repoCard)
  })
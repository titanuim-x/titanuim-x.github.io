function isPartiallyVisible(target) {
  let { top, bottom, height } = target.getBoundingClientRect()
  return (top + height >= 0) && (height + window.innerHeight >= bottom)
}
function isFullyVisible(target) {
  let { top, bottom } = target.getBoundingClientRect()
  return (top >= 0) && (bottom <= window.innerHeight)
}
/**
 * @param {Object} param0
 * @param {HTMLElement} [param0.sourceParent]
 * @param {HTMLElement[] | NodeList} param0.targetElements
 * @param {string} [param0.activeClassName]
 */
export default function Animate({ sourceParent, targetElements, activeClassName }) {
  if (!(Array.isArray(targetElements) || targetElements instanceof NodeList)) return
  if (!(sourceParent instanceof HTMLElement)) sourceParent = document.body
  if ("string" !== typeof activeClassName) activeClassName = "active"

  let isScrolling = false, scroll = () => {
    if (isScrolling) requestAnimationFrame(() => scroll(isScrolling = false));
    for (const x of targetElements)
      if (isPartiallyVisible(x)) x.classList.add(activeClassName)
      else x.classList.remove(activeClassName);
    isScrolling = true;
  }, oncomplete = () => {
    if (document.readyState !== "loading") setTimeout(scroll, 10)
    else document.addEventListener("DOMContentLoaded", oncomplete, { once: true })
  }

  sourceParent.addEventListener("scroll", scroll, false);
  oncomplete()
}
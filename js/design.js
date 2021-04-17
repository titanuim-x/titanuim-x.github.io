//#region Types
/** @typedef {( ) => void } alpha */
/** @typedef { number } n */
/** @typedef { (value: any, index: n) => (void | boolean) } iterable */
//#endregion

//#region Tools
const is = {
    empty: value => value == undefined || value == null,
    array: Array.isArray,
    notClass: value => value == globalThis || is.empty(value),
    func: value => "function" == typeof value
}
//#endregion

//#region Iterate
/**
 * @param { any[] } arr
 * @param { iterable } fn
 */
function forEach(arr, fn) { for (let i = 0; i < arr.length; i++) if (fn(arr[i], i) == true) return }
/**
 * @param {{ }} obj
 * @param { (item: any, name: string) => (void | true) } fn
 */
function forIn(obj, fn) { for (const z in obj) if (Object.hasOwnProperty.call(obj, z)) if (fn(obj[z], z) == true) return }
//#endregion

//#region DOM
const $$ = document, $ = query => $$.querySelector(query);
$.all = query => $$.querySelectorAll(query)
$.id = id => $$.getElementById(id)
$.div = () => $$.createElement("div");
//#endregion

//#region CSS
/**
 * @param { HTMLElement } target
 * @param { string | string[] } css
 */
const add = (target, css) => {
    if (is.array(css)) target.classList.add(...css)
    else target.classList.add(css)
},
    remove = (target, css) => {
        if (is.array(css)) target.classList.remove(...css)
        else target.classList.remove(css)
    };

/**
 * @param { HTMLElement } target
 * @param { string } css
 */
const contains = (target, css) => target.classList.contains(css),
    toggle = (target, css) => {
        let p = [target, css]
        contains(...p) ? remove(...p) : add(...p)
    };
/**
 * @param { HTMLElement } target
 * @param { CSSStyleDeclaration | { }} css 
 * @returns 
 */
const styler = (target, css) => forIn(css, (x, z) => $.div().style[z] = x)
styler.pro = (target, css) => forIn(css, (x, z) => $.div().style.setProperty(z, x));
//#endregion


((g) => {
    let hasDone = target => {
        let _ = target.getAttribute("done")
        return (_ == true || _ == "true")
    }

    let attrs = {
        container: (target, value) => {
            add(target, "grid")
            styler.pro(target, "--" + value)
            target.setAttribute("done", true)
        },
        row: (target, value) => { },
        col: (target, value) => { },
        center: (target, value) => { },
        left: (target, value) => { },
        right: (target, value) => { },
        align: (target, value) => { },
        flex: (target, value) => { },
        grid: (target, value) => { },
        x: (target, value) => { },
        y: (target, value) => { },

    }
    forIn(attrs, (x, z) => forEach($.all("[" + z + "]"), y => {
        if (!hasDone(y)) x(y, y.getAttribute(z))
    }))

})(globalThis)
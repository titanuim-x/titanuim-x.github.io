import { XStudio, XBlank, XSection, XContent, XList, XText, XFooter } from "https://x-titan.github.io/xstudio/index.js"
import animation from "/core/js/animation.js"

const xstudio = new XStudio("#app")

xstudio
  .init()
  .then(() => [
    XBlank({ css: ["flex", "wrapper"] },
      XList({ listType: "column", style: { width: "auto", height: "auto" } },
        XText({ tagName: "h2" }, "Aset Telmanov"),
        XList({ listType: "column" },
          XText("Socials:"),
          XText("Behance"),
          XText("Facebook"),
          XText("Telegram")
        )
      )
    )
  ])
  .then(xstudio.use)
  .then(xstudio.ready)
  .then(() => {
    animation({
      sourceParent: xstudio.body,
      targetElements: document.querySelectorAll("[xtext]")
    })
  })
  .catch(XStudio.ERROR)

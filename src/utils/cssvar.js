export default function setStyleTag(meta, style) {
  if (typeof document !== "undefined") {
    const exist = document.querySelector(`[${meta}]`)
    const styleTag = document.createElement('style')
    styleTag.setAttribute(meta, '')
    styleTag.innerHTML = style
    if (exist) {
      exist.replaceWith(styleTag)
      return
    }
    document.head.appendChild(styleTag)
  }
}
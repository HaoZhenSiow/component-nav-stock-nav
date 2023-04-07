import GlobalStyle from "@/styles/GlobalStyle"
import fluid from "@/utils/fluid"

export default function App({ Component, pageProps }) {
  // if (typeof document !== "undefined") {
  //   updateViewport()
  //   document.body.onresize = updateViewport
  // }
  fluid.init()
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

// function updateViewport() {
//   const style = `
//     :root {
//       --viewport: ${innerWidth};
//     }
//   `
//   setStyleTag('data-viewport', style)
// }
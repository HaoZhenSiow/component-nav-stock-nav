import GlobalStyle from "@/styles/GlobalStyle"
import fluid from "@/utils/fluid"

export default function App({ Component, pageProps }) {
  fluid.init()
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}
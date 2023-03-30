import Link from "next/link"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className = "footer">
        <p>
          <Link href="/">Texto</Link>
          <Link href="/art">Arte / Imagem</Link>
        </p>
        
        <p className="txt">Desenvolvido com (NodeJS, React, Next.JS)</p>

      </div>

    </>



  )
}

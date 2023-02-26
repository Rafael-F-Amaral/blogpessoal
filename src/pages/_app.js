import '@/styles/globals.css'
import Menu from '../component/header/menu/Menu'
import Footer from '../component/footer/Footer'



export default function App({ Component, pageProps }) {
  return (<div>
    <div >
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </div>
  </div>)
}

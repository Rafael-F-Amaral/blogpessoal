import '@/styles/globals.css'
import Menu from '../component/header/menu/Menu'
import Footer from '../component/footer/Footer'
import style from '../styles/app.module.css'


export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className={style.app}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>)
}

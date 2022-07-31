import styles from './header.module.scss'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const handleChange = e => {
    // console.log("Idioma seleccionado", e.target.value)
    router.push(router.pathname, router.pathname, {locale: e.target.value})

  }

  // const {asPath, locale, locales} = useRouter()
  // const t = locale === "en" ? en : es;
  return (
    <>
      <header className="container__dark">
          <div className="container">
             <div className={styles.header}>
                <nav className={styles.header__navbar}>
                  <Link href="/">
                    <a><FormattedMessage
                      id="Menu.home"
                      defaultMessage="home"
                    /></a>
                  </Link>
                  <Link href="/portfolio">
                    <a>
                    <FormattedMessage
                      id="Menu.portfolio"
                      defaultMessage="Portfolio"
                    />
                    </a>                
                  </Link>
                </nav>
                <div className={styles.header__languaje}>
                  <div className={styles.header__languaje_content}>
                    <div className={styles.header__languaje_image}>
                    <Image 
                      height='22px'
                      width='22px'
                      src='/icon/globe.svg' 
                      alt='icon globe'
                    />
                    </div>
                    <select 
                      className={`"form-control" ${styles.header__select}`}
                      onClick={handleChange}
                    >
                      <option 
                        className={styles.header__option}
                        value="es"
                      >Español</option>

                      <option 
                        className={styles.header__option}
                        value="en"
                      >Ingles</option>
                    </select>
                  </div>
                </div>
             </div>
          </div>
      </header>
    </>
  )
}

export default Header
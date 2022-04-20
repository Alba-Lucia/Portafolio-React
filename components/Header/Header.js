import styles from './header.module.scss'
import Link from 'next/dist/client/link'

const Header = () => {
  return (
    <header className="container__dark">
        <div className='header__container'>
            <nav className={styles.navbar_content}>
              <Link href="/">Home</Link>
              <Link href="/cv">CV</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/portfolio">Portfolio</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
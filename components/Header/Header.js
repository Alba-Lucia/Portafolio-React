import styles from './header.module.scss'
import Link from 'next/dist/client/link'

const Header = () => {
  return (
    <header className=" header container__dark">
        <div className='container'>
            <nav className={styles.header__navbar}>
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
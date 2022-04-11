import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

import styles from '../styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'

export default function Home() {
  return (    
    <div >
      <Layout/>
    
      <Hero />
          
      <About/>

      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Miss Gonzalez
        </Link>
      </footer>
    </div>
  )
}

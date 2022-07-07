import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

import styles from '../styles/Home.module.scss'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'


export default function Home() {
  return (    
    <div>
      <Layout/>
    
      <Hero />
          
      <About/>

      <Footer/>

    </div>
  )
}

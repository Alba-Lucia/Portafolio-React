import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { About } from '../components/About'
import { Hero } from '../components/Hero/Hero'

export default function Home() {
  return (
    <div>
      <div className="container m-4">
        <Hero />
        <About/>
    </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Miss Gonzalez
        </a>
      </footer>
    </div>
  )
}

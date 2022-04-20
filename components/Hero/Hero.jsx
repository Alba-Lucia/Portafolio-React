import React from 'react'
import styles from './hero.module.scss'
import  Wave  from '../Wave/Wave'

const Hero = () => {
    return (
      <div className={styles.hero__content_blue}>
         <div className="container__dark py-4">
           <div className="hero__container">
              <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center py-5">
                <div className="order-md-1 ">
                  <div className={styles.hero}>
                    <div className="hero__text pe-4 text-end w-100">
                   <p>Hello I{`'`}m</p>
                   <h1>Alba Lucía González</h1>
                    </div>
                  </div>
                </div>
              <img src='AlbaPortafolio.png' alt='Photo Alba Lucia Gonzalez' className={styles.hero__image}/>
            </div>
          </div>
        </div>
         
         <Wave/>
         
      </div>
    )
}

export default Hero

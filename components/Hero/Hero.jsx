import React from 'react'
import styles from './hero.module.scss'
import { WaveHeader }  from '../Wave/Wave'

const Hero = (props) => {

  
    return (
      <div className={styles.hero}>
         <div className="container__dark py-4">
           <div className="container">
              <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center py-md-5">
                <div className="order-md-1 ">
                  <div className={styles.hero__text}>
                    <div className="hero__text--content pe-4 text-end w-100">
                      <p>{props.saludo}</p>
                      <h1 className={styles.hero__name}>{props.titulo}</h1>
                      <p>{props.text}</p>
                      {/* <a href="/archives/Alba-Resume.pdf"className={styles.hero__button}>
                      </a> */}
                        <div className={styles.hero__button}>{props.button}</div>
                        <p className={styles.hero__description}>{props.description}</p>
                    </div>
                  </div>
                </div>
              <img src={props.image} alt='Photo Alba Lucia Gonzalez' className={styles.hero__image}/>
            </div>
          </div>
        </div>
         
         <WaveHeader/>
         
      </div>
    )
}

export default Hero

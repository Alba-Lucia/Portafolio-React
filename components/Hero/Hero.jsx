import React from 'react'
import styles from './hero.module.scss'
import { WaveHeader }  from '../Wave/Wave'
import {FormattedMessage} from "react-intl";

const Hero = (props) => {
  
    return (
      <div className={styles.hero}>
         <div className="container__dark py-4">
           <div className="container">
              <div className=" d-flex flex-column flex-md-row justify-content-between align-items-md-center ">
                <div className="order-md-1 ">
                  <div className={styles.hero__text}>
                    <div className="hero__text--content align-items-center pe-4 text-end w-100">
                      <p>{props.saludo}</p>
                      <h1 className={styles.hero__name}>
                        {props.title}
                      </h1>
                      <p>{props.description}</p>
                      {/* <a href="/archives/Alba-Resume.pdf"className={styles.hero__button}>
                      </a> */}
                        <div className={styles.hero__button}>{props.button}</div>
                        
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

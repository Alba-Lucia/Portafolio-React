import styles from './wave.module.scss'

import React from 'react'

export const WaveHeader = () => {
  return (
    <div className={styles.wave}>
        <div className={styles.wave__desktop}>
          <div className={styles.wave__header}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-4.05,-2.46 C288.77,292.59 244.16,-148.51 502.91,84.38 L506.67,-11.34 L-1.62,-16.27 Z">
              </path>
            </svg>
          </div>
        </div>

        <div className={styles.wave__mobile}>
          <div className={styles.wave__header}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-9.73,3.46 C185.75,75.49 322.83,81.41 511.02,1.49 L501.29,-16.27 L-1.62,-16.27 Z">
              </path>
            </svg>
          </div>
        </div>  
    </div>
  )
}


export const WaveFooter = () => {
  return (
    <div className={styles.wave}>
        <div className={styles.wave__desktop}>
          <div className={styles.wave__header}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-2.59,24.18 C188.71,242.26 286.91,-150.49 503.61,84.38 L500.00,150.00 L0.00,150.00 Z">
              </path>
            </svg>
          </div>
        </div> 

        <div className={styles.wave__mobile}>
          <div className={styles.wave__header}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-7.67,147.53 C197.17,123.84 299.89,123.84 512.08,148.51 L523.93,196.87 L553.27,271.87 Z">
              </path>
            </svg>
          </div>
        </div>  
    </div>
  )
}
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../portfolio.module.scss'
import DataIlustrator from './DataIlustrator'

const Ilustrator = () => {

  const [items, setItems] = useState(DataIlustrator);

  return (
    <div className={`container ${styles.post}`}>
      <h2 className={styles.post__title}>Photoshop / Ilustrator</h2>
      <div className={styles.post__container}>
            {items.map((data) => {
               const {img, alt} = data;
                return(
                  <div key={data.id} >
                      <div className={`${styles.post__image} ${styles.post__border}`}>
                        <Image
                          width='400px'
                          height='400px'
                          src={img} 
                          alt={alt}
                        />
                      </div>
                  </div>
                )
            })}
          </div>
        </div>
  )
}

export default Ilustrator
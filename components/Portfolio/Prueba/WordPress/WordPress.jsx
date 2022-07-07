import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../portfolio.module.scss'
import DataWordPress from './DataWordPress'

const WordPress = () => {

  const [items, setItems] = useState(DataWordPress);

  return (
    <div className={`container ${styles.post}`}>
      <h2 className={styles.post__title}>WordPreass</h2>
      <div className={styles.post__container}>
            {items.map((data) => {
               const {link, img, alt, name, description} = data;
                return(
                  <div key={data.id} className={styles.post__content}>
                      <a href={link}>
                        <div className={styles.post__image}>
                        <Image
                          width='500px'
                          height='250px'
                          src={img} 
                          alt={alt}
                        />
                        </div>
                        <div className={styles.post__text}> 
                          <h5 className={styles.post__name}>{name}</h5>
                          <p className={styles.post__description}>{description}</p>
                        </div>
                      </a>
                  </div>
                )
            })}
          </div>
        </div>
  )
}

export default WordPress
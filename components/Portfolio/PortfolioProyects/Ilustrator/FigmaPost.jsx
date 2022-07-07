import styles from './figmaPost.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Ilustrator = () => {
   return (
      <div>
         <h2 className={styles.entrada__title}>Photoshop / Ilustrator</h2>
            <div className={styles.entrada__container}>
               
            <div className={styles.entrada__content}>
                  <div className={styles.entrada__image}>
                     <Image
                        height='400px'
                        width='400px'
                        src='/Gift/Gif-1.gif' 
                        alt='image Figma web Waseskun'
                     />
                  </div>
               </div>
               <div className={styles.entrada__content}>
                  <div className={styles.entrada__image}>
                     <Image
                        height='400px'
                        width='400px'
                        src='/Gift/Gif-2.gif' 
                        alt='image Figma web Waseskun'
                     />
                  </div>
               </div>
               <div className={styles.entrada__content}>
                 <div className={styles.entrada__image}>
                 <Image
                     height='400px'
                     width='400px'
                     src='/ilustrations/ilustracionPortfolio6.svg' 
                     alt='image Figma web Waseskun'
                  />
                    </div>
                 </div>
               <div className={styles.entrada__content}>
                  <div className={styles.entrada__image}>
                     <Image
                        height='400px'
                        width='400px'
                        src='/img/Aeropress.png' 
                        alt='image Figma web Waseskun'
                     />
                  </div>
               </div>

               <div className={styles.entrada__content}>
                  <div className={styles.entrada__image}>
                     <Image
                         height='400px'
                         width='400px'
                        src='/img/chemex.png' 
                        alt='image Figma web Waseskun'
                     />
                  </div>
               </div>

               <div className={styles.entrada__content}>
               <div className={styles.entrada__image}>
                     <Image
                         height='400px'
                         width='400px'
                        src='/img/Prensa-francesa.png' 
                        alt='image Figma web Waseskun'
                     />
                  </div>
               </div>
            </div> 
      </div>
   )
}

export default Ilustrator
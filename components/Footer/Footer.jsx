import styles from './footer.module.scss'
import { WaveFooter }  from '../Wave/Wave'
import Form from '../Form/Form'
import ModalButton from './Calendly/ModalButton'
import DateForm from './Date/Date'

const Footer = () => {
  return (
    <>
      <WaveFooter/>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__content}>
            <div className={styles.footer__text}>
              <div className={styles.footer__text_container}>
                <div className={styles.footer__text_location}>
                  <h3 className={styles.footer__title}> Organise a meeting </h3>
                  <div className={styles.footer__text_icon}>
                    <img src='location.png' alt='Icon Whatsapp'/>
                      <p className={styles.footer__text_p}>
                        TimeZone: (GMT-5)
                        <DateForm/>
                      </p>
                  </div>
                </div>
                <div className={styles.calendly}><ModalButton/></div>
                <div className={styles.footer__text_contact}>
                  <h3 className={styles.footer__title}> or contact me... </h3>
                  <div className={styles.footer__text_icon}>
                    <img src='Whatsapp.png' alt='Icon Whatsapp'/>
                    <p className={styles.footer__text_p}>
                      3505211501
                    </p>
                  </div>
                  <div className={styles.footer__text_icon}>
                    <img src='email.png' alt='Icon Email'/>
                    <p className={styles.footer__text_p}>
                      Albayaja@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Form/>
          </div>
        </div>
        <div className={styles.copy__right}>
          <p> Alba Lucia Gomzalez </p>
          <p>©2021</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
import styles from './wave.module.css'

export const Wave = () => {
  return (
    <div className={styles.wave__contentDesktop}>
        <div className={styles.header__waveDesktop}>
          <div className={styles.header__wave}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-4.05,-2.46 C288.77,292.59 244.16,-148.51 502.91,84.38 L506.67,-11.34 L-1.62,-16.27 Z">
              </path>
            </svg>
          </div>
        </div>

        <div className={styles.header__waveMovil}>
          <div className={styles.header__wave}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-9.73,3.46 C185.75,75.49 322.83,81.41 511.02,1.49 L501.29,-16.27 L-1.62,-16.27 Z">
              </path>
            </svg>
          </div>
        </div>  
    </div>
  )
}

export default Wave
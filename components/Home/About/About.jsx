import React from 'react'
import { WaveAboutUp, WaveAboutDownd } from '../../Wave/Wave'
import styles from './about.module.scss'
import { FormattedMessage } from 'react-intl';

const About = () => {
  return (
    <section className={styles.circle}>
      <WaveAboutUp/>
        <div className={`container__dark ${styles.about}`}>
          <div className='container'>
            <h2>
              <FormattedMessage 
                id="about.title" 
                defaultMessage="About" 
              />
            </h2>
              <p>
                <FormattedMessage 
                  id="about.text-1" 
                  defaultMessage="about text" 
                />
                <br/>
                <br />
                <FormattedMessage 
                  id="about.text-2" 
                  defaultMessage="about text" 
                />
                <br/>
                <br />
                <FormattedMessage 
                  id="about.text-3" 
                  defaultMessage="about text" 
                />
              </p>
          </div>
        </div>
      <WaveAboutDownd/>
    </section>
  )
}

export default About
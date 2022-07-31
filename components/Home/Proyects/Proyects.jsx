import React from 'react'
import Entradas from './Entradas/Entradas'
import styles from './proyects.module.scss'
import { FormattedMessage } from 'react-intl';

const Proyects = () => {
  return (
    <section className='container'>
        <div className={styles.proyects}>
          <h2 className={styles.Proyects__title}>
            <FormattedMessage 
              id="proyects.title" 
              defaultMessage="Recent Projects" 
            />
          </h2>
          <Entradas/>
        </div>
    </section>
  )
}

export default Proyects
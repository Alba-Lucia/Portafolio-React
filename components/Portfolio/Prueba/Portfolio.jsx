import React, { useState } from 'react'
import WordPress from './WordPress/WordPress'
import styles from './portfolio.module.scss'
import Figma from './Figma/Figma'
import Ilustrator from './Ilustrator/Ilustrator'

const Portfolio = () => {

  const [franework, setFranework] = useState('all')

  const cambiar = e => {
    setFranework(e.target.value)
  }

  return (
    <div className='container'>
      <div className={styles.select__items}>
        <div className={styles.select__item}>
          <input
            className={styles.select__input}
            type="radio" 
            id='checked'
            value="all"
            checked= {franework == 'all' ? true  : false}
            onChange={cambiar}
          />
          <label 
            htmlFor="all"
            className={styles.select__label}
          > All 
          </label>
        </div>

        <div className={styles.select__item}>
          <input
            id='checked'
            className='input'
            type="radio" 
            value="wordPress"
            checked= {franework == 'wordPress' ? true  : false}
            onChange={cambiar}
          />
          <label 
            htmlFor="wordPress"
            className={styles.select__label}
          > WordPress </label>
        </div>

        <div className={styles.select__item}>
          <input 
            id='checked'
            className={styles.select__input}
            type="radio" 
            value="figma"
            checked= {franework == 'figma' ? true : false}
            onChange={cambiar}
          />      
          <label 
            htmlFor="figma"
            className={styles.select__label}
          > Figma </label>
        </div>

        <div className={styles.select__item}>
          <input 
            id='checked'
            className={styles.select__input}
            type="radio" 
            value="ilustrator"
            checked= {franework == 'ilustrator' ? true : false}
            onChange={cambiar}
          />      
          <label 
            htmlFor="ilustrator"
            className={styles.select__label}
          > Ilustrator </label> 
        </div>
      </div>
      <div>
        {
          franework == 'all' ? <div>
            <WordPress/>
            <Figma/>
            <Ilustrator/>
          </div> : false
        }
        {
          franework == 'wordPress' ? <div><WordPress/></div> : false
        }
        {
          franework == 'figma' ? <div><Figma/></div> : false
        }
        {
          franework == 'ilustrator' ? <div><Ilustrator/></div> : false
        }
      </div>
    </div>
  )
}

export default Portfolio
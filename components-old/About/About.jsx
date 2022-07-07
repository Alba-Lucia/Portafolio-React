import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <div className='container'>
      <div className={styles.about}>
        <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent  elementum facilisis leo, vel  fringilla est ullamcorper  eget nulla facilisi etiam dignissim  diam quis enim lobortis  scelerisque fermentum dui faucibus in ornare quam viverra </p>
      </div>
    </div>
  )
}

export default About
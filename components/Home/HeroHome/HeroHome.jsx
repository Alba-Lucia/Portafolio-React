import styles from './heroHome.module.scss'
import Hero from '../../Hero/Hero'
import { FormattedMessage } from 'react-intl';

const HeroHome = () => {
  return (
    <div className={styles.border}>

        <Hero 
            saludo={
              <FormattedMessage 
                id="home.hero.saludo" 
                defaultMessage="Hi I'm" 
              />
            }
            title="Alba Lucia Gonzalez" 
            button={<button><a href="/archives/Alba-Resume.pdf">
              <FormattedMessage 
                id="home.hero.title" 
                defaultMessage="resume" 
              />
            </a></button>}
            image="AlbaPortafolio.png"
        />
    </div>
  )
}

export default HeroHome
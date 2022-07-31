import styles from './template.module.scss'
// import { WavePlantillaUp, WavePlantillatDownd } from '../Wave/Wave'
import PostTemplate from './PostTemplate/PostTemplate'
import { WavePlantillatDownd, WavePlantillaUp } from '../../Wave/Wave'
import { FormattedMessage } from 'react-intl';

const Template = () => {
  return (
    <section className={styles.circle}>
      <WavePlantillaUp/> 
         <div className={`container__dark ${styles.template}`}>
            <div className='container'>
               <h2 className={styles.template__title}>
                <FormattedMessage 
                  id="template.title" 
                  defaultMessage="template title" 
                />
                </h2>
               <PostTemplate/>
            </div>
        </div>
      <WavePlantillatDownd/>
    </section>
  )
}

export default Template
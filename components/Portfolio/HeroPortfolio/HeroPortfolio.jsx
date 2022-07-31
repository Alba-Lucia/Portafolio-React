import Hero from '../../Hero/Hero'
import {FormattedMessage} from "react-intl";

const HeroPortfolio = () => {
  return (
    <div >
        <Hero 
          title={
            <FormattedMessage 
              id="Portafolio.title" 
              defaultMessage="Portfolio" 
            />
          }
          image="/ilustrations/ilustracionPortfolio6.svg"
          description={
            <FormattedMessage 
              id="Portafolio.description" 
              defaultMessage="Paginas webs Responsives" 
            />
          }
        />

    </div>
  )
}

export default HeroPortfolio

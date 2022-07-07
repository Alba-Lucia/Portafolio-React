import Layout from '../components/Layout/Layout'
import HeroPortfolio from '../components/Portfolio/HeroPortfolio/HeroPortfolio'
import PortfolioProyects  from '../components/Portfolio/PortfolioProyects/PortfolioProyects '
import Portfolio1 from '../components/Portfolio/Prueba/Portfolio'

const Portfolio = () => {
    return (
      <div>

        <Layout 
          page="Portfolio"
        >
          <HeroPortfolio/>

          <Portfolio1/>

        </Layout>

      </div>
    )
  }

export default Portfolio
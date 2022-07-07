import Layout from '../components/Layout/Layout'
import HeroPortfolio from '../components/Portfolio/HeroPortfolio/HeroPortfolio'
import PortfolioProyects  from '../components/Portfolio/PortfolioProyects/PortfolioProyects '
import Portfolio from '../components/Portfolio/Prueba/Portfolio'

const Portfolios = () => {
    return (
      <div>

        <Layout 
          page="Portfolio"
        >
          <HeroPortfolio/>

          <Portfolio/>

        </Layout>

      </div>
    )
  }

export default Portfolios
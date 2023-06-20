import styles from '../style';
import { Hero,Stats, Business, CardDeal, Testimonials,
CTA } from '../components'

const App = () => (
    <div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <CardDeal />
          <Testimonials />
          <Business />
          <CTA />
        </div>
      </div>
    </div>
);


export default App;

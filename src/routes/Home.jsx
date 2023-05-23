import styles from '../style';
import "../index.css";
import { Navbar, Hero,Stats, Business, Billing, CardDeal, Testimonials,
CTA, Footer} from '../components'

const App = () => (
    <div className="bg-home w-full overflow-hidden">
      <div className={`bg-nav ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

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
          <Footer />
        </div>
      </div>
    </div>
);


export default App;

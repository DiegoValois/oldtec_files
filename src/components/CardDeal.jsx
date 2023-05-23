import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Para jogar o seu jogo <br className="sm:block hidden" /> Siga
        as seguintes etapas.
      </h2>
      <p className={`${styles.paragraph} text-normal max-w-[470px] mt-5`}>
      Na seção abaixo, irá ter os jogos ao qual vc poderá jogar.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
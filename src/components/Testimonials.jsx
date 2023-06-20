import { useNavigate } from "react-router-dom";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

function Testimonials(){

  const navigate = useNavigate();

  const handleGame = () => {
    return navigate("/games");
  }

  return (
    <section id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} text-gradient`}>
          Jogos que são mais <br className="sm:block hidden" /> divertidos para todos
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-normal text-left max-w-[450px]`}>
            Pesquisa indica que a os jogos da geração antiga se constitui
            principalmente por baralhos e jogos de distração.
          </p>
        </div>
      </div>

      <div onClick={handleGame} className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  );
};

export default Testimonials;
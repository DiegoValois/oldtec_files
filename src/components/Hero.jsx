import styles from "../style";
import { robot } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"> 
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Para</span> Todas {``}
          <span className="text-white">As</span> Idades
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins
        font-semibold ss:text-[62px] text-[42px] text-gradient ss:leading-[85px]
        leading-[75px]">
          Lazer da <br className="sm:block hidden"/> {``}
          Geração<br className="sm:block hidden"/> {``}
        </h1>
      </div>

      <h1 className="font-poppins
      font-semibold ss:text-[57px] text-[42px] text-gradient ss:leading-[100.8px]
      leading-[75px] w-full">Que Importa.</h1>
      <p className={`${styles.paragraph} text-normal max-w-[470px] mt-5`}>Nossa empresa usa uma metodologia
      para que a velha geração tenha mais
      interação entre si.</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
)

export default Hero;

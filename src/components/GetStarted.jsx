import styles from "../style";
import {} from "../index.css";
import { heroImage } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient 
  p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-discount-gradient w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Inicie</span>
        </p>
        <img src={heroImage} alt="flecha" className="w-[23px] h-[23px] object-contain"/>
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">De Graça</span>
      </p>
    </div>
  </div>
)

export default GetStarted;

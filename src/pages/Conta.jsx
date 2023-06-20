import React from "react";
import styles from "../style";
import "../index.css";
import { Navbar } from "../components";

const Conta = () => {
  return(
    <div className="bg-home w-full overflow-hidden text-center">
      <div className={`bg-nav ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div>
        <h1 className="flex-1 font-poppins
        font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[85px]
        leading-[75px] mt-[80px]">
          Pagina Em <span className="text-gradient">Desenvolvimento</span>
        </h1>
      </div>
    </div>
  )
};

export default Conta;

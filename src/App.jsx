import React from "react";
import RoutesApp from "./routes";
import styles from "./style";
import { AuthProvider } from "./contexts/auth";
import { Navbar, Footer } from "./components";

const App = () =>{
  return (
    <div className="bg-home w-full overflow-hidden">
        <div className={`bg-nav ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
    <AuthProvider>
      
        <RoutesApp /> 
        
    </AuthProvider>
    <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default App;
import styles from "../style";
import { Fragment } from "react";
import Home from "../pages/Home";
import Games from "../pages/Games";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function RoutesApp() {
  return (
      <Fragment>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/games" element={<Games />} />
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Fragment>
  );
}

export default RoutesApp;


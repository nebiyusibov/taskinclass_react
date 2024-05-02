import { RouterProvider } from "react-router-dom";
import {  HelmetProvider } from 'react-helmet-async';

import "./App.css";
import { Router } from "./routers/ROUTER.jsx";
import MainProvaider from "./contexts/MainProvaider.jsx";

function App() {
  return (
    <>
     <HelmetProvider >
   
      <MainProvaider>
        <RouterProvider router={Router} />
      </MainProvaider>

  </HelmetProvider>

    </>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";

import "./App.css";
import { Router } from "./routers/ROUTER.jsx";
import MainProvaider from "./contexts/MainProvaider.jsx";

function App() {
  return (
    <>
      <MainProvaider>
        <RouterProvider router={Router} />
      </MainProvaider>
    </>
  );
}

export default App;

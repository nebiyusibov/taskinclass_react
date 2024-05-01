import { RouterProvider } from "react-router-dom";

import './App.css'
import { Router } from "./routers/ROUTER.jsx";
import { useEffect, useState } from "react";

function App() {
  const [name, setname] = useState([]);
  async function getProduct() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setname(data)
      console.log(data)
   
  }
  console.log(name)
  useEffect(()=>{
      getProduct()
  },[])
  return (
    <>
 <RouterProvider router={Router} name={name}  setname={setname} getProduct={getProduct}/>
    </>
  )
}

export default App

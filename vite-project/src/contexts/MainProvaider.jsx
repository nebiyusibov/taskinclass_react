import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

function MainProvaider({children}) {

  const [name, setname] = useState([]);

  async function getProduct() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setname(data);
  }
  async function deleteProduct(id) {
    const res = await fetch("https://fakestoreapi.com/products/"+id ,{method:"delete"});
    const data = await res.json();
    setname(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <MainContext.Provider value={{ name, setname, getProduct,deleteProduct }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvaider;

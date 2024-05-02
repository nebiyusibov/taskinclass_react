import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

function MainProvaider({children}) {

  const [name, setname] = useState([]);

  async function getProduct() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setname(data);
  }
  async function deleteProduct(item) {
    const res = await fetch("https://fakestoreapi.com/products/"+item.id ,{method:"delete"});
    const data = await res.json();
    await getProduct()
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

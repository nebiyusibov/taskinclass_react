
function Homepages({name,setname,getProduct}) {
    console.log(name)
    // async function homeProduct() {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json()
    //     await getProduct()
    //     return data
    // }

  return (
 <>
 {name&&name.map((x)=>(
    <h2 key={x.id}>{x.title}</h2>
 ))}
 </>
  )
}

export default Homepages
import { useContext, useState } from "react"
import { MainContext } from "../contexts/MainProvaider"

function Homepages() {
const { name, setname, getProduct }= useContext(MainContext)
 
  return (
 <>
<div style={{display:"flex", flexWrap:"wrap", gap:"20px", marginTop:"50px", marginLeft:"100px"}}>
{name.map((x)=>(
  <div style={{width:"200px", border:"1px solid black"}}>
    <img src={x.image} alt="" style={{width:"100%", height:"200px"}} />
    <h4 >{x.title}</h4>
    <h5 >{x.category}</h5>
    <h6 >{x.price}</h6>
  </div>
))}
</div>
 </>
  )
}

export default Homepages
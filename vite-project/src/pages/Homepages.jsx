import { useContext, useState } from "react"
import { MainContext } from "../contexts/MainProvaider"
import { Helmet } from 'react-helmet-async';

function Homepages() {
const { name, setname, getProduct }= useContext(MainContext)
 
  return (
 <>
 <Helmet>
  <title>A fancy webpage</title>
  <link rel="notImportant" href="https://www.chipotle.com" />
  <meta name="whatever" value="notImportant" />
  <link rel="canonical" href="https://www.tacobell.com" />
  <meta property="og:title" content="A very important title"/>
</Helmet>
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
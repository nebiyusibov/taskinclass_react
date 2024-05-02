import { useContext } from "react"
import { MainContext } from "../contexts/MainProvaider"

function Employees() {
  const { name, setname, getProduct, deleteProduct } = useContext(MainContext)
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: "50px" }}>
      <table border={"1px"}>
        <thead>
          <tr>
            <th>image</th>
            <th>category</th>
            <th>price</th>
            <th>edit/delete</th>

          </tr>
        </thead>
     <tbody>
     {name.map((x) => (
          <tr key={x.id}>
            <td style={{ padding: "20px" }}><img src={x.image} alt="" style={{ width: "50px", height: "50px", }} /></td>
            <td style={{ padding: "20px" }}>{x.category}</td>
            <td style={{ padding: "20px" }}>{x.price}</td>
            <td style={{ padding: "20px" }}><button >edit</button> <button onClick={() => deleteProduct(x)}>X</button></td>
          </tr>
        ))}
     </tbody>
      </table>
    </div>
  )
}

export default Employees

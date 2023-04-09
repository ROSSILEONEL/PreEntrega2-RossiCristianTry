
// import ItemList from "../ItemList/index.jsx"
import { useParams } from "react-router-dom";
import products from "../../Mocks/products";
import ItemDetail from "../ItemDetail/index"
import { useState , useEffect} from "react";

function ItemDetailContainer(){
const [itemFind,setItemFind]=useState(null);
 const param=useParams();

 const [carga,setCarga]=useState(false);







 useEffect(() => {
     setCarga(true)
   getItem(param.id).then((Response)=>setItemFind(Response))




 
   
 }, [])
 
 
 const getItem=(valFind)=>{
     return(
           new Promise(
     (resolve)=>{resolve(products.find((Response)=>Response.id==Number(valFind)))
     }
     
     
     )

     )
}
console.log({itemFind});
 
 return (
     carga?    <div>

 <ItemDetail itemF={itemFind} />
<h1>ITEM DETAIL CONTAINER</h1>
     </div>:<h4>CARGANDO</h4>


     )
    }
    export default ItemDetailContainer;
     
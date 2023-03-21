import { useEffect, useState } from "react";
import products from "../Mocks/products";
import ItemList from "../ItemList/index.jsx"

function ItemListContainer(){
// Creo una variable state para que cargue aca la lista si la promesa anda
const [listaProd, setlistaProd]=useState([])
//  
useEffect(() => {
   const listaProd= new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve(products)
    , 2000);
   })
 listaProd
 .then((Response)=>setlistaProd(Response))
 .catch((error)=> console.log(error));

  }, [])
 console.log({listaProd});
 
 return (

   <ItemList item={listaProd}/>

     )
    }
    export default ItemListContainer;
     



  


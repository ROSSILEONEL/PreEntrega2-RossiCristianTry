import { useEffect, useState } from "react";
import products from "../../Mocks/products";
import ItemList from "../ItemList/index.jsx"

function ItemListContainer({isCategoryRoute, categoryId}){
// Creo una variable state para que cargue aca la lista si la promesa anda
const [listaProd, setlistaProd]=useState([])
//  

useEffect(() => {
  // creamos la promesa para traer los productos 
   const prodPromise= new Promise((resolve, reject) => {
  //  hacemos el resolve dentro del time out asi lo traemos con un delay de 2 '' 
    setTimeout(() =>
        resolve(products)
    , 2000);
   })

  //  
 prodPromise
 .then((Response)=>{
  if(isCategoryRoute){
    const prodFilter= Response.filter((products)=>products.categoria===categoryId)
    setlistaProd(prodFilter) ;  
  }else{setlistaProd(Response)
  }


})
 .catch((error)=> console.log(error));

  }, [categoryId])
 console.log({listaProd});
 
 return (

   <ItemList item={listaProd}/>
  //  <ItemDetail />

     )
    }
    export default ItemListContainer;
     



  


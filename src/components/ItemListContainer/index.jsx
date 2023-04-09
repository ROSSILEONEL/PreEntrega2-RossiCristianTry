import { useEffect, useState } from "react";
import products from "../../Mocks/products";
import ItemList from "../ItemList/index.jsx"
import {getFirestore, collection,getDocs} from 'firebase/firestore'
import { useParams } from "react-router-dom";

function ItemListContainer({isCategoryRoute, categoryId}){
// Creo una variable state para que cargue aca la lista si la promesa anda
const [listaProd, setlistaProd]=useState([])
const param=useParams();
//  
// const [data,setData]=useState([])

useEffect(() => {
const querydb=getFirestore();
const queryCollection=collection(querydb,'products')
getDocs(queryCollection).then(result=>setlistaProd(result.docs.map(product=>({id: product.id,...product.data()}))))
  // creamos la promesa para traer los productos 
  //  const prodPromise= new Promise((resolve, reject) => {
  // //  hacemos el resolve dentro del time out asi lo traemos con un delay de 2 '' 
  //   setTimeout(() =>
  //       resolve(products)
  //   , 2000);
  //  })

  //  
//  prodPromise
//  .then((Response)=>{
//   if(isCategoryRoute){
//     const prodFilter= Response.filter((products)=>products.categoria===categoryId)
//     setlistaProd(prodFilter) ;  
//   }else{setlistaProd(Response)
//   }


// })
//  .catch((error)=> console.log(error));

  }, [categoryId])
 console.log({listaProd});
 
 return (

   <ItemList item={listaProd}/>
  //  <ItemDetail />

     )
    }
    export default ItemListContainer;
     



  


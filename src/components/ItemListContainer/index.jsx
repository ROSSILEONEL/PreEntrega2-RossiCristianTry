import { useEffect, useState } from "react";
import products from "../../Mocks/products";
import ItemList from "../ItemList/index.jsx"
import {getFirestore, collection,getDocs,query, where} from 'firebase/firestore'
import { useParams } from "react-router-dom";
import './ItemListContainer.css'

function ItemListContainer({isCategoryRoute, categoryId}){
// Creo una variable state para que cargue aca la lista si la promesa anda
const [listaProd, setlistaProd]=useState([])
const param=useParams();


useEffect(() => {
const querydb=getFirestore();
const queryCollection=collection(querydb,'products')
if(isCategoryRoute){
  const queryFilter=query(queryCollection,where('categoria','==',categoryId))
  getDocs(queryFilter).then(result=>setlistaProd(result.docs.map(product=>({id: product.id,...product.data()}))))
}else{
  getDocs(queryCollection).then(result=>setlistaProd(result.docs.map(product=>({id: product.id,...product.data()}))))
}
}, [categoryId])
  
  




//  .catch((error)=> console.log(error));

 console.log({listaProd});
 
 return (
<div className="div-itemlistcontainer">

   <ItemList className="div-itemlist" item={listaProd}/>
</div>

     )
    }
    export default ItemListContainer;
     



  


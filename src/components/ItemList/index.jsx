import React from 'react'
import  Item  from "../Item/index";



function ItemList({item}) {
  
  
  return(

   item.map((products,index)=>
   <Item arrP={products} />)
    )
}
  
  



export default ItemList

import React from 'react'
import  Item  from "../Item/index";
import './ItemList.css'


function ItemList({item}) {
  
  
  return(
<div className="div-itemlist" >

  {

    item.map((products,index)=>
    <Item  arrP={products} key={products.id}/>)
  }
</div>
    )
}
  
  



export default ItemList

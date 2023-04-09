import React from 'react'
import  Item  from "../Item/index";



function ItemList({item}) {
  
  
  return(
<div className="d-flex align-content-between flex-nowrap" style={{maxwidth:"100%"}}>

  {

    item.map((products,index)=>
    <Item  arrP={products} key={products.id}/>)
  }
</div>
    )
}
  
  



export default ItemList

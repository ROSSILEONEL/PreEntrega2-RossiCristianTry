
import React from "react";
import { useState,useEffect } from "react";

export const ItemCount=({initial,stock,onAdd})=>{
  const [value,setValue]=useState(initial);
  const aumentar =()=>{setValue(value+1)}
  const disminuir =()=>{setValue(value-1)}                    

  return(    
        <div>
            <div>
         <button disabled ={value< 1} style={{width:30}}  onClick={disminuir}> - </button>
         <input type="text" />
         <span>{value}</span>
         <button disabled={value>=stock} style={{width:30}} onClick={aumentar}> + </button>
         </div>
         <button onClick={()=>onAdd(value)}>Agregar al carrito</button>
        </div>
        )
    }
    export default ItemCount

    



  
  
  
  
    
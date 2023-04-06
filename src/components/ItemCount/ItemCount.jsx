
import React from "react";
import { useState } from "react";

export const ItemCount=({stock,onAdd})=>{
  

    const [count, setCount] = useState(1);
    const [canAddToCart, setCanAddToCart] = useState(false);
  
    const handleAdd = () => { onAdd(count);  };
  
    const handleIncrease = () => { if (count < stock) {
        setCount(count + 1);
        setCanAddToCart(true);
      }
    };
  
    const handleDecrease = () => {
      if (count > initial) {
        setCount(count - 1);
        setCanAddToCart(true);
      }
    };



  return(    
    <div>
    <div>
      <button onClick={handleDecrease}>-</button>
      <h4>{count}</h4>

      <button onClick={handleIncrease}>+</button>
    </div>
    <button onClick={handleAdd} disabled={!canAddToCart}>Agregar al carrito</button>
  </div>
        )
    }
    export default ItemCount

    



  
  
  
  
    
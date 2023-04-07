
import React from "react";
import { useState } from "react";
import { Button } from 'react-bootstrap';


export const ItemCount=({stock,onAdd})=>{
  const [count, setCount] = useState(0);
  const [canAddToCart, setCanAddToCart] = useState(false);
  const handleAdd = () => { onAdd(count);  };
  const handleIncrease = () => { if (count < stock) { setCount(count + 1);
    setCanAddToCart(true);
  }
      };
  
    const handleDecrease = () => { if (count > 0) { setCount(count - 1);
        setCanAddToCart(true);
      }
    };



  return(    
  //   <div>
  //   <div>
  //     <button onClick={handleDecrease}>-</button>
  //     <h4>{count}</h4>

  //     <button onClick={handleIncrease}>+</button>
  //   </div>
  //   <button onClick={handleAdd} disabled={!canAddToCart}>Agregar al carrito</button>
  // </div>
  // --------------------------------------------------------------------------------
  <div className="d-flex justify-content-center align-items-center flex-wrap mb-3">
      <div className="d-flex align-items-center justify-content-center mr-3">
        <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
        <h4 className="mx-3">{count}</h4>
        <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
      </div>
      <Button variant="primary" onClick={handleAdd} disabled={!canAddToCart}>Agregar al carrito</Button>
    </div>
        )
    }
    export default ItemCount

    



  
  
  
  
    
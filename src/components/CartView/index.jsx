import { useContext } from "react";
import { cartContext } from "../../context";
import { Container , Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import  ItemCart  from "../ItemCart";


function Cart() {
    const {productsAdded,totalPrice}=useContext(cartContext);
    
    if(productsAdded.length===0){
        return(
            <>
            <h2>NO HAS AÑADIDO PRODUCTOS AL CARRITO AUN </h2>
                <NavLink to={"/"}>
            <Button > EXPLORAR PRODUTOS
                    </Button>
                    </NavLink>
                    
            </>
        )
    }
    
    return(
    <>
    {productsAdded.map((products)=> <ItemCart key={products.id} ItemCart={products}/>)}
    <p>TOTAL A PAGAR: {totalPrice()}</p>
    </>
    





)
    }
export default Cart


        



    

     
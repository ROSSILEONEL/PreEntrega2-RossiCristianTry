import { useContext } from "react";
import { cartContext } from "../../context";
import { Container , Button} from "react-bootstrap";
import  ItemCart  from "../ItemCart";


function Cart() {
    const {productsAdded}=useContext(cartContext);
    
    
    
    return(
               productsAdded.map((products)=> <ItemCart ItemCart={products}/>





))
    }
export default Cart


        



    

     
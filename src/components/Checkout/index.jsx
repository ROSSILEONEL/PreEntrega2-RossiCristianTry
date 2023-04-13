import { useContext } from "react";
import { cartContext } from "../../context";

function Checkout() {
const {idCompra}=useContext(cartContext);

    return(
        <div>
            <h1>{idCompra}Muchas Gracias por su compra!  </h1>
{console.log("en el checkout",idCompra)}
            <h2></h2>
        </div>
    
        )
    
}
export default Checkout
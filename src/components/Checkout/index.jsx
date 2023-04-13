import { useContext } from "react";
import { cartContext } from "../../context";

function Checkout() {
const {idCompra}=useContext(cartContext);

    return(
        <div>
            <h1>Muchas Gracias por su compra!  </h1>
            <br />
            <br />
            <h3>Su codigo de seguimiento es:</h3>
            <br />
            <h2>{idCompra}</h2>

            <h2></h2>
        </div>
    
        )
    
}
export default Checkout
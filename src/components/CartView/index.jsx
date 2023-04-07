import { useContext } from "react";
import { cartContext } from "../../context";
import { Container , Button} from "react-bootstrap";

function Cart() {
const {productsAdded}=useContext(cartContext)



    return(
    productsAdded.map((products)=>
    <Container className="p-2" >
<p>{products.name}</p>
<p>{products.precio}</p>
<Button>Eliminar</Button>
    </Container> 
       
   
    ),
    <Button>{productsAdded.length>0?'Eliminar todos':'Explorar ofertas'}</Button>
     )
}
export default Cart
import { NavLink } from "react-router-dom";
import { Card ,Container,Row, Col} from "react-bootstrap";

function Item({arrP}) {
 
return(
    // <div style={{border: "solid 2px black" ,margin:"20px" ,padding:"20px"}}>
    //     <img src={`${arrP.imagen}`} alt=" " />
    //     <h1>{arrP.name}</h1>
    //     <p> {arrP.categoria}</p>
    //     {/* <p> {arrP.descripcion}</p> */}
    //     <p> {arrP.medida}</p>
    //     <h2>{arrP.precio}</h2>
    //     <li><NavLink to={`/item/${arrP.id}`}>VER MAS DETALLES</NavLink></li>
    // </div>
<Container >

   <Card style={{ minHeight:'20rem', width: '15rem' }}>
      <Card.Img  variant="top" src={`${arrP.imagen}`} alt=" " />
      
      <Card.Body>
        <Card.Title>{arrP.name}</Card.Title>
        <Card.Text>
                 {arrP.descripcion}
                Precio: ${arrP.precio}
                
        </Card.Text>
        <Card.Text>
        {/* Cantidad: {ItemCart.quantity}            SubTotal: ${ItemCart.precio*ItemCart.quantity} */}
        </Card.Text>
        <NavLink to={`/item/${arrP.id}`}>VER MAS DETALLES</NavLink>
        {/* <Button variant="primary" onClick={()=>removeItem(ItemCart.id)}>Eliminar Producto</Button> */}
      </Card.Body>
    </Card>

</Container>
        


)
}
export default Item
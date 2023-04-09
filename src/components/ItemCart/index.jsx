import { useContext } from "react";
import { Container , Card , Button , Image } from "react-bootstrap";
import { cartContext } from "../../context";
function ItemCart({ItemCart}) {
    const {removeItem}=useContext(cartContext);
    return(<div>
        <Container className="p-3 bg:dark">

        <Card style={{ width: '20rem' }}>
      <Card.Img  variant="top" src="../../assets/imagen.jpg" />
      
      <Card.Body>
        <Card.Title>{ItemCart.name}</Card.Title>
        <Card.Text>
          {ItemCart.descripcion}
        
          Precio: ${ItemCart.precio}
          Id:   {ItemCart.id}
        </Card.Text>
        <Card.Text>
        Cantidad: {ItemCart.quantity}            SubTotal: ${ItemCart.precio*ItemCart.quantity}
        </Card.Text>

        <Button variant="primary" onClick={()=>removeItem(ItemCart.id)}>Eliminar Producto</Button>
      </Card.Body>
    </Card>
        </Container>
    </div>

    
    )
}
export default ItemCart
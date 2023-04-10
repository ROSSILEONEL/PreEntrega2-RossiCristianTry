import { useContext } from "react";
import { Container , Card , Button , Image } from "react-bootstrap";
import { cartContext } from "../../context";
function ItemCart({ItemCart}) {
    const {removeItem}=useContext(cartContext);
    return(<div className="container-fluid">
        <Container className="d-flex p-3 bg:dark">

        <Card style={{ width: '15rem' }}>
      <Card.Img  variant="top" src={`${ItemCart.imagen}`} />
      
      <Card.Body>
        <Card.Title>{ItemCart.name}</Card.Title>
        <Card.Text>
        
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
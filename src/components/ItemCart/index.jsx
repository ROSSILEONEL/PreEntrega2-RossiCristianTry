import { Container , Card , Button } from "react-bootstrap";
function ItemCart({ItemCart}) {
    
    return(<div>
        <Container className="p-3 bg:dark">

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../../assets/imagen.jpg" />
      <Card.Body>
        <Card.Title>{ItemCart.name}</Card.Title>
        <Card.Text>
          {ItemCart.descripcion}
        </Card.Text>
        <Card.Text>
          Precio: {ItemCart.precio}
        </Card.Text>
        <Card.Text>
          Cantidad: {ItemCart.quantity}
        </Card.Text>
        <Button variant="primary">Eliminar Producto</Button>
      </Card.Body>
    </Card>
        </Container>
    </div>

    
    )
}
export default ItemCart
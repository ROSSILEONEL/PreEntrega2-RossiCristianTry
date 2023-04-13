import { useContext } from "react";
import { Container , Card , Button , Image ,Figure} from "react-bootstrap";
import { cartContext } from "../../context";
import './itemcart.css';
function ItemCart({ItemCart}) {
    const {removeItem}=useContext(cartContext);
    return(
      <Figure className="w-100 d-flex  ms-3 mt-3 " as="p" animation="wave" >
      <Figure.Image
        width={100}
        height={120}
        alt="171x180"
        src={`${ItemCart.imagen}`}
        rounded="me-2"
      />
      <Figure.Caption className="d-flex flex-column ms-2">
        <span>
          {ItemCart.name}
          </span>
          <br />
        <span>

        $ {ItemCart.precio}
        </span>
          <br />
        <span>

        Cantidad: {ItemCart.quantity}
        </span>
      </Figure.Caption>
    </Figure>
    //---------------------------------------------------------------- 
    //<div className="container-fluid">
    //     <Container className="d-flex p-3 bg:dark">
    //     <Card className="card-itemcard" style={{ width: '15rem' }}>
    //   <Card.Img className="card-img" variant="top" src={`${ItemCart.imagen}`} />
    //   <Card.Body className="card-body">
    //     <Card.Title>{ItemCart.name}</Card.Title>
    //     <Card.Text>
    //       Precio: ${ItemCart.precio}
    //       Id:   {ItemCart.id}
    //     </Card.Text>
    //     <Card.Text>
    //     Cantidad: {ItemCart.quantity}            SubTotal: ${ItemCart.precio*ItemCart.quantity}
    //     </Card.Text>
    //     <Button variant="primary" onClick={()=>removeItem(ItemCart.id)}>Eliminar Producto</Button>
    //   </Card.Body>
    // </Card>
    //     </Container>
    // </div>

      
        


    
    )
}
export default ItemCart
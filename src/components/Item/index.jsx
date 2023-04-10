import { NavLink } from "react-router-dom";
import { Card ,Container,Row, Col} from "react-bootstrap";

function Item({arrP}) {
 
return(
   
<Container >

   <Card style={{ minHeight:'20rem', width: '15rem' }}>
      <Card.Img  variant="top" src={`${arrP.imagen}`} alt=" " />
      
      <Card.Body>
        <Card.Title>{arrP.name}</Card.Title>
        <Card.Text>
                 {/* {arrP.descripcion} */}
                Precio: ${arrP.precio}
                
        </Card.Text>
        <Card.Text>
       
        </Card.Text>
        <NavLink to={`/item/${arrP.id}`}>VER MAS DETALLES</NavLink>
      </Card.Body>
    </Card>

</Container>
        


)
}
export default Item
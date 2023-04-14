import { useContext } from "react";
import { cartContext } from "../../context";
import {   Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import  ItemCart  from "../ItemCart";
import {doc, addDoc, getFirestore ,collection,updateDoc} from "firebase/firestore";

import './CartView.css'
function Cart() {
  const {productsAdded,totalPrice,clear,isId}=useContext(cartContext);

  function updateOrder(productid, finalStock){
    const db=getFirestore();
    const itemRef=doc(db,"products",productid);
      
    updateDoc(itemRef,{stock: finalStock});
  }
  



  let orderId;
const handleFormSubmit=()=>{
      const nom= document.getElementById("nom").value;
      const tel= document.getElementById("tel").value;
      const dir= document.getElementById("dir").value;
      const email= document.getElementById("email").value;
      const order = {
          buyer:{
              name:nom,
              email:email,
              tel:tel,
              dir:dir,
          },
          items: productsAdded.map(product=>({id: product.id, name: product.name,precio:product.precio, cantidad:product.quantity})),
        total:totalPrice()
      };
      const db=getFirestore();
      const ordersCollection=collection(db,'orders');  
      addDoc(ordersCollection,order )
      .then(({id})=> {
        isId(id);
        productsAdded.map((item)=>{
          const finalStock=item.stock- item.quantity;
          console.log(finalStock);
          console.log(item.stock);
          console.log(item.quantity);
          console.log(item.id);
          updateOrder(item.id,finalStock)})

      
        console.log("idcompra",idCompra);
      }).catch((error) => {console.error("Error adding order: ", error);})
        clear();
      }
        
    
    



  
        
    


// 


    if(productsAdded.length===0){
        return(
            <>
            <h2>NO HAS AÑADIDO PRODUCTOS AL CARRITO AUN </h2>
                <NavLink to={"/"}>
            <Button > EXPLORAR PRODUTOS
                    </Button>
                    </NavLink>
            </>
        )
      }
                    
    return(
    <>
    {productsAdded.map((products)=> <ItemCart key={products.id} ItemCart={products}/>)}
    <p>TOTAL A PAGAR: {totalPrice()}</p>


      {/* Agrega campos de entrada para los datos de la orden */}
    <div className="container mt-2">
      <h2>INGRESE SUS DATOS PARA LA COMPRA</h2>
    <form  className=" form-control rounded bg-light " >
    

      <div className="d-flex col-md-3">
          <label className="ms-2">NOMBRE 
            <input className="" type="text" id="nom" placeholder="Ingrese Nombre y Apellido"  />
          </label>
          <label className="ms-2">DIRECCION 
            <input  type="text" id="dir" placeholder="Ingrese Apellido" />
          </label>
      </div>
      
      <div className=" d-flex col-md-2 mt-2">
          <label className="ms-2" >TELEFONO 
            <input  className="ms-1" type="text" id="tel" placeholder="Ingrese un # de telefono" />
          </label>
          </div>
          <div className=" d-flex col-md-2 mt-2">
      
      <label className=" " >EMAIL
            <input  className="ms-0" type="email" id="email"  placeholder="Ingrese su direccion de e-mail" />
      </label>
      
      </div>
      
      <div className="col-md-3">
    
      <NavLink to={"/Checkout"}>
        {/* <Button className="btn-secondary" onClick={handleFormSubmit}> REALIZAR COMPRA</Button> */}
      <Button className="mt-3 btn btn-secondary" type="submit" onClick={handleFormSubmit}>FINALIZAR COMPRA</Button>
      </NavLink>
</div>
    
</form >

      </div>
      
      {/* <button type="button" >Generar orden</button> */}



</>
    )
    }
export default Cart

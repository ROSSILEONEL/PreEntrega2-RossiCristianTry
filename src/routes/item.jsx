// import products from "../Mocks/products";
// import ItemList from "../ItemList/index.jsx"
import NavBar from "../components/NavBar/index";
import  ItemDetailContainer  from "../components/ItemDetailContainer";
// import { doc,getDoc, getFireStore } from "firebase/firestore";

function ItemRoot(){
    
 
    return (
   <div>
    <NavBar/>
    <ItemDetailContainer/>
   </div>

   
        )
       }
       export default ItemRoot;
        
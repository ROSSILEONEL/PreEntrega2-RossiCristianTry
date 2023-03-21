import { useState , useEffect } from "react";
import ItemListContainer from "./components/ItemListContainer/index"
// import { useEffect } from "react";
import NavBar from "./components/NavBar/index";


function App() {
  
  const [useE, setUseE]=useState("Estoy probando pasar por props un useEfect");
  useEffect(()=>{
    setTimeout(()=>setUseE("Actualizacion de la prueba useEffect"),10000);
  },[]);
  
  const [greeting, setGreeting]= useState("Hola manga de trolos");
  const cambio =()=> {setGreeting("adios putoooooooooooooooooooooooooos")};


  
  return (
    <div className="div-app">
      <NavBar pruebaUse={useE}/>
      <Description toma={cambio}/>
      <ItemListContainer >{greeting}      </ItemListContainer >

{/* para que se muestre mientras greeting valga menos de 3 , sirve para no mostrar los productos que no  hay stock  */}
      {/* {greeting<= 3 && <ItemListContainer greeting ={greeting} />} */}
  <h1>{greeting}</h1>
    </div>

          );
       }

      

function Description({toma}){
return (
<div>


<button onClick={toma}> adios </button>

</div>);
}


export default App;

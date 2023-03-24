import { useState , useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/index"
// import { useEffect } from "react";
import NavBar from "../components/NavBar/index";
import { useParams } from "react-router-dom";

//use Params es un Hook de React
function Root() {
   const param = useParams()
  
   const isCategoryRoute= Boolean(param.id) ;
  const categoryId=param.id;


  console.log("CATEGORI",{isCategoryRoute});
   //  console.log( "param del root" ,{param});
  
  
   return (
    <div >
      
      <NavBar />
      <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={categoryId} />
    
    </div>


       
          );
      }




export default Root;

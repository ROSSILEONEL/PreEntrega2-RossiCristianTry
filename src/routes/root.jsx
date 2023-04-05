import ItemListContainer from "../components/ItemListContainer/index"
import { useParams } from "react-router-dom";


function Root() {
  const param = useParams()
  const isCategoryRoute= Boolean(param.id) ;
  const categoryId=param.id;
  console.log("CATEGORI",{isCategoryRoute});


        return (
          <div >
            <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={categoryId} />
          </div>
                );
              }
              
export default Root;
      

  


  
  
  
    
    


       





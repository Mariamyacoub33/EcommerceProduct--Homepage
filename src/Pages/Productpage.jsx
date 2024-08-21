import { useParams } from "react-router-dom";

function Productpage (){
    const {id} = useParams();
    
    return(
<h1>More details about {id}</h1>
    ) 
}

export default Productpage;
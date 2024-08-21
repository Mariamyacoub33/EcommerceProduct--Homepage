import { Link } from "react-router-dom";
import "./Homepage.css";
import Elevationimg from "../assets/images/New folder/1.png";
import planimg from "../assets/images/New folder/2.png";
import villaimg from "../assets/images/New folder/3.png";


function Homepage (){
    const arrayofproducts = [
        { "id": 1,
          "name": "Elevation", 
          "price": "5$",
          "modul": Elevationimg },
          { "id": 2, 
            "name": "plan",
            "price": "7$", 
            "modul": planimg },
            { "id": 3, 
            "name": "villa", 
            "price": "15$",
            "modul": villaimg },
            { "id": 4,
              "name": "Elevation", 
              "price": "5$",
              "modul": Elevationimg },
              { "id": 5, 
                "name": "plan",
                "price": "7$", 
                "modul": planimg },
                { "id": 6, 
                "name": "villa", 
                "price": "15$",
                "modul": villaimg }
      ]
    return(
        <div id="AllProducts">
        {arrayofproducts.map((product) => {
          return(
            <Link to={`/product/${product.id}`}>
            <div className="productbox">
              <img className="imgproduct" src={product.modul}></img>
              <h1 className="nameproduct">{product.name}</h1>
              <label className="priceproduct">{product.price}</label>
            </div>
            </Link>
            
          )
        })}
        </div>
    )
   
}

export default Homepage;
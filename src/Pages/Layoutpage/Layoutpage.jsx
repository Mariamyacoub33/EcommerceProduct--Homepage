import { Outlet, Link } from "react-router-dom";
import "./Layoutpage.css";
import iconcart from "../../assets/images/icon-cart.svg";
import Sneakers from "../../assets/images/logo.svg";
import Avatar from "../../assets/images/image-avatar.png";

function Layoutpage (){
 
    return(
<>
      <nav>
        <img src={Sneakers} />
        <ul>
          <li>
           <Link to="/Collections">Collections</Link>
          </li>
          <li>
            <Link to="/Men">Men</Link>
          </li>
          <li>
            <Link to="/Women">Women</Link>
          </li>
          <li>
            <Link to="/Homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <img id="iconcart" src={iconcart}/>
<img id="Avatar" src={Avatar}/>
      </nav>
      
     
      <Outlet />
    </>
    )
}

export default Layoutpage ;
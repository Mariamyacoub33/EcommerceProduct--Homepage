import "./Collections.css";

import Counter from "../Pages/Counter/Counter";
import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-1.jpg";
import Product4 from "../assets/images/image-product-1.jpg";
import Product1Thum from "../assets/images/image-product-1-thumbnail.jpg";
import Product2Thum from "../assets/images/image-product-2-thumbnail.jpg";
import Product3Thum from "../assets/images/image-product-3-thumbnail.jpg";
import Product4Thum from "../assets/images/image-product-4-thumbnail.jpg";
import iconcart from "../assets/images/icon-cart.svg"; 

function Collections() {
    // const images = [
    //     Product1,
    //     Product2,
    //     Product3,
    //     Product4,
    // ]
    // const [mainImage, setMainImage] = useState(images[0]);

    // const handleImageClick = (image) => {
    //     setMainImage(image);
    //   };

  function handleonclick(event) {
    console.log(event.target.src);
  }
  return (
    <div id="Collectionsdiv">
      <div id="lefttdiv">
        <img id="mainImage" src={Product1} />
        <div id="Otherproducts">
          <img onClick={handleonclick} src={Product1Thum} />
          <img onClick={handleonclick} src={Product2Thum} />
          <img onClick={handleonclick} src={Product3Thum} />
          <img onClick={handleonclick} src={Product4Thum} />
        </div>
      </div>
      <div id="Rightdiv">
        <label id="Scom">Sneaker Company</label>
        <label id="Fls">Fall Limited Edition Sneakers</label>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div>
        <div id="sale">
<label id="Price">$125.00 </label>
<label id="kazion">50%</label>
        </div>
        <label id="thronum">$250.00</label>
        </div>
        <div id="lastdiv">
            <Counter></Counter>
<button id="lastdivBtn">
    <img src={iconcart}/>
    <label id="Addtocard">Add to cart</label>
</button>
        </div>
        
      </div>
    </div>
  );
}
export default Collections;

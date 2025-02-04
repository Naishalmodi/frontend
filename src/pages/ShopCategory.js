import React, { useContext } from "react";
import "./CSS/ShopCartegory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../component/Assets/dropdown_icon.png";
import Item from "../component/Items/Item";

function ShopCategory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item,i) => {
          if (props.category===item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            // return null;
            console.log('hello')
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
          Explore More
      </div>
    </div>
  );
}

export default ShopCategory;

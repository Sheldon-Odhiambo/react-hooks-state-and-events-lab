import React, { useState} from "react";

function Item({ name, category }) {
  function  handleClick() {
    setClassName(()=> !inCart)
  }
  const [inCart, setClassName] = useState(false)
  return (
    <li className= {inCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onCLick={handleClick} className="add">{inCart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;

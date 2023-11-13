import React from "react";

const Order = (props) => {
  return (
    <ul>
      <li>
        {" "}
        {props.order.price} {props.order.dish} <button onClick={(e)=>{
            e.currentTarget.parentNode.remove();
        }}>Delete Order</button>
      </li>
    </ul>
  );
};

export default Order;

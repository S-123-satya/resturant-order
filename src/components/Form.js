import React, { useState } from "react";

const Form = (props) => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [tableNo, setTableNo] = useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(`hii submit handler`);
    console.log(id);
    console.log(price);
    console.log(dish);
    console.log(tableNo);
    console.log(props);
    props.onAddOrder(id,price,dish,tableNo);
  }
  return (
    <div>
      <form>
        <label htmlFor="uniqueId">Unique Id</label>
        <input type="text" id="uniqueId" value={id} onChange={(e)=>setId(e.target.value)}></input>
        <label htmlFor="price">Choose Price</label>
        <input type="number" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}></input>
        <label htmlFor="dish">Choose Dish</label>
        <select value={dish} onChange={(e)=>setDish(e.target.value)}>
          Choose Dish
          <option>Chicken Biyani</option>
          <option>French Fries</option>
          <option>Egg cury</option>
          <option>Fried Fish</option>
          <option>Ice-cream</option>
          <option>Paneer</option>
        </select>
        <label htmlFor="table">Choose Table No.</label>
        <select value={tableNo} onChange={(e)=>setTableNo(e.target.value)}>
          Choose Table
          <option value={"1"}>Table 1</option>
          <option value={"2"}>Table 2</option>
          <option value={"3"}>Table 3</option>
        </select>
        <button type="button" onClick={submitHandler}>Order</button>
      </form>
    </div>
  );
};

export default Form;

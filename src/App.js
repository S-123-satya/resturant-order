import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const tables = [1, 2, 3];

const App = () => {
  const [order,setOrder]=useState([]);
  const addOrderHandler=(id,price,dish,tableNo)=>{
    setOrder((oldOrder)=>{ return [...oldOrder,{
      id,
      price,
      dish,
      tableNo
    }]})
  }
  return (
    <>
      <Form onAddOrder={addOrderHandler} />
      {tables.map(t=><Table key={t} orders={order} tableNo={t}/>)}
    </>
  );
};

export default App;

import React from 'react'
import Order from './Order'

const Table = (props) => {
    console.log(props);
  return (
    <>
    <div>Table {props.tableNo}</div>
    {props.orders && props.orders.map(order=>{
        return <Order key={order.id} order={order} />
    })}
    </>
  )
}

export default Table
import React from 'react'
import './items.css'
export default function Cartpage({store}) {
    var cl=JSON.parse(localStorage.getItem("cl"))
    function Amount()
    {

    }
    function billing()
    {
        store.dispatch({"type":"page","data":"Billing"})
    }
  return (
    <div className='card-parent'>
        <div className='card' style={{width:"auto",padding:"40px"}}>
        <table border={1} style={{height:"auto"}}>
        <tr>
            <th>Image</th>
            <th >Product Name</th>
            <th>Product Price</th>
            <th>Product Qty</th>
            <th>Total Price</th>
        </tr>
        {cl.map((element)=>{
            return(
                <tr>
                     <td><img src={element.item.pimage} alt='Image' width={150} height={150}></img></td> 
                    <td >{element.item.pname}</td>
                  
                    <td>{element.item.pcost}</td>
                    <td>{element.qty}</td>
                    <td>{element.item.pcost*element.qty}</td>
                </tr>
            )
        })

        }
        <br></br>
        <td colSpan={3}><button onClick={billing} >Proceed to pay</button> </td> 

        </table>
        </div>
       
    </div>
  )
}

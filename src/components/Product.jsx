import React, { useState } from 'react'
import './items.css'
export default function Product({store}) {
    const item=JSON.parse(localStorage.getItem("element"))
    const[qty,setQty]=useState(1)
    var cl=JSON.parse(localStorage.getItem("cl"))
    const [count, setCount] = useState(0)
    function addProduct()
    {
        var c=0;
        cl.push({"item":item,"qty":qty})
        localStorage.setItem("cl",JSON.stringify(cl) )
        console.log(localStorage.getItem("cl"))
        cl.map((element)=>{
            c=c+element.qty;
        })
        localStorage.setItem("count",c)
        store.dispatch({"type":"page","data":"Product"})
    }
  return (
    <div className='card-parent' style={{flexDirection: "column" , alignItems: 'center'}}>
        <div className='card' >
                    <div className='card-img'>
                        <img src={item.pimage} alt="not available" width={200} height={200} />
                    </div>
                    <div className='card-name'>
                        <p> {item.pname} </p>
                    </div>
                    <div className='card-price'>
                        <p> Rs. {item.pcost} </p>
                    </div>
                   
                </div>
                <div className='cart-qty'>
                    <svg onClick={() =>qty>1? setQty(qty-1):qty} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M200-446.67v-66.66h560v66.66H200Z"/></svg>
                        <input type='text' value={qty} ></input>
                        
                        <svg onClick={() => setQty(qty+1)} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"/></svg>
                        <br></br>
                        <button onClick={addProduct} style={{backgroundColor:"yellowgreen"}}>ADD TO CART</button>
                    </div>
    </div>
  )
}

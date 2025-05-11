import React, { useState } from 'react'
import './style.css'
import axios from 'axios';
export default function Admin() {
    const[electronics,setElectronics]=useState(null)
    const[vegatables,setVegatables]=useState(null)
    const[groceries,setGroceries]=useState(null)
    if(electronics==null)
    {
        axios.get("http://localhost:8081/electronics", {}).then((res)=>{
            console.log(res.data)
            setElectronics(res.data)
        })  
    }
    if(vegatables==null)
        {
            axios.get("http://localhost:8081/vegatables", {}).then((res)=>{
                console.log(res.data)
                setVegatables(res.data)
            })
        }
        if(groceries==null)
            {
                axios.get("http://localhost:8081/groceries", {}).then((res)=>{
                    console.log(res.data)
                    setGroceries(res.data)
                })
            }
    function insertData(){
        var pid=parseInt(document.getElementsByName("pid")[0].value);
        var pcost=parseInt(document.getElementsByName("pcost")[0].value);
        var pimage=document.getElementsByName("pimage")[0].value;
        var pname=document.getElementsByName("pname")[0].value;
        var pqty=parseInt(document.getElementsByName("pquantity")[0].value);
        var pcat=document.getElementsByName("pcat")[0].value;
        axios.post(`http://localhost:8081/product/${pcat}`,
            {
                "pid":pid,
                 "pcost":pcost,
                 "pimage":pimage,
                 "pname":pname,
                 "pqty":pqty
            }
        ).then((res)=>{
            alert(res.data)
            if(res.data=="Inserted Successfully")
            {
                setElectronics(null);
                setGroceries(null);
                setVegatables(null);
            }
        })

    }
    function editData(element)
    {
        document.getElementsByName("pid")[0].value=element.pid;
        document.getElementsByName("pcost")[0].value=element.pcost
        document.getElementsByName("pimage")[0].value=element.pimage;
        document.getElementsByName("pname")[0].value=element.pname;
        document.getElementsByName("pquantity")[0].value=element.pqty;
        
    }
    function updateData(){
        var pid=parseInt(document.getElementsByName("pid")[0].value);
        var pcost=parseInt(document.getElementsByName("pcost")[0].value);
        var pimage=document.getElementsByName("pimage")[0].value;
        var pname=document.getElementsByName("pname")[0].value;
        var pqty=parseInt(document.getElementsByName("pquantity")[0].value);
        var pcat=document.getElementsByName("pcat")[0].value;
        axios.put(`http://localhost:8081/product/${pcat}`,
            {
                "pid":pid,
                 "pcost":pcost,
                 "pimage":pimage,
                 "pname":pname,
                 "pqty":pqty
            }
        ).then((res)=>{
            alert(res.data)
            if(res.data=="Inserted Successfully")
            {
                setElectronics(null);
                setGroceries(null);
                setVegatables(null);
            }
        })
    }
    function DeleteData(element,pcat)
    {
        if(confirm(`Do you want to delete ${element.pid}`))
        {
            alert("Delete Triggered")
            axios.delete(`http://localhost:8081/product/${pcat}`,
                {
                    params:{"pid": parseInt(element.pid)}
                     
                }
            ).then((res)=>{
                alert(res.data)
                if(res.data=="Deleted")
                {
                    setElectronics(null);
                    setGroceries(null);
                    setVegatables(null);
                }
            })
        }

        
    }
  return (
    <>
    <div className='login-form'>
        <table>
            <tr style={{ textAlign: 'center', backgroundColor: 'skyblue'}}>
                <td colSpan={2}>Insert Data</td>
            </tr>
            <tr>
                <td>PID</td>
                <td><input type='text' name='pid' className='form-control'></input></td>
            </tr>
            <tr>
                <td>PCOST</td>
                <td><input type='text' name='pcost' className='form-control'></input></td>
            </tr>
            <tr>
                <td>PIMAGE</td>
                <td><input type='text' name='pimage' className='form-control'></input></td>
            </tr>
            <tr>
                <td>PName</td>
                <td><input type='text' name='pname' className='form-control'></input></td>
            </tr>
            <tr>
                <td>PQUANTITY</td>
                <td><input type='text' name='pquantity' className='form-control'></input></td>
            </tr>
            <tr>
                <td>Category</td>
                <td><select name='pcat' className='form-select'>
                    <option value={"e"}>Electronics</option>
                    <option value={"g"}>Grocessories</option>
                    <option value={"v"}>Vegatables</option>
                    </select></td>
            </tr>
            <tr style={{ textAlign: 'center' }}>
                <td colSpan={1} ><button onClick={insertData} style={{ backgroundColor: "yellowgreen" }}>Submit</button></td>
                <td colSpan={1} ><button onClick={updateData} style={{ backgroundColor: "yellowgreen" }}>Update</button></td>
            </tr>
        </table>
    </div>
    <br></br>
    <br></br>
    <div className='login-form' style={{width:"auto"}}>
        {electronics==null?<p>Electronics data fetching</p> :
        <table>
            <tr style={{ textAlign: 'center', backgroundColor: 'skyblue'}}>
                <td colSpan={7}>Electronics Product</td>
            </tr>
            <tr>
                <th>PID</th>
                <th>PNAME</th>
                <th>PCOST</th>
                <th>PQUANTITY</th>
                <th>PIMAGE</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
            {electronics.map((element)=>{
                return(
                    <tr>
                    <td> {element.pid}</td>
                    <td> {element.pname}</td>
                    <td> {element.pcost}</td>
                    <td> {element.pqty}</td>
                    <td> {element.pimage}</td>
                    <td><button onClick={()=>{editData(element)} } style={{ backgroundColor: "yellowgreen" }}> EDIT</button></td>
                    <td><button onClick={()=>{DeleteData(element,"e")} } style={{ backgroundColor: "yellowgreen" }}> DELETE</button></td>
                </tr>
                )
                
            })}
           
        </table>
}
{vegatables==null?<p>Vegatables data fetching</p> :
        <table>
            <tr style={{ textAlign: 'center', backgroundColor: 'skyblue'}}>
                <td colSpan={7}>Vegatables Product</td>
            </tr>
            <tr>
                <th>PID</th>
                <th>PNAME</th>
                <th>PCOST</th>
                <th>PQUANTITY</th>
                <th>PIMAGE</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
            {vegatables.map((element)=>{
                return (
                    <tr>
                    <td> {element.pid}</td>
                    <td> {element.pname}</td>
                    <td> {element.pcost}</td>
                    <td> {element.pqty}</td>
                    <td> {element.pimage}</td>
                    <td><button onClick={()=>{editData(element)} } style={{ backgroundColor: "yellowgreen" }}> EDIT</button></td>
                    <td><button  onClick={()=>{DeleteData(element,"v")} } style={{ backgroundColor: "yellowgreen" }}> DELETE</button></td>
                </tr>
                )
                
            })}
           
        </table>
}
{groceries==null?<p>Grocessories data fetching</p> :
        <table>
            <tr style={{ textAlign: 'center', backgroundColor: 'skyblue'}}>
                <td colSpan={7}>Grocessories Product</td>
            </tr>
            <tr>
                <th>PID</th>
                <th>PNAME</th>
                <th>PCOST</th>
                <th>PQUANTITY</th>
                <th>PIMAGE</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
            {groceries.map((element)=>{
                return (
                    <tr>
                    <td> {element.pid}</td>
                    <td> {element.pname}</td>
                    <td> {element.pcost}</td>
                    <td> {element.pqty}</td>
                    <td> {element.pimage}</td>
                    <td><button onClick={()=>{editData(element)} } style={{ backgroundColor: "yellowgreen" }}> EDIT</button></td>
                    <td><button onClick={()=>{DeleteData(element,"g")} } style={{ backgroundColor: "yellowgreen" }}> DELETE</button></td>
                </tr>
                )
                
            })}
           
        </table>
}
    </div>
    </>
  )
}

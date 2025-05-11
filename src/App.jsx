import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ResponsiveAppBar from './components/Appbar'
import {Home, About as Ab, Error} from './components/info'
import Electronics from './components/Electronics'
import Vegatables from './components/Vegatables'
import Groceries from './components/Groceries'
import Admin from './components/Admin'
import Product from './components/Product'
import Cartpage from './components/Cartpage'
import Billing from './components/Billing'

function App({store}) {
  

  function Display(){
    switch(store.getState()){
      case "Signin":
        return (<div> <Signin store={store}/> </div>)
      case "Signup":
        return (<div> <Signup /> </div>)
      case "Electronics":
        return (<div> <Electronics store={store}/> </div>)
        case "Vegatables":
        return (<div> <Vegatables store={store}/> </div>)
        case "Groceries":
        return (<div> <Groceries store={store}/> </div>)
        

      case "Home":
        if(parseInt(localStorage.getItem("role"))==1 || parseInt(localStorage.getItem("role"))==2)
        {
           return (<div> <Home /> </div>)
        }
           
        else{
            return(<div><Error></Error></div>)
        }
           
      case "Admin":
        if(parseInt(localStorage.getItem("role"))==1 )

           return (<div> <Admin></Admin></div>)
        else
            
           return(<div><Error></Error></div>)
        case "Product":
          return(<div><Product store={store}></Product></div>)
          case "Cartpage":
            return(<div><Cartpage store={store}></Cartpage></div>)
            case "Billing":
              return(<div><Billing store={store}></Billing></div>)
    }
  }
  function Cartqty()
  {
     
     
    
     return(
      <div>
        {localStorage.getItem("count")}
      </div>
     )
  }
  function cartClick()
  {
    store.dispatch({"type":"page","data":"Cartpage"})
  }

  return (
    <div className='container'>
      <div className='header' style={{display:"flex"}}> 
      
      
       <div className='menu-bar' style={{width:"95%"}}>
        <ResponsiveAppBar store={store} a={10} b={"abc"} />
        
        </div>        
        <svg onClick={cartClick} style={{marginLeft:"2vw"}} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5985E1"><path d="M284.53-80.67q-30.86 0-52.7-21.97Q210-124.62 210-155.47q0-30.86 21.98-52.7Q253.95-230 284.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83Zm400 0q-30.86 0-52.7-21.97Q610-124.62 610-155.47q0-30.86 21.98-52.7Q653.95-230 684.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83ZM238.67-734 344-515.33h285.33l120-218.67H238.67ZM206-800.67h589.38q22.98 0 34.97 20.84 11.98 20.83.32 41.83L693.33-490.67q-11 19.34-28.87 30.67-17.87 11.33-39.13 11.33H324l-52 96h487.33V-286H278q-43 0-63-31.83-20-31.84-.33-68.17l60.66-111.33-149.33-316H47.33V-880h121.34L206-800.67Zm138 285.34h285.33H344Z"/></svg>
       
        <Cartqty></Cartqty>
        </div>
        <br></br>
      <center>
       <br/><br/><br/><br/>
        <Display />
        <br/><br/><br/><br/>
      </center>
    </div>
  )
}

export default App

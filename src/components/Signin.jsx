import axios from "axios"
import "./style.css"

function Login({store}) {

    function Fun1(event) {
        event.preventDefault()
        var em=document.getElementById("usr").value
        console.log({
            "email": document.getElementById("usr").value,
            "password": document.getElementById("pwd").value
        })
        axios.post("http://localhost:8081/check", {
            "email": document.getElementById("usr").value,
            "password": document.getElementById("pwd").value
        }).then((res)=>{
            if(res.data != 0){
                localStorage.setItem("un", res.data.name)
                console.log(res.data.name)
                localStorage.setItem("role", res.data.role)
                console.log(res.data.role)
               store.dispatch({"type":"page","data":"Electronics"})
                alert("Welcome to E-Commerce")
            }
            else{
                alert("Login Failed, Retry or Signup")
            }
        })
    }

    function Mover(){
        document.getElementById("f1").className="mover-form";
    }

    function Mleave(){
        document.getElementsByName("nf1")[0].className="login-form";
    }

    return(
        <>
            <form id="f1" name="nf1" className="login-form" onMouseOver={Mover} onMouseLeave={Mleave}>
                <table>
                    <tr style={{ textAlign: 'center', backgroundColor: 'skyblue'}}>
                        <td colSpan={2}> <b> Login </b> </td>
                    </tr>
                    <tr className="form-group">
                        <td><label htmlFor="usr">Email</label></td>
                        <td><input type="email" className="form-control" id="usr" required /></td>
                    </tr>
                    <tr className="form-group">
                        <td><label htmlFor="pwd">Password</label></td>
                        <td><input type="password" className="form-control" id="pwd" required /></td>
                    </tr>
                    <tr className="form-group" style={{ textAlign: 'center' }}>
                        <td colSpan={2}><button onClick={Fun1} style={{ backgroundColor: 'yellowgreen'}}> Login </button></td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default Login
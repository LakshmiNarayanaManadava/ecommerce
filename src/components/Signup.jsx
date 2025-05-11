import axios from "axios";
import "./style.css"

function Signup() {

    function Fun1(event) {
        event.preventDefault()
        console.log({
            "name": document.getElementById("usrname").value,
            "role": document.getElementById("sel1").value,
            "email": document.getElementById("usr").value,
            "password": document.getElementById("pwd").value
        })
        //get -> reterieving data
        //post -> sending (insert) data
        //put -> update data
        //patch -> partially updating data
        //delete -> delete the data
        axios.post("http://localhost:8081/user", {
            "name": document.getElementById("usrname").value,
            "role": document.getElementById("sel1").value,
            "email": document.getElementById("usr").value,
            "password": document.getElementById("pwd").value
        }).then((res)=>{
            alert(res.data)
        })
    }

    function Mover(){
        document.getElementById("f1").className="mover-signup";
    }

    function Mleave(){
        document.getElementsByName("nf1")[0].className="login-form";
    }

    return(
        <>
            <form id="f1" name="nf1" className="login-form" onMouseOver={Mover} onMouseLeave={Mleave}>
                <table>
                    <tr style={{ textAlign: 'center', backgroundColor: 'skyblue'}}>
                        <td colSpan={2}> <b> User Sign Up Page </b> </td>
                    </tr>
                    <tr className="form-group">
                        <td><label htmlFor="usrname">Name</label></td>
                        <td><input type="text" className="form-control" id="usrname" required /></td>
                    </tr>
                    <tr className="form-group">
                        <td><label htmlFor="sel1" className="form-label">Role</label></td>
                        <td><select className="form-select" id="sel1" name="sellist1">
                            <option value="1">ADMIN</option>
                            <option value="2">USER</option>
                        </select></td>
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
                        <td colSpan={2}><button onClick={Fun1} style={{ backgroundColor: "yellowgreen" }}> Signup </button></td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default Signup
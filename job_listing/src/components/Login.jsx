import { Link } from "react-router-dom"

export const Login = ()=>{
    return<div>
        <h1>Login Page</h1>
        User Name :<input type="text" placeholder="Username"></input><br/>
        Password :<input type="password" placeholder="Password"></input><br/>
        <Link to="/jobs" style={{margin:"20px"}}> LOGIN </Link>
        
    </div>
}
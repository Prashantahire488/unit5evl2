import {Link} from "react-router-dom"

export const Navbar = () =>{
    return(<div className="navbar">
        <Link to="/" style={{margin:"20px"}}> HOME </Link>
        <Link to="/login" style={{margin:"20px"},{backgroundColor:"red"},{padding:"10px"}}> LOGIN </Link>
        <Link to="/jobs" style={{margin:"20px"}}> JOBS </Link>
    </div>)
}
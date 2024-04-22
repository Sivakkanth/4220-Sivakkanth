import React, { useEffect, useState } from "react";
import axios from "axios";
import './Login.css'
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from '../../photos/logo.png'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Login = () => {
  let navigate = useNavigate();

  const [users, setusers] = useState([]);
  const [correctuser,setcorrectuser]= useState();
  const [loginUserName, setloginUserName] = useState();
  const [loginPassword, setloginPassword] = useState();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setusers(result.data);
  };

  const handleClick = () => {
    const foundUser = users.find((user) => user.userName === loginUserName && user.password === loginPassword);
  
    if (foundUser) {
      setcorrectuser(foundUser);
      navigate(`/Homepage/${foundUser.id}`);
    }
  };

  return (
    <div className='login-b1'>
      <img className="logo-login" src={logo}/>
      <form className="login-form">
        <h3 className='login-Header'>LOGIN</h3>
        <div className='login-d1'>
          <div>
            <label className="label" htmlFor="username">User Name</label>
            <input type="username"
              placeholder="Enter UserName"
              className="form-control"
              required
              name="loginUserName"
              value={loginUserName}
              onChange={(e) => setloginUserName(e.target.value)}/>
            <label className="label" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              name="loginPassword"
              value={loginPassword}
              required
              onChange={(e) => setloginPassword(e.target.value)}
            />
          </div>
          <div className="login-main">
            <input className='checkmark' style={{padding:"30px"}}
              type="checkbox" id="check"/>
            <label className="label" htmlFor="check">
              Remember me
            </label>
          </div>
          <div className="login-button">
            <button to={`/Homepage/:id`} style={{margin:"20px"}}
              className="btn btn-outline-light mx-4"
              onClick={handleClick}>
              SignIn
            </button>
            <Link type='close' to={"/"} className='btn btn-outline-danger mx-4'>
              Close
            </Link>
          </div>
          <p className="login-label">-----OR USE A SOCIAL ACCOUNT-----</p>
          <div className="social-login">
            <button className="social-button">
              <FcGoogle size={"30px"}/>
            </button>
            <button className="social-button">
              <SiFacebook color="blue" size={"30px"}/>
            </button>
          </div>
          <div className="login-forgot">
            <label className="label" style={{textAlign:'center', fontSize:'small'}}>
              If you can't remember  <a href={``} style={{color:"yellowgreen", backgroundColor:"transparent"}}>Forgot Password?</a>
            </label>
            <label className="label" style={{textAlign:'center', fontSize:'small'}}>
              Don't have an account <a href={`/signup/:id`} style={{color:"lightyellow", backgroundColor:"transparent"}}>SIGN UP</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login
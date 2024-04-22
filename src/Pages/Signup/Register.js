import axios from 'axios';
import './Register.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../photos/logo.png'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Register = () => {
  let navigate=useNavigate()
  const[user,setUser]=useState({
    userName:"",
    password:"",
    firstName:"",
    country:"",
  })
  const{userName, password,firstName,country, mabalance}=user;
  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    user.mabalance="0";
  }
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate("/Login/:id");
  }

  return (
    <div className='signup-b1'>
      <img className="logo-signup" src={logo}/>
      <form className="signup-form" onSubmit={(e)=>onSubmit(e)}>
        <h3 className="signup-Header">
          Ready to get free access to the world of investing?
        </h3>
        <h6 className="signup-SubHeader">
          Create an account to start using the platform
        </h6>
        <div className='signup-d1'>
          <label className="label" htmlFor='UserName'>
            User Name
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Username' name='userName'
          required value={userName} onChange={(e)=>onInputChange(e)}/>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Password' name='password'
          required value={password} onChange={(e)=>onInputChange(e)}/>
          <label htmlFor='firstName' className='label'>
            First Name
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Firstname' name='firstName'
          required value={firstName} onChange={(e)=>onInputChange(e)}/>
          <label htmlFor='country' className='label'>
            Country of Residence
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Counrty' name='country'
          required value={country} onChange={(e)=>onInputChange(e)}/>
          <div className="Confirmation">
            <input className='checkmark' style={{padding:"30px"}}
              type="checkbox" id="check"/>
            <label htmlFor='Check' style={{fontSize:'small'}} className='label'>
              I agree to the <b style={{backgroundColor:'transparent', color:"yellow"}}>Terms</b> and <b style={{backgroundColor:'transparent', color:"yellow"}}>Condition</b>.
            </label>
          </div>
          <div className="register-button">
            <button type='Submit' className='btn btn-outline-light'>
              Submit
            </button>
            <Link style={{ backgroundColor:"lightcoral", color:"darkblue"}} type='close' to={"/"} className='btn btn-outline-danger'>
              Close
            </Link>
          </div>
          <p className="signup-label">-----OR USE A SOCIAL ACCOUNT-----</p>
          <div className="social-signup">
            <button className="social-signup-button">
              <FcGoogle size={"30px"}/>
            </button>
            <button className="social-signup-button">
              <SiFacebook color="blue" size={"30px"}/>
            </button>
          </div>
          <label style={{textAlign:'center', padding:'5px', color:'white'}}>
            Already have an account? <a href={"/Login/:id"} style={{color:"lightyellow", backgroundColor:"transparent",paddingLeft:"5px", justifyContent:'center', justifyItems:'center'}}>SIGNIN</a>
          </label>
        </div>
      </form>
    </div>
  )
}

export default Register;
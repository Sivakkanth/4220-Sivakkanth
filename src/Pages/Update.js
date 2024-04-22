import axios from 'axios';
import './Signup/Register.css';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  let navigate=useNavigate();
  const {id}=useParams();
  const[user,setUser]=useState({
    userName:"",
    password:"",
    firstName:"",
    anumber:"",
    country:""
  })
  const{userName, password,firstName,country,anumber}=user;
  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  useEffect(()=>{
    loadUser()
  },[])
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user);
    navigate(`/Personal/${id}`);
  }
  const loadUser =async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className='b1'>
      <h3 className="Header">
        Update Your Details
      </h3>
      <form style={{backgroundColor:"transparent"}} onSubmit={(e)=>onSubmit(e)}>
        <div className='d4'>
          <label className="label" htmlFor='UserName'>
            User Name
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Username' name='userName'
          value={userName} onChange={(e)=>onInputChange(e)}/>
          <label className="label" htmlFor='password'>
            Password
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Password' name='password'
          value={password} onChange={(e)=>onInputChange(e)}/>
          <label className="label" htmlFor='firstName'>
            FirstName
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Firstname' name='firstName'
          value={firstName} onChange={(e)=>onInputChange(e)}/>
          <label className="label" htmlFor='country'>
            Country of Residence
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Counrty' name='country'
          value={country} onChange={(e)=>onInputChange(e)}/>
          <label className="label" htmlFor='anumber'>
            Account Number
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Account Number' name='anumber'
          value={anumber} onChange={(e)=>onInputChange(e)}/>
          <main className="mai">
            <label style={{paddingLeft:"50px", paddingTop:"5px"}} htmlFor='Check' className='label'>
              I agree to the <b style={{backgroundColor:'transparent', color:"yellow"}}>Terms</b> and <b style={{backgroundColor:'transparent', color:"yellow"}}>Condition</b>.
            </label>
          </main>
          <div style={{margin:"10px",paddingLeft:"50px", paddingRight:"50px"}} className="mai">
            <Link style={{margin:"20px", backgroundColor:"lightblue", color:"ThreeDDarkShadow"}} type='close' to={`/Personal/${id}`} className='btn btn-outline-danger mx-5'>
              Back
            </Link>
            <button type='Submit' className='btn btn-outline-light mx-0'>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Update;
import axios from 'axios';
import './Signup/Register.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function Personal() {
  const[user,setUsers]=useState({
    firstName:"",
    userName:"",
    mabalance:"",
    password:"",
    cabalance:"",
    anumber:"",
    country:""
  });
  const {id}=useParams();
  let navigate=useNavigate();
  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };

  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
    navigate(`/`);
  }

  return (
    <div className='b1'>
      <form style={{backgroundColor:'transparent'}}>
        <h3 className='Header'>Personal Details</h3>
        <div className='d3'>   
          <div style={{backgroundColor:'transparent', marginLeft:"50px"}}>
            <ul style={{backgroundColor:'transparent'}}>
              <li style={{backgroundColor:'transparent', padding:"10px auto"}} className='label'>
                <b style={{backgroundColor:'transparent'}} >First Name :</b>
                {user.firstName}
              </li>
              <li style={{backgroundColor:'transparent', padding:"10px auto"}} className='label'>
                <b style={{backgroundColor:'transparent'}} >User Name :</b>
                {user.userName}
              </li>
              <li style={{backgroundColor:'transparent', padding:"10px auto"}} className='label'>
                <b style={{backgroundColor:'transparent'}} >Password :</b>
                {user.password}
              </li>
              <li style={{backgroundColor:'transparent', padding:"10px auto"}} className='label'>
                <b style={{backgroundColor:'transparent'}} >Country :</b>
                {user.country}
              </li>
              <li style={{backgroundColor:'transparent', padding:"10px auto"}} className='label'>
                <b style={{backgroundColor:'transparent'}} >Account Number :</b>
                {user.anumber}
              </li>
              <li style={{backgroundColor:'transparent', padding:"10px auto"}} className='label'>
                <b style={{backgroundColor:'transparent'}} >Main account Balance :</b>
                {user.mabalance}
              </li>
              <li style={{backgroundColor:'transparent', padding:"10px auto"}} className='label'>
                <b style={{backgroundColor:'transparent'}} >Coin Account Balance :</b>
                {user.cabalance}
              </li>
            </ul>
          </div>
          <div style={{margin:"10px",paddingLeft:"50px", paddingRight:"50px"}} className="mai">
            <Link style={{margin:"20px", backgroundColor:"lightcyan", color:"darkblue"}} type='close' to={`/Homepage/${id}`} className='btn btn-outline-primary mx-5'>
              Back
            </Link>
            <Link style={{margin:"10px"}} className='btn btn-outline-light mx-5' to={`/Updatepage/${user.id}`}>Update</Link>
            <label style={{paddingLeft:"10%"}} className="label" htmlFor='Check'>
              If you don't want to the account  <a href={``} style={{color:"red", backgroundColor:"transparent", paddingLeft:"5px"}}>Deactivate</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}
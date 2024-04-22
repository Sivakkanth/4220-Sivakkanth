import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Users = () => {
  const[users,setUsers]=useState([]);
  const {id}=useParams();
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers = async()=>{
    const result=await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Password</th>
              <th scope="col">Country</th>
              <th scope="col">Main Account Balance</th>
              <th scope="col">Coin Account Balance</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index)=>(
                <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.userName}</td>
                  <td>{user.password}</td>
                  <td>{user.country}</td>
                  <td>{user.mabalance}</td>
                  <td>{user.cabalance}</td>
                  <td>
                    <button className='btn btn-primary mx-2'>View</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import './Signup.css'

    

const Signup = () => {

    const [companyName,setcompanyName] = useState("");
    const [ownerName,setownerName] = useState("");
    const [rollNo,setrollNo] = useState("");
    const [ownerEmail,setownerEmail] = useState("");
    const [accessCode,setaccessCode] = useState("");
    const handleName = (e) => {
        setcompanyName(e.target.value);

    }

    
    const handleOwner = (e) => {
        setownerName(e.target.value);

    }

    const handlerollno = (e) => {
        setrollNo(e.target.value);

    }

    const handleemail =(e) => {
        setownerEmail(e.target.value);

    }
    const handlecode =(e)=>{
        setaccessCode(e.target.value);
    }

    const data1 = {companyName,ownerName ,rollNo,ownerEmail,accessCode};

    
    const handleSubmit = (e) => {
        e.preventDefault();
        

        axios.post('http://localhost:3000/register',data1)
        .then((res) => {
             console.log(res.data)
        }  )
        .catch((err) => {
             console.error(err)
        })

        console.log( data1 ,"By frontend" );

    }

  return (
    <div>
    <div className='signup'>
        <form>
            <label>companyName : </label>
            <input type='text' onChange={handleName} />
            <label>ownerName : </label>
            <input type='text' onChange={handleOwner} />
            <label>rollNo : </label>
            <input type='text' onChange={handlerollno} />
            <label>ownerEmail : </label>
            <input type='text' onChange={handleemail} />
            <label>accessCode : </label>
            <input type='text' onChange={handlecode} />
            <button type='submit' onClick={handleSubmit} >Register</button>
        </form>
    </div>



    </div>
  )
}

export default Signup
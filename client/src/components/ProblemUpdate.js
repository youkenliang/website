import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import "../css/contact.css";

const ProblemUpdate = () => {
    const [ProblemInput, setProblemInput] = useState({
        statement:"",
        name:"",
        email:"",
    });
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const problemId =location.pathname.split("/")[2]
    console.log(location)

    const handleChange = (e) => {
        setProblemInput(  (prev) =>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e =>{
        e.preventDefault()
        if (!ProblemInput.statement) {
            alert('Problem statement cannot be empty'); // Show an alert message
            return;
          }
        
        try{
            axios.put("https://website-liang-9051bfce25a8.herokuapp.com//problems/"+problemId, ProblemInput)
            navigate("/contact/sets")
            setTimeout(() => {
                alert('Updated'); // Show an alert message after a short delay
              }, 30); 
        }catch(err){}
    }
    console.log(ProblemInput)
    return (
        <div className='contactPage'>
            <div className='problemForm'>
                <h2>What problems do you want to solve or see solved?</h2>
                <div className='formStatement'>
                    <textarea type="text" placeholder="Please state the problem" name="statement" value={ProblemInput.statement} onChange={handleChange} maxlength="60000" required />
                </div>
                <div className='formName'>
                    <input type="text" placeholder="Name (Optional)" name="name" value={ProblemInput.name} maxlength="400" onChange={handleChange} />
                </div>
                <div className='formEmail'>
                    <input type="email" placeholder="Email (Optional)" name="email" value={ProblemInput.email} maxlength="400" onChange={handleChange} />
                </div>
                <button className="formButton" onClick={handleClick}>Update</button>
            </div> 
        </div>
    )
}

export default ProblemUpdate;
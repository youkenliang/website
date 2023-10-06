import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import "../css/contact.css"

const ProblemSet = () => {
    const[problems, setProblems] = useState([])

    useEffect(()=>{
        const fetchAllProblems = async()=>{
            try{
                const res = await axios.get("https://website-liang-9051bfce25a8.herokuapp.com/problems")
                setProblems(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProblems()
    },[]);

    const handleDelete = async (id)=>{
        try{
            await axios.delete("https://website-liang-9051bfce25a8.herokuapp.com/problems/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return <div>
        <div>ProblemSet</div>
        <div className='problems'>
            {problems.map(problem=>(
                <div className="problem" key={problem.key}>
                    {problem.email && <img src="{problem.email}" alt="" />}
                    <h2>{problem.statement}</h2>
                    <h2>{problem.name}</h2>
                    <h2>{problem.email}</h2>
                    <button className='update'><Link to={`/update/${problem.id}`}>Update</Link></button>
                    <button className='delete' onClick={()=>handleDelete(problem.id)}>Delete</button>
                </div>
            ))}
        </div> 
    </div>
};

export default ProblemSet;
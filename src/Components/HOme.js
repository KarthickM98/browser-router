import React from "react";

import { Link } from "react-router-dom";

const Home =()=>{
    const students = [
        {id:1, name :"Harshita"},
        {id:2, name :"janaki"},
        {id:3, name :"Lalsa"},
        {id:4, name :"manikumar"},
        {id:5, name :"classified"},
    ]
    

    return (
        <>
        <h1>Home</h1>
        <h4>hi how are you? {
            students.map((val,index)=>{
                return(
                    <div key={index}>{index+1}.
                    <Link to={`/students/${val.id}`} >{val.name}</Link>
                    </div>
                )
            })
            }</h4>
        </>
    )
}

export default Home
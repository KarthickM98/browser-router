import React from "react";
import { useParams } from "react-router";

const Namecompo = () => {
  const {id} = useParams();  // we use for destructuring!!
  console.log(id);
  const students = [
    { id: 1, name: "Harshita" },
    { id: 2, name: "janaki" },
    { id: 3, name: "Lalsa" },
    { id: 4, name: "manikumar" },
    { id: 5, name: "classified" },
  ];
  return (
    <>
      <div>Namecompo</div>
      <h4>Name of the students is {       // eslint-disable-next-line
          students.map((val)=>{
              if(val.id===id){
                  return(<>{val.name}</>)
              }
          })
          }</h4>
    </>
  );
};

export default Namecompo;

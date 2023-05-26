import React, { useEffect, useState } from "react";
import axios from 'axios';

const Footer = () =>{

  const [data ,setData] =useState([]);

  const getData = async() =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    if(res.status === 200){
        setData(res.data);
    }
  }
  useEffect(() =>{
    getData();
  }, [])
  console.log(data, "sdfghjk");
     return(
        <div className="container">
            {data.map((el) =>(
            <div key={el.id}> 
              <h1>{el.title}</h1>
            </div>
            
            ))}
        </div>
     )

}
export default Footer;
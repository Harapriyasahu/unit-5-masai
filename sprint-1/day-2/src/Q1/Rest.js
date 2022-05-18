import React from 'react'
import data from "./data.json";

const Rest = () => {   
  return (
    
    <>
    
     <h1>Restaurants</h1>
                    <div className="container" style={{display:"grid",gridTemplateColumns:"repeat(4,20%)",gap:"50px",margin:"auto",justifyContent:"space-evenly"}}>
                        {/* map through the data and display the cards */}
                        {console.log(data)}
                        {data.map((item)=>(
                            
                            <div className="card" style={{gap:"20px",border:"2px solid black"}}>
                                <h2>{item.discount} OFF</h2>
                               
                                <img src={item.imgURL} alt="" style={{width:"200px"}} />
                            <p style={{fontSize:"20px"}}>{item.mrp}</p>
                            <h6 style={{fontSize:"18px"}}>{item.title}</h6>
                            {/* <CartButton/> */}
                        {/* <button>Add</button> */}
                            
                           
                          
                            </div>
                        ))}
                         
                    </div>
    </>
  )
}

export default Rest
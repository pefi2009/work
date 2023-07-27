import React, { useContext, useState } from "react";
import ProductContext from "./ProductContext";
import Commodities from "./Commodities";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Test3 = ({ k, id }) => {
 /*  const orange = useContext(ProductContext)
 
  const [product, setProduct] = useState();
 
  const element = (t) => {
    return setProduct(t, ...product);
  };
 */

const [selectedproduct,setSelectedproduct] = useState()

  const buy = (e) => {
    e.preventDefault();
    const array = []
    const val= array.push(k) 
    setSelectedproduct(val)
     console.log(k)
  };
  
 
  return (
    <div>
      <div className="sib">
        <div>
          <img className="brad" src={k.image}></img>

          <p className="title">{k.title}</p>
        </div>
        <div className="buy">
          <button key={k.id}  onClick={buy}>Buy</button>
        </div>
      </div>
   
   
    </div>
  );
};

export default Test3;

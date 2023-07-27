import React, { useContext, useState } from "react";
import ProductContext from "./ProductContext";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Commodities = ({product}) => {
  
  return (
    <div>
    {product.price}
  
     <h1>Commoditieees</h1>
    </div>
  );
};

export default Commodities;

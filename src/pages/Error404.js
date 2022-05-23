import React from "react";
import burrito from "../assets/images/burrito.png"
const Error404 = () => {
  return (
    <div className="container center">
      <h1 className=" grey-text  text-darken-1"> Error 404 </h1>
      <h5 className=" grey-text  text-lighten-1">No deberias estar aquí</h5>
      <img
        src={burrito} 
        className="responsive-img"
        width="200px"
        height="50px"
        alt=""
      />
    </div>
  );
};

export default Error404;

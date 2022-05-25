import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const FilaR = (props) => {
  const { abrirModalAsignarRevisor, solicitud, fn, getSolicitudes } = props;
    return((
    <>
       <tr>
            <td>  
            {" "}
          {/*1*/}
          {solicitud.id}
            </td>   
            <td></td>   
            <td></td>   
            <td></td>   
        </tr> 

    </>
))
  





};

export default FilaR;
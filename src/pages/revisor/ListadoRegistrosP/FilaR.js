import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


const FilaR = (props) => {
  const { abrirModalAsignarRevisor, registro, fn, getSolicitudes } = props;
    return((
    <>
       <tr>
            <td>  
            {" "}
          {/*1*/}
          {registro.id}
            </td>   
            <td>
              {/*2*/}
          {registro.programa.nombre}
              </td>   
            <td>
          {/*3*/}
          {registro.fechaAprobacion}
              </td>   
            <td>
         {/*4*/}
          {registro.estatus}
              </td>   
        </tr> 

    </>
))
  





};

export default FilaR;
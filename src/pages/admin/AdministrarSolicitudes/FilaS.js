import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ModalAsignarRevisor from "./ModalAsignarRevisor";
import Modal from "../../../components/Modal";



const FilaS = (props) => {
  const { solicitud, fn, getSolicitudes } = props;
  const [modalAsignarRevisor, setModalAsignarRevisor] = useState(false);



  let estilo = "";
  let revisor = "";
  let color2 = "";
  let colour = "";
  if (props.status == "Pendiente - Asignar Revisor") {
    revisor = "Asignar revisor";
    color2 = "new badge red";
    estilo = "modal-trigger waves-effect waves-light btn";
  } else if (props.status == "Asignado") {
    revisor = props.texto2;
    estilo = "black-text";
    color2 = "new badge green";
  } else {
    revisor = props.status2;
    estilo = "black-text";
    color2 = "new badge yellow darken-4";
  }
  if (props.status2 == "En proceso") {
    colour = "new badge yellow darken-4";
  } else if (props.status2 == "Asignado") {
    colour = "new badge green";
  } else if (props.status2 == "Pendiente - Asignar Revisor") {
    colour = "new badge red";
  }




  return (

    <>
      <Modal open={modalAsignarRevisor} fnCloseModal={() => setModalAsignarRevisor(false)}>
        <ModalAsignarRevisor
        idSolicitud = {solicitud.programa.id}
        
        />
</Modal>
   
    <tr
      onClick={() => {
        //  history.push("/admin/DetallesRegistro");
      }}
    >
      <td>  {/*1*/}
      {solicitud?.programa?.nombre} 
      </td>
      <td>  {/*2*/}
      {solicitud?.programa?.id}
      </td>
      <td> {/*3*/}
      {solicitud.revisor? 
      <span className="new badge green white-text  "   data-badge-caption="">
      Asignado
    </span>:
        <span className="new badge red white-text  "   data-badge-caption="">
        Pendiente - Asignar Revisor
      </span>}
      
      <span className="new badge orange white-text  "   data-badge-caption="">
      {solicitud.estatus }
    </span>
  
    
        
      </td>


      <td> {/*4*/}
      {solicitud.revisor?.nombre}
      <tr></tr>
      {solicitud.revisor?.primerApellido }
      <tr></tr>
      {solicitud.revisor?.segundoApellido }
      </td>


      <td> {/*5*/}
        
          <button
            className="btn"
            onClick={(e) => {
              e.stopPropagation();
              setModalAsignarRevisor(true);
              
              // props.fnAsignar();

              
            }}
          >
            AsignarRevisor
          </button>
      {/* {props.revisor ? (
          revisor
        ) : (
          <button
            className={estilo}
            onClick={(e) => {
              e.stopPropagation();
              props.fnAsignar();
            }}
          >
            {revisor}
          </button>
        )} */}
      </td>


      <td> {/*6*/}
        {props.completado ? (
          <button
            className="waves-effect waves-light btn outlined"
            onClick={(e) => {
              e.stopPropagation();
              props.fn();

            }}
          >
            Aprobar
          </button>
        ) : (
          "Sin Completar"
        )}
      </td>


      <td> {/*7*/}
        <Link
          to="/admin/DetallesRegistroId"
          className="waves-effect waves-light btn outlined"
        >
          Ver
        </Link>
      </td>
    </tr>


    </>
  );
};

export default FilaS;

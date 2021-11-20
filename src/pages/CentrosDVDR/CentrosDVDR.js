import React, { useState, useEffect, useRef } from "react";
import Footer from "..//Footer";
import M from "materialize-css/dist/js/materialize.min.js";

const CentrosDVDR = () => {
  const tabs = useRef(null);
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(tabs.current, {});
  }, []);

  const [centro, setCentro] = useState("Centro");

  function cambiodeTexto(texto) {
    setCentro(texto);
    var elems = document.querySelector(".modal");
    var instance = M.Modal.getInstance(tabs.current);
    instance.open();
    
  }

  const style = {
    cardImg: {
      
      width: "100%",
      objectFit: "cover",
      height: "100%",

    },
    box: {
      border: "1px",
      width: "100%",
      height: "100%",
    }
  };

//holacxcxcxfdsfds
//width="100px" height="100px"
// style={style.box}
  const ModalHelp = () => {
    return (
      <div id="modal11" className="modal" ref={tabs}>
        <div class="box"> 
        <div class="modal-content row container section" style={{minWidth:"100%"}}>
          <table>
            <tr>
              <td><img src="https://www.encb.ipn.mx/assets/files/encb/img/escudos/logo-ipn.png" style={style.cardImg}/></td>
              <td><p align="center" style={style.box}><h5><b>Instituto Politécnico Nacional <br/>
                Secretaría de Innovación e Integración Social<br/>
                Dirección de Vinculación y Desarrollo Regional</b></h5></p></td>
              <td><img src="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/logo-DVDR.jpg" style={style.cardImg}/></td>
            </tr>
          </table>
          <br />
          <div>
         
            <br /> <br />
          </div>
          <div className=" ">
          <h1>MELENDEZ </h1>
            <br /> <br />
          </div>
          <div className="">
          <h1>Delgadillo</h1>
            <br /> <br />
          </div>
          <div className="">
          <h1>DIAZ</h1>
            <br /> <br />
          </div>
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
      </div>
    );
  };
  return (
    <>
      <ModalHelp />
      <div>
        <header></header>
        <main>
          <h1>{centro}</h1>
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => cambiodeTexto("Centro1")}
          >
            
            CENTRO1
          </button>

          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => cambiodeTexto("Centro2")}
          >
            
            CENTRO2
          </button>

          <a class="waves-effect waves-light btn modal-trigger" href="#modal11">
            Modal
          </a>
        </main>
        <Footer />
      </div>
      ;
    </>
  );
};

export default CentrosDVDR;

import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Modal = () => {

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);
  const ModalHelp = () => {
   
    return (
      <div id="modal11" className="modal" ref={tabs}>
        <div class="modal-content row container">
          <img src="https://www.encb.ipn.mx/assets/files/encb/img/escudos/logo-ipn.png"/>
          <br />
          <div>
          <img src="https://www.ipn.mx/assets/files/vinculacion/img/Vinculacion_princ/logo-DVDR.jpg"/>
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
    );
  };

  return(
  <>
 <ModalHelp/> 
 
  <div>
       <header>
       
      </header>
      <main>
    
    
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
        
      </main>
      
  </div>
  </>);
};
export default Modal;

import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Modal = () => {

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);
  const ModalHelp = () => {
   
    return (
      <div id="modal11" className="modal">
        <div class="modal-content container">
          <h1>Delgadillo es gay</h1>
          
          <br />
          <div className="  ">
            <br /> <br />
          </div>
          <div className=" ">
            <br /> <br />
          </div>
          <div className="">
            <br /> <br />
          </div>
          <div className="">
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

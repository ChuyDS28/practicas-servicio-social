import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const Modal = (props) => {
  const {titulo} = props;
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);
  const ModalHelp = () => {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content  ">
          <h5>{titulo}</h5>
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
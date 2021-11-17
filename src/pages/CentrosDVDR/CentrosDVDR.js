import React, { useEffect } from "react";
import Footer from "..//Footer"
import Modal from "./Modal"

const CentrosDVDR = () => {

  return(
  <>
  <div>
       <header>
       
      </header>
      <main>
      <div className="Row containerrow section ">
      <Modal
      titulo="FREEFIRE"
      />
      <Modal
      titulo="PEWDIEPIE"
      />
    
      </div>
      </main>
      <Footer/>
  </div>;
  </>
  );
};

export default CentrosDVDR;
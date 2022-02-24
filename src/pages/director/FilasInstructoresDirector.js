import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba12 from "../../assets/images/ba12.png";
import parteba9 from"../../assets/images/parteba9.png";
import { obtenerDocumentosInstructor } from "../../api/services/instructores.js";


const style = {
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    height: "100%",
    transform: " translate(-50% , -50%)",
    width: "50%",
  },
  fon: {
    height: "100%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon7: {
    height: "91%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon2: {
    position: "absolute",
    objectFit: "cover",
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
  },
  imag: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  imag2: {
    position: "absolute",
    right: "60px",
    top: "0%",
    height: "80%",
    width: "85px",
  },
  imag3: {
    position: "absolute",
    right: "180px",
    top: "0px",
    height: "100%",
    width: "92%",
  },
  imag4: {
    position: "absolute",
    right: "0px",
    top: "0px",
    height: "105%",
    width: "60%",
  },
  botones: {
    borderRadius: "20px",
  },
  cards: {
    width: "600px",
    position: "relative",
    left: "6%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  tit: {
    left: "0px",
    position: "absolute",
  },
};

const FilasInstructoresDirector = (props) =>{

    useEffect(() =>{
        getDocuments()
      }, []);
      
      async function getDocuments(){
        try{
          const documents = await obtenerDocumentosInstructor(props.id);
          // setDocsInstructor(documents);
          console.log(documents);
          console.log(URL.createObjectURL(documents.data));
        }
        catch(error){
          console.log(error);
          console.log(error.response);
        }
      }
    
    return(
        <>
            <tr className="amber lighten-5">
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                <b>{props.nombre}</b>
              </td>
              <td><b>{props.rfc}</b></td>
              <td>
                <button className="waves-effect waves-light btn  cyan lighten-1">CV</button>
              </td>
              <td>
              <button
                  className="waves-effect waves-light btn indigo-text text-darken-4  outlined"
                  style={{
                    borderColor: "#2196f3",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                >
                  <b>Documentación</b>
                </button>
              </td>
              {/* <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
            </tr>
            </>
    );
}; export default FilasInstructoresDirector;
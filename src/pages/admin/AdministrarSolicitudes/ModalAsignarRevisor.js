import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUsuarios } from "../../../api/services/usuarios";
import { asignarRevisor } from "../../../api/services/admin/solicitudes";
import { useNavigate, useParams } from "react-router-dom";
import InfiniteScroll
 from "react-infinite-scroll-component";

const ModalAsignarRevisor = () => {
  let navigate = useNavigate();
  const [revisores, setRevisores] = useState([]);
  const [revisorSeleccionado, setRevisorSeleccionado] = useState( 
    {idRevisor: "",
  }
  );




  const getRevisores = async () => {
    try {
      const response = await obtenerUsuarios(0);
      console.log(response);
      setRevisores(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getRevisores();
  }, []);

  async function asignarRevisorSubmit() {
    const data = {
      idRevisor: revisorSeleccionado.idRevisor,
    };


    console.log("ASIGANR");
    console.log({revisorSeleccionado});
    try {
      const responserev = await asignarRevisor(data);
      M.toast({
        html: "Revisor asignado",
        classes: "green",
      });
      console.log(responserev);
      // navigate("/admin/solicitudes");
      // window.location.reload(true);
    } catch (error) {
      console.log(error);
      console.log(error.responserev);
      M.toast({ html: "Error al Asignar Revisor", classes: "red" });
    }
  };

  return (
    <div className="modal-content  ">
      <h5>Asignar Revisor</h5>

      <div className="col s6">
        <label>Unidad Academica</label>

        <select
          className="browser-default"
          required
          name="idRevisor"
          onChange={(evento) => setRevisorSeleccionado(evento.target.value)}
          value={revisorSeleccionado.idRevisor}
        >


            <option value=" " >
            Seleccionar una opcion
            </option>
          {revisores
            .filter((usuario) => usuario.rol === "REVISOR")

            .map((usuario) => (
              <option value={usuario.id} key={usuario.id}>
                {usuario.nombre}
              </option>
            ))}
        </select>

        <br />
      </div>

      <br />
      <InfiniteScroll
            dataLength={revisores.length}
            next={getRevisores}
            //hasMore={hasMore}
            style={{ overflow: "-moz-hidden-unscrollable" }}
            loader={
              <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-green-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            }
            endMessage={
              <center>
                <b>No hay mas revisores por mmostrar</b>
              </center>
            }
          >
      <button
        onClick={asignarRevisorSubmit}
        className="waves-effect waves-light btn   "
      >
        Asignar
        <i className="material-icons right">picture_as_pdf</i>
      </button>
      </InfiniteScroll>
      <button className="modal-close waves-effect waves-green btn-flat right">
        Cerrar
      </button>
    </div>
  );
};

export default ModalAsignarRevisor;

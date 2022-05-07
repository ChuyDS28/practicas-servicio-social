import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUsuarios } from "../../../api/services/usuarios";
import { asignarRevisor } from "../../../api/services/admin/solicitudes";
import { useNavigate, useParams } from "react-router-dom";
import InfiniteScroll
 from "react-infinite-scroll-component";

const ModalAsignarRevisor = (props) => {
  let navigate = useNavigate();
  const { solicitud, fn, getSolicitudes } = props;
  const [revisores, setRevisores] = useState([]);
  const [numPag, setNumPag] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [revisorSeleccionado, setRevisorSeleccionado] = useState( 
    {idRevisor: "",
    idSolicitud: solicitud?.id,
  }
  );

  const getRevisores = async () => {
    try {
      const response = await obtenerUsuarios(numPag);
      console.log(response);
      setRevisores(response.data);
      if (response.data.length === 0) {
        setHasMore(false);
        // setLoading(false);
        return;
      }
      setHasMore(true);
      setRevisores([...revisores, ...response.data]);
      setNumPag((newPage) => newPage + 1);
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


  const style = {
    boton: {
      background: "#00695c",
    },
  };

  const handleChange = (e) => {
    setRevisorSeleccionado({
      ...revisorSeleccionado,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal-content  ">
      <h5>Seleccion el Revisor:</h5>

      <div className="col s6">
        <label>Usuarios</label>

        {/* <select
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
        </select> */}

        <br />
      </div>

      <br />
      <div
      id = "ModalasignarRevisor-revisores"
      style = {{overflow: "auto", height: "160px", display:"flex", flexDirection:"column"}}
      >
        
      <InfiniteScroll
            scrollableTarget= "ModalasignarRevisor-revisores"
            dataLength={revisores.length}
            next={getRevisores}
            hasMore={hasMore}
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
                <b>No hay mas revisores por mostrar</b>
              </center>
            }
          
          
          
          >
{
            revisores.map (
              (revisor)=> 

              
              <center>
              <button
              className="waves-effect waves-black btn center "
              style={revisor.nombre === "revisor.nombre" ? style.boton : {}}

              // {{
              //   display:"block", width:"120px"
              // }}

              // onChange={(evento) => setRevisorSeleccionado(evento.target.value)}
              onChange={handleChange}
              value={revisorSeleccionado.idRevisor}
             
              >
{revisor.nombre}
              </button>
              </center>
            )
          }

          
           
      </InfiniteScroll>
      </div>
      <br/>
      <div

      >
      <button
        onClick={asignarRevisorSubmit}
        className="waves-effect waves-light btn   "
      >
        Asignar
        <i className="material-icons right">picture_as_pdf</i>
      </button>

      <button className="modal-close waves-effect waves-green btn-flat right">
        Cerrar
      </button>
      </div>
    </div>
  );
};

export default ModalAsignarRevisor;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ba14 from "../../../assets/images/ba14.png";
import parteba11 from "../../../assets/images/parteba11.png";
import FilaS from "./FilaS";
import Modal from "../../../components/Modal";
import ModalAsignarRevisor from "./ModalAsignarRevisor";


import {obtenerSolicitudes} from "../../../api/services/admin/solicitudes"

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
const AdministrarSolicitudes = () => {
  let navigate = useNavigate();
  const [modalAprobar, setModalAprobar] = useState(false);
  const [modalAyuda, setModalAyuda] = useState(false);
  const [modalAsignarRevisor, setModalAsignarRevisor] = useState(false);


  useEffect(() => {
    getSolicitudes();
    
  }, []);

  const [loading, setLoading] = useState(false);
  const [solicitudes, setSolicitudes] = useState([]);
  const [numPag, setNumPag] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  async function getSolicitudes() {
    if (numPag === 0) setLoading(true);
    console.log("funcion getSolicitudes");
    try {
      const dataU = await obtenerSolicitudes(numPag);
      console.log(dataU);
      if (dataU.data.length === 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      setHasMore(true);
      setSolicitudes([...solicitudes, ...dataU.data]);
      setNumPag((newPage) => newPage + 1); 
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }





  const ModalHelp = () => {
    return (
      <div class="modal-content ">
        <div className="teal lighten-3 white-text section center">
          <h5 className="">Simbología</h5>
        </div>
        <br />
        <span className="new badge red left" data-badge-caption="">
          Pendiente - Asignar revisor
        </span>
        <div className="  ">
          &nbsp; &nbsp;- Aún no se ha asignado un revisor
          <br /> <br />
        </div>
        <span className="new badge blue left" data-badge-caption="">
          Asignado
        </span>
        <div className=" ">
          &nbsp; &nbsp; - Se ha otorgado un revisor
          <br /> <br />
        </div>
        <span className="new badge yellow darken-4 left" data-badge-caption="">
          En proceso
        </span>
        <div className="">
          &nbsp; &nbsp; - Ya están asignados y empezaron su proceso de registro
          <br /> <br />
        </div>
        <span className="new badge green left" data-badge-caption="">
          Aceptado
        </span>
        <div className="">
          &nbsp; &nbsp; - Se ha aceptado la solicitud
          <br /> <br />
        </div>

        <button
          href="#!"
          className="modal-close waves-effect waves-green white-text teal lighten-3 btn-flat right"
        >
          Cerrar
        </button>
        <br />
      </div>
    );
  };
  const Aprobar = () => (
    <div>
      Solo se pueden aprobar solicitudes completas al 100 <br />
      Generar/ asignar clave
    </div>
  );

  return (
    <>
      <Modal open={modalAprobar} fnCloseModal={() => setModalAprobar(false)}>
        <Aprobar />
      </Modal>
      <Modal open={modalAyuda} fnCloseModal={() => setModalAyuda(false)}>
        <ModalHelp />
      </Modal>
{/*       <Modal
        open={modalAsignarRevisor}
        fnCloseModal={() => setModalAsignarRevisor(false)}
      >
        <ModalAsignarRevisor />
      </Modal> */}
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l10 xl8 "
          style={{
            position: "absolute",
            top: "-50px",
            height: "122%",
            left: "0px",
          }}
        >
          <img alt="" src={ba14} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <b>SOLICITUDES</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar el historial de <br />
                solicitudes y asignar un revisor
              </b>
            </h6>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba11}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <br />
      <div className="container  ">
        <button
          href="#modal2"
          className="modal-trigger waves-effect waves-light btn right lime darken-2"
          onClick={() => setModalAyuda(true)}
        >
          Símbología
        </button>
        <br />
        <br />
        
        <table className="striped responsive-table ">
          <thead className="cyan darken-1">
            <tr className="cyan darken-1">
              <th className="cyan darken-1 white-text">Solicitudes</th>
              <th className="cyan darken-1 white-text">Status</th>
              <th className="cyan darken-1 white-text">Revisor</th>
              <th className="cyan darken-1 white-text">Asignar</th>
              <th className="cyan darken-1 white-text">Aprobar</th>
              <th className="cyan darken-1 white-text">Ver</th>
            </tr>
          </thead>

          <tbody>
              {solicitudes.map((solicitud) => (
                <FilaS key={solicitud.id} solicitud={solicitud} getSolicitudes={getSolicitudes} />
              ))}
           
            </tbody>

        </table>
        
      </div>
    </>
  );
};

export default AdministrarSolicitudes;

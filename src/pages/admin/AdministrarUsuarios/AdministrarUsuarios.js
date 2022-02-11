import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import parteba10 from "../../../assets/images/parteba10.png";
import ba13 from "../../../assets/images/ba13.png";
import FilaU from "./FilaU";
import AgregarUsuario from "./AgregarUsuario";
import { obtenerUsuarios } from "../../../api/services/usuarios";
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
    height: "100%",
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
const AdministrarUsuarios = () => {
  const [modalAgregarUser, setModalAgregarUser] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  async function getUsuarios() {
    try {
      const dataU = await obtenerUsuarios(0);
      console.log(dataU);
      setUsers(dataU.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  const ModalInfo = () => {
    return (
      <div className="modal-content  ">
        <div className="light-blue lighten-2 white-text section center">
          <h5 className="center ">Datos</h5>
        </div>
        <br />
        <div className="row">
          <div className="col s12 m12 l7 xl7">
            <p>
              <strong>Nombre:&nbsp;&nbsp;</strong>Pedro Díaz Coronel
            </p>
          </div>

          <div className="col s12 m12 l4 xl4">
            <p>
              <strong>Tipo de usuario:&nbsp;&nbsp;</strong>Subdirector
            </p>
          </div>

          <div className="col s12 l7">
            <p>
              <strong>Escuela, unidad o centro:&nbsp;&nbsp;</strong>
              Juan de Dios Bátiz
            </p>
          </div>
          <div className="col s12 m4 l5">
            <p>
              <strong>Cargo:&nbsp;&nbsp;</strong>Principal
            </p>
          </div>
          <div className="col s12 m7 xl7">
            <p>
              <strong>Fecha de registro:&nbsp;&nbsp;</strong>16/11/2021
            </p>
          </div>
          <div className="col s12 m5 xl5">
            <p>
              <strong>Fecha de inactividad:&nbsp;&nbsp;</strong>17/11/2021
            </p>
          </div>
          <div className="col s12 m7 xl7">
            <p>
              <strong>Número de telefono:&nbsp;&nbsp;</strong>5570293846
            </p>
          </div>
          <div className="col s12 m5 xl5">
            <p>
              <strong>Extensión:&nbsp;&nbsp;</strong>551728
            </p>
          </div>
        </div>
        <button className="light-blue lighten-2 white-text modal-close waves-effect waves-green btn-flat right">
          Cerrar
        </button>
        <br />
      </div>
    );
  };

  return (
    <>
      <Modal
        open={modalAgregarUser}
        fnCloseModal={() => setModalAgregarUser(false)}
      >
        <AgregarUsuario />
      </Modal>
      
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l10 xl8 "
          style={{
            position: "absolute",
            top: "-60px",
            height: "122%",
            left: "0px",
          }}
        >
          <img alt="" src={ba13} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 className="titulo">
            LISTADO DE <b>USUARIOS</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar las personas <br />
                que quieren registrarse
              </b>
            </h6>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba10}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <div className="bigContainer">
        <button
          className="waves-effect waves-light btn "
          style={{ margin: "15px 0" }}
          onClick={() => setModalAgregarUser(true)}
        >
          Agregar Usuario <i className="material-icons right">add</i>
        </button>
        <div
          style={{
            border: "1px solid #d3d3d3",
            overflow: "auto",
            margin: "25px 0",
          }}
        >
          <table
          /* className="striped  responsive-table " */
          >
            <thead className="grey lighten-3   grey-text text-darken-3">
              <tr>
                <th className=" " style={{ minWidth: "150px" }}>
                  Nombre
                </th>
                <th className="" style={{ minWidth: "150px" }}>
                  Tipo de usuario
                </th>
                <th className="" style={{ minWidth: "150px" }}>
                  Núm. Empleado
                </th>
                <th className="" style={{ minWidth: "150px" }}>
                  Status
                </th>
                <th className="" style={{ minWidth: "150px" }}>
                  Acciones
                </th>
                <th className="" style={{ minWidth: "100px" }}>
                  Datos
                </th>
                <th className="">Editar</th>
                <th className="">Eliminar</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <FilaU
                  key={user.id}
                  user={user}
                  fn={() => setModalInfo(true)}
                  getUsuarios={getUsuarios}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdministrarUsuarios;

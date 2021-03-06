import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import parteba10 from "../../../assets/images/parteba10.png";
import ba13 from "../../../assets/images/ba13.png";
import FilaU from "./FilaU";
import AgregarUsuario from "./AgregarUsuario";
import { obtenerUsuarios } from "../../../api/services/usuarios";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const [users, setUsers] = useState([]);
  const [numPag, setNumPag] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getUsuarios();
  // }, []);

  const reset = () =>{
    setUsers([]);
    setNumPag(0);
    setHasMore(true);
    setLoading(true);
  }

  async function getUsuarios() {
    if (numPag === 0) setLoading(true);
    try {
      const dataU = await obtenerUsuarios(numPag);
      console.log(dataU);
      if (dataU.data.length === 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      setHasMore(true);
      setUsers([...users, ...dataU.data]);
      setNumPag((newPage) => newPage + 1);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <>
      <Modal
        open={modalAgregarUser}
        fnCloseModal={() => setModalAgregarUser(false)}
      >
        <AgregarUsuario 
        reset={reset}/>
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
                Aqu?? puedes consultar las personas <br />
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
        <button
          className="waves-effect waves-light btn grey darken-1 right"
          style={{ margin: "15px 0" }}
        >
          Ver Usuarios desactivados
        </button>
        <div
          style={{
            border: "1px solid #d3d3d3",
            margin: "25px 0",
          }}
        >
          <InfiniteScroll
            dataLength={users.length}
            next={getUsuarios}
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
                <b>No hay mas usuarios registrados</b>
              </center>
            }
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
                    N??m. Empleado
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
                    getUsuarios={getUsuarios}
                    setUsers={setUsers}
                    reset={reset}
                    users={users}
                  />
                ))}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default AdministrarUsuarios;

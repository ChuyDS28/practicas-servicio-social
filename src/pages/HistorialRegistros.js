/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import dataPaginada from "../data/registrosPaginados.json";
import solicitud from "../assets/pdfs/Big Data_Vfinal_ok.pdf";
import Modal from "../components/Modal";

const HistorialRegistros = () => {
  const [searchList, setSearchList] = useState([]);
  //console.log(dataPaginada.flat(2));
  const [recordsList, setRecordsList] = useState(
    dataPaginada.reduce((last, total) => [...total, ...last])
  );
  const [dataPages, setDataPages] = useState(dataPaginada);
  const [page, setPage] = useState(16);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      const list = [];
      recordsList.forEach((x) => {
        const name = x.NombrePrograma.toLowerCase();
        if (name.indexOf(e.target.value.toLowerCase()) >= 0) {
          list.push(x);
        }
      });
      setSearchList(list);
    } else {
      console.log("vacio");
      setSearchList([]);
    }
  };

  const nextPage = (page) => {
    if (page < 17) {
      setPage(page);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };

  const Number = (props) => (
    <li className={page === props.index ? "active" : "waves-effect"}>
      <a onClick={() => nextPage(props.index)}>{props.number}</a>
    </li>
  );

  const Fila = ({ row }) => {
    const [modalInfo, setModalInfo] = useState(false);
    return (
      <>
        <Modal open={modalInfo} fnCloseModal={() => setModalInfo(false)}>
          <div className="modal-content">
            <div className="row">
              <div
                className="col s12 center "
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                {row.NombrePrograma}
                <div className="divider" style={{ margin: "25px 0" }}></div>
              </div>
              <div className="col s6">
                <strong>· Tipo de programa: </strong>
                {row?.TipodeEvento}
              </div>
              <div className=" col s6">
                <strong>· Horas totales: </strong>
                {row?.DuracionTotal}hrs
              </div>
              <div className=" input-field col s12">
                <strong>· Area del conocimiento: </strong>
                {row?.AreaDeConocimiento}
              </div>
              <div className=" col s12">
                <strong>· Temario: </strong>
                <ul style={{ marginLeft: "1rem" }}>
                  {row.Temario &&
                    row.Temario.map((tema) => <li>-{tema.nombreTema}</li>)}
                </ul>
              </div>

              <button className=" modal-close waves-effect waves-green btn-flat right">
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
        <tr key={row.Cosecutivo}>
          <td style={{ maxWidth: "180px" }}>{row.NombrePrograma}</td>
          <td>{row.Clave}</td>
          <td>{row.CentroUnidadAcademica}</td>
          <td>{row.Vigencia}</td>
          <td>{row.DuracionTotal}</td>
          <td>
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => setModalInfo(true)}
              style={{ maxWidth: "65px" }}
            >
              Ver Contenido
            </button>
          </td>
          {/* <td>
    <span className="new badge green  " data-badge-caption="">
      Impartiendo
    </span>
  </td> */}
          {/* <td>
        <a
          className="waves-effect waves-light btn outlined "
          href={solicitud}
          target="_blank"
          rel="noreferrer noopener"
          style={{ maxWidth: "65px" }}
        >
          Ver Contenido
        </a>
      </td> */}
        </tr>
      </>
    );
  };
  return (
    <>
      <div className="container  ">
        <blockquote>
          <h5 className="light teal-text">Listado de registros</h5>
          <p>Aqui puedes consultar el historial total de registros</p>
        </blockquote>
        <div className="row">
          <div className="input-field col s4 right">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" onChange={handleChange} />
            <label htmlFor="icon_prefix">Buscar</label>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #d3d3d3",
            overflow: "auto",
          }}
        >
          <table className=" ">
            <thead className="grey lighten-3   grey-text text-darken-3">
              <tr>
                <th>Nombre Programa</th>
                <th>Clave de Registro{/*o programa?*/}</th>
                <th>Centro</th>
                <th>Termino de vigencia</th>
                <th style={{ minWidth: "100px" }}>Duracion Total en Hrs</th>
                <th>Ficha</th>

                {/*  <th>Status</th> */}
                {/*  <th>Info</th> */}
              </tr>
            </thead>

            <tbody style={{ marginTop: "150px" }}>
              {searchList.length === 0 &&
                dataPages[page]
                  .slice(0) //clonar array para poder usar reverse()
                  .reverse()
                  .map((row, index) => <Fila key={row.Cosecutivo} row={row} />)}
              {searchList.length > 0 &&
                searchList.map((row, index) => (
                  <Fila key={row.Cosecutivo} row={row} />
                ))}
            </tbody>
          </table>
        </div>
        {searchList.length === 0 && (
          <ul
            className="pagination"
            style={{ padding: "15px", textAlign: "center" }}
          >
            <li className="disabled">
              <a href="#!">
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            <Number number={1} index={16} />
            <Number number={2} index={15} />
            <Number number={3} index={14} />
            <Number number={4} index={13} />
            <Number number={5} index={12} />
            <Number number={6} index={11} />
            <Number number={7} index={10} />
            <Number number={8} index={9} />
            <Number number={9} index={8} />
            <Number number={10} index={7} />
            <Number number={11} index={6} />
            <Number number={12} index={5} />
            <Number number={13} index={4} />
            <Number number={14} index={3} />
            <Number number={15} index={2} />
            <Number number={16} index={1} />
            <Number number={17} index={0} />

            <li className="disabled">
              <a href="#!">
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default HistorialRegistros;

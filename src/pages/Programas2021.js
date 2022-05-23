import React, { useState } from "react";
import dataPaginada from "../data/registrosPaginados.json";

const Programas2021 = () => {
  const registros = require.context("../assets/solicitudesProgramas", true);
  const [searchList, setSearchList] = useState([]);
  const [recordsList, setRecordsList] = useState(
    dataPaginada.reduce((last, total) => [...total, ...last])
  );
  const [dataPages, setDataPages] = useState(dataPaginada.slice(0).reverse());
  const [page, setPage] = useState(0);

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
  const previousPage = () => {
    if (page > 0) {
      setPage((page) => page - 1);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };
  const nextPage = () => {
    if (page < dataPaginada.length - 1) {
      setPage((page) => page + 1);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };

  const goToPage = (page) => {
    if (page < dataPaginada.length) {
      setPage(page);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };

  const Number = (props) => (
    <li className={page === props.index ? "active" : "waves-effect"}>
      <a onClick={() => goToPage(props.index)}>{props.number}</a>
    </li>
  );
  return (
    <div className="bigContainer section">
      <h5
        className="header   blue-grey-text text-darken-3"
        style={{ fontSize: "2rem", fontWeight: "500", marginBottom: "50px" }}
      >
        Listado general de Programas vigentes hasta 2021
      </h5>
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
              <th>Info</th>
            </tr>
          </thead>

          <tbody style={{ marginTop: "150px" }}>
            {searchList.length === 0 &&
              dataPages[page]
                .slice(0)
                .reverse()
                .map((row, index) => (
                  <tr key={row.Cosecutivo}>
                    <td style={{ maxWidth: "180px" }}>{row.NombrePrograma}</td>
                    <td>{row.Clave}</td>
                    <td>{row.CentroUnidadAcademica}</td>
                    <td>{row.Vigencia}</td>
                    <td>{row.DuracionTotal}</td>

                    {/* <td>
                    <span className="new badge green  " data-badge-caption="">
                      Impartiendo
                    </span>
                  </td> */}
                    <td>
                      {row.recursos !== "SinDocumento" && row.recursos && (
                        <a
                          href={registros(`./${row.recursos}`).default}
                          className="waves-effect waves-light btn outlined "
                          target="_blank"
                          rel="noreferrer noopener"
                          style={{ maxWidth: "65px" }}
                        >
                          Ver Contenido
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
            {searchList.length > 0 &&
              searchList.map((row, index) => (
                <tr key={row.Cosecutivo}>
                  <td style={{ maxWidth: "180px" }}>{row.NombrePrograma}</td>
                  <td>{row.Clave}</td>
                  <td>{row.CentroUnidadAcademica}</td>
                  <td>{row.Vigencia}</td>
                  <td>{row.DuracionTotal}</td>
                  <td>
                    {row.recursos !== "SinDocumento" && row.recursos && (
                      <a
                        href={registros(`./${row.recursos}`).default}
                        className="waves-effect waves-light btn outlined "
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ maxWidth: "65px" }}
                      >
                        Ver Contenido
                      </a>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {searchList.length === 0 && (
        <ul
          className="pagination"
          style={{ padding: "20px", textAlign: "center" }}
        >
          <li
            /* className="disabled" */ class="waves-effect"
            onClick={previousPage}
          >
            <a>
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          {dataPaginada.map((pag, index) => (
            <Number number={index + 1} index={index} />
          ))}

          {/* <Number number={1} index={0} />
            <Number number={2} index={1} />
            <Number number={3} index={2} />
            <Number number={4} index={3} />
            <Number number={5} index={4} />
            <Number number={6} index={5} />
            <Number number={7} index={6} />
            <Number number={8} index={7} />
            <Number number={9} index={8} />
            <Number number={10} index={9} />
            <Number number={11} index={10} />
            <Number number={12} index={11} />
            <Number number={13} index={12} />
            <Number number={14} index={13} />
            <Number number={15} index={14} />
            <Number number={16} index={15} />
            <Number number={17} index={16} />
            <Number number={18} index={17} /> */}

          <li
            /* className="disabled" */ class="waves-effect"
            onClick={nextPage}
          >
            <a>
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Programas2021;

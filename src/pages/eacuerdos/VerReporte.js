import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import data from "../../data/registrosTotal.json";
import { PDFDownloadLink, BlobProvider, PDFViewer } from "@react-pdf/renderer";
import ServiciosExtracurricularesRegistrados from "../../components/Documents/ServiciosExtracurricularesRegistrados/ServiciosExtracurricularesRegistrados";

const VerReporte = () => {
  let { formato } = useParams();
  const { search } = useLocation();
  useEffect(() => {
    var searchParams = new URLSearchParams(search);
    console.log("obtener data", formato);
    console.log(search);
    console.log("params", searchParams);
    console.log("params2", searchParams.get("trimestre"));
    console.log("paramsfecha", searchParams.get("fecha"));

  }, []);
  return (
    <div className="container ">
      {data.length > 0 && (
        <>
          {/* <PDFViewer width="100%" height="850px">
            <ServiciosExtracurricularesRegistrados data={data.slice(0, 60)} />
          </PDFViewer> */}
          <BlobProvider
            document={
              <ServiciosExtracurricularesRegistrados data={data.slice(0, 60)} />
            }
          >
            {({ url }) => (
              <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className=" waves-effect waves-light btn yellow darken-4 col s12 m5 l5 xl5 "
                style={{ marginRight: "50px", marginBottom: "3px" }}
              >
                <b>Ver PDF</b>
              </a>
            )}
          </BlobProvider>
          <PDFDownloadLink
            document={
              <ServiciosExtracurricularesRegistrados data={data.slice(0, 60)} />
            }
            fileName="somename.pdf"
            className=" waves-effect waves-light btn yellow darken-4 col s12 m5 l5 xl5 "
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                "Loading document..."
              ) : (
                <>
                  DescargarPDF<i className="material-icons right">send</i>
                </>
              )
            }
          </PDFDownloadLink>
        </>
      )}

      <blockquote>
        <h5 className="light teal-text">Reporte Registros Academicos</h5>
        <p>Trimestre: 4 Año: 2021</p>
      </blockquote>
      <div
        style={{
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
              {/*  <th>Status</th> */}
              <th>Info</th>
            </tr>
          </thead>

          <tbody style={{ marginTop: "150px" }}>
            <tr>
              <td style={{ maxWidth: "165px" }}>2</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>s</td>

              {/* <td>
              <span className="new badge green  " data-badge-caption="">
                Impartiendo
              </span>
            </td> */}
              <td>
                <a
                  className="waves-effect waves-light btn outlined "
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ maxWidth: "65px" }}
                >
                  Ver Contenido
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerReporte;

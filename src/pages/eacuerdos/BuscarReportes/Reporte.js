import React from "react";
import { PDFDownloadLink, BlobProvider, PDFViewer } from "@react-pdf/renderer";
//Reportes
import RegistrosAcademicoss from "../../../components/Documents/ReporteRegistrosAcademicoss/container";
import RegistrosAcademicos from "../../../components/Documents/ReporteRegistrosAcademicosss/RegistrosAcademicos";
import Servicios from "../../../components/Documents/ServiciosExtracurricularesRegistrados/ServiciosExtracurricularesRegistrados";
import EstandaresCompetencias from "../../../components/Documents/ReporteEstandaresCompetencias/container";
import UnidadesMoviles from "../../../components/Documents/UnidadesMoviles/Container";
import EventoIdiomas from "../../../components/Documents/EventoIdiomas/Container";
import OrdenA from "../../../components/Documents/OrdenA/Container";
import IdiomasCelex from "../../../components/Documents/IdiomasCelex/Container";
import EventoDistancia from "../../../components/Documents/EventoDistancia/Container";
import ConcentEventos from "../../../components/Documents/ConcentEventos/Container";
import OfertaPres from "../../../components/Documents/OfertaPres/Container";
import IdiomasTerc from "../../../components/Documents/IdiomasTerc/Container";
import EventoPres from "../../../components/Documents/EventoPres/Container";
import OfertaDis from "../../../components/Documents/OfertaDis/Container"
//data
import registrosTotal from "../../../data/registrosTotal.json";

const reportes = {
  0: {
    id: "0",
    name: "0",
    document: Servicios,
  },
  13: {
    id: "13",
    name: "Con Órden y Acuerd trimestre actual",
    document: OrdenA,
  },
  12: {
    id: "12",
    name: "Prog Ofert_Unid Móviles trimestre actual",
    document: UnidadesMoviles,
  },
  11: {
    id: "11",
    name: "Prog Ofert_Idiomas trimestre actual",
    document: IdiomasTerc,
  },
  10: {
    id: "10",
    name: "Prog Ofert_Idiomas Reg CELEX trimestre actual",
    document: IdiomasCelex,
  },
  9: {
    id: "9",
    name: "Prog Ofert_Distanc trimestre actual",
    document: OfertaDis,
  },
  8: {
    id: "8",
    name: "Prog Ofert_Presenc trimestre actual",
    document: OfertaPres,
  },
  7: {
    id: "7",
    name: "Event Prese Idiom Reg CELEX trimestre actual",
    document: EventoIdiomas,
  },
  6: {
    id: "6",
    name: "Event a Distancia trimestre actual",
    document: EventoDistancia,
  },
  5: {
    id: "5",
    name: "Event Presenciales trimestre actual",
    document: EventoPres,
  },
  4: {
    id: "4",
    name: "Concent Eventos trimestre actual",
    document: ConcentEventos,
  },
  3: {
    id: "3",
    name: "Estandares Compet trimestre actual",
    document: EstandaresCompetencias,
  },
  2: {
    id: "2",
    name: "Reportes Registros Académicos trimestre actual",
    document: RegistrosAcademicoss,
  },
  1: {
    id: "1",
    name: "DVDR_3T_2021",
    document: Servicios,
  },
};
const Reporte = ({ id, data }) => {
  const Report = reportes[id].document;
  return (
    id !== "0" && (
      <div className="row">
        <p>
          Nombre del reporte:&nbsp; &nbsp;
          {reportes[id].name}
        </p>
        <div className="col s12 row" style={{ margin: "35px 0" }}>
          {/* <BlobProvider document={<Report data={data.slice(0, 60)} />}>
            {({ url }) => (
              <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className=" waves-effect waves-light btn yellow darken-4 col s5 m5 l5 xl5 "
              >
                <b>Ver PDF</b>
              </a>
            )}
          </BlobProvider>
          <PDFDownloadLink
            document={<Report data={data.slice(0, 60)} />}
            fileName="somename.pdf"
            className=" waves-effect waves-light btn yellow darken-4 col col s5 m5 l5 xl5"
            style={{
              margin: "0 10px",
              boxSizing: "border-box",
            }}
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
          </PDFDownloadLink> */}
          <PDFViewer width="100%" height="850px" style={{ margin: "25px 0" }}>
            <Report data={data.slice(0, 60)} />
          </PDFViewer>
        </div>
      </div>
    )
  );
};

export default Reporte;

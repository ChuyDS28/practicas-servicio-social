import React, { useState } from "react";
import dataI from "../../data/indicadores.json";
import ChartDrilldown from "./ChartDrilldown";

const createData = (data) =>
  data.map((row) => ({
    name: row.Fecha,
    y: parseInt(row.Total),
    drilldown: row.Fecha,
  }));

const createSeries = (data) =>
  data.map((row) => ({
    name: row.Fecha,
    id: row.Fecha,
    data: createEntries(row),
  }));
const createEntries = (data) =>
  Object.entries(data)
    .filter((element) => element[0] !== "Fecha" && element[0] !== "Total")
    .map((row) => [row[0], parseInt(row[1])]);

const IndicadoresGenerales = () => {
  return (
    <div className="container  ">
      <blockquote>
        <h5 className="light teal-text">Consulta general de Indicadores</h5>
        <p>Aqui puedes consultar los indicadores de los registros</p>
      </blockquote>
      <div className="row">
        <div className="col s12" style={{ border: "1px solid #d3d3d3" }}>
          <ChartDrilldown
            data={createData(dataI.ConstanciasEmitidas)}
            series={createSeries(dataI.ConstanciasEmitidas)}
            title="Constancias Emitidas"
            subtitle="Reporte general de constancias emitidas desde el 2015"
          />
        </div>
        <div className="col s12" style={{ border: "1px solid #d3d3d3" }}>
          <ChartDrilldown
            data={createData(dataI.EventosAcademicosImpartidos)}
            series={createSeries(dataI.EventosAcademicosImpartidos)}
            title="Eventos Academicos Impartidos"
            subtitle="Reporte general de EventosAcademicosImpartidos desde el 2015"
          />
        </div>
        <div className="col s6" style={{ border: "1px solid #d3d3d3" }}>
          <ChartDrilldown
            data={createData(dataI.RegistrosAcademicosObtenidos)}
            series={createSeries(dataI.RegistrosAcademicosObtenidos)}
            title="Registros Academicos Obtenidos"
            subtitle="Reporte general de Registros Academicos Obtenidos desde el 2015"
          />
        </div>
        <div className="col s6" style={{ border: "1px solid #d3d3d3" }}>
          <ChartDrilldown
            data={createData(dataI.ConveniosGestionados)}
            series={createSeries(dataI.ConveniosGestionados)}
            title="Convenios Gestionados"
            subtitle="Reporte general de Convenios Gestionados desde el 2017"
          />
        </div>
      </div>
    </div>
  );
};

export default IndicadoresGenerales;

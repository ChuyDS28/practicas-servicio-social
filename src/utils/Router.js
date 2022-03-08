import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "../pages/Error404";
import NavbarHome from "../components/NavbarHome";
import Home from "../pages/Home";
import HistorialRegistros from "../pages/HistorialRegistros";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetalleRegistroS from "../components/DetalleRegistroS";
import ScrollToTop from "./ScrollToTop";
import CentrosDVDR from "../pages/CentrosDVDR/CentrosDVDR";
import UserTypeSignup from "../pages/UserTypeSignup";
import IndicadoresGeneral from "../pages/IndicadoresGenerales/IndicadoresGenerales";
import NavBar from "../components/NavBar";

//subdirector
import GenerarSolicitud from "../pages/subdirector/GenerarSolicitud/GenerarSolicitud";
import ListadoRegistros from "../pages/subdirector/ListadoRegistros/ListadoRegistros";
import RegistroDetalle from "../pages/subdirector/RegistroDetalle/RegistroDetalle";
import MenuUser from "../pages/subdirector/MenuUser";
import ListadoInstructores from "../pages/subdirector/ListadoInstructores/ListadoInstructores";
//Revisor
import MenuRevisor from "../pages/revisor/MenuRevisor";
import ListadoRegistrosP from "../pages/revisor/ListadoRegistrosP/ListadoRegistrosP";
import ListadoRegistrosGeneral from "../pages/revisor/ListadoRegistrosGeneral";
import RevisarRegistro from "../pages/revisor/RevisarRegistro";
import RevisarSolicitud from "../pages/revisor/RevisarSolicitud";
//Admin
import MenuAdmin from "../pages/admin/MenuAdmin";
import AdministrarSolicitudes from "../pages/admin/AdministrarSolicitudes/AdministrarSolicitudes";
import AdministrarUsuarios from "../pages/admin/AdministrarUsuarios/AdministrarUsuarios";
import ListadoCatalogos from "../pages/admin/ListadoCatalogos";
import CRUDInstructores from "../pages/admin/CRUDInstructores";
import CrudEscuelas from "../pages/admin/CRUDEscuelas/CrudEscuelas";
//Director
import MenuDirector from "../pages/director/MenuDirector";
import ListadoInstructoresDirector from "../pages/director/ListadoInstructoresDirector";
import DirectorListadoGeneral from "../pages/director/DirectorListadoGeneral";
//Reporteador
import MenuEacuerdos from "../pages/eacuerdos/MenuEacuerdos";
import Indicadores from "../pages/eacuerdos/Indicadores";
import Tablas from "../pages/eacuerdos/Tablas";
import Reportes from "../pages/eacuerdos/Reportes/Reportes";
import VerReporte from "../pages/eacuerdos/VerReporte";
import ListadoGrupos from "../pages/subdirector/Grupos/ListadoGrupos";
import BuscarReportes from "../pages/eacuerdos/BuscarReportes/BuscarReportes";
import ListadoProgramas from "../pages/ListadoProgramas";
import Programas2021 from "../pages/Programas2021";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<NavbarHome />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signupUser" element={<UserTypeSignup />} />
          <Route path="signup/:userType" element={<Signup />} />
          <Route path="historialRegistros" element={<HistorialRegistros />} />
          <Route path="indicadoresGeneral" element={<IndicadoresGeneral />} />
          <Route
            path="historialRegistrosVigentes"
            element={<HistorialRegistros />}
          />
          <Route path="centros" element={<CentrosDVDR />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/*  //SUBDIRECTOR */}
        <Route
          exact
          path="/subdirector"
          element={<NavBar account={"subdirector"} />}
        >
          <Route index element={<MenuUser />} />
          <Route path="menu" element={<MenuUser />} />
          <Route path="programas" element={<ListadoRegistros />} />
          <Route path="programasGeneral" element={<ListadoProgramas />} />
          <Route
            path="programasGeneral/programas2021"
            element={<Programas2021 />}
          />
          <Route path="historialRegistros" element={<HistorialRegistros />} />
          <Route path="programas/:programaId" element={<RegistroDetalle />} />
          <Route
            path="programas/:programaId/generarSolicitud"
            element={<GenerarSolicitud />}
          />
          <Route
            path="programas/:programaId/grupos"
            element={<ListadoGrupos />}
          />
          <Route
            path="historialRegistrosVigentes"
            element={<HistorialRegistros />}
          />
          <Route path="ListadoInstructores" element={<ListadoInstructores />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/*  //REVISOR */}
        <Route exact path="/revisor" element={<NavBar account={"revisor"} />}>
          <Route index element={<MenuRevisor />} />
          <Route path="menu" element={<MenuRevisor />} />
          <Route path="listadoRegistros" element={<ListadoRegistrosP />} />
          <Route
            path="listadoRegistrosGeneral"
            element={<ListadoRegistrosGeneral />}
          />
          <Route path="revisarRegistro" element={<RevisarRegistro />} />
          <Route
            path="revisarRegistro/solicitud"
            element={<RevisarSolicitud />}
          />
          <Route path="ListadoInstructores" element={<ListadoInstructores />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/*  //ADMIN */}
        <Route exact path="/admin" element={<NavBar account={"admin"} />}>
          <Route index element={<MenuAdmin />} />
          <Route path="menu" element={<MenuAdmin />} />
          <Route path="usuarios" element={<AdministrarUsuarios />} />
          <Route path="solicitudes" element={<AdministrarSolicitudes />} />
          <Route path="detallesRegistro" element={<DetalleRegistroS />} />
          <Route path="listadoCatalogos" element={<ListadoCatalogos />} />
          <Route path="crudInstructores" element={<CRUDInstructores />} />
          <Route path="crudEscuelas" element={<CrudEscuelas />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/*  //DIRECTOR */}
        <Route exact path="/director" element={<NavBar account={"director"} />}>
          <Route index element={<MenuDirector />} />
          <Route path="menu" element={<MenuDirector />} />
          <Route
            path="listadoRegistrosGeneral"
            element={<DirectorListadoGeneral />}
          />
          <Route path="detallesRegistro" element={<DetalleRegistroS />} />
          <Route
            path="listadoInstructores"
            element={<ListadoInstructoresDirector />}
          />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/*  //EACUERDOS */}
        <Route
          exact
          path="/eacuerdos"
          element={<NavBar account={"eacuerdos"} />}
        >
          <Route index element={<MenuEacuerdos />} />
          <Route path="menu" element={<MenuEacuerdos />} />
          <Route path="buscarReporte" element={<BuscarReportes />} />
          <Route path="reportes/:formato" element={<VerReporte />} />
          <Route path="tablas" element={<Tablas />} />
          <Route path="indicadores" element={<Indicadores />} />

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

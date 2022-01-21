import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error404 from "../pages/Error404";
import NavbarHome from "../pages/NavbarHome";
import Home from "../pages/Home";
import HistorialRegistros from "../pages/HistorialRegistros";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetalleRegistroS from "../components/DetalleRegistroS";
import ScrollToTop from "./ScrollToTop";
import CentrosDVDR from "../pages/CentrosDVDR/CentrosDVDR";
import UserTypeSignup from "../pages/UserTypeSignup";
import IndicadoresGeneral from "../pages/IndicadoresGenerales/IndicadoresGenerales";

//subdirector
import NavbarUser from "../pages/subdirector/NavbarUser";
import GenerarSolicitud from "../pages/subdirector/GenerarSolicitud/GenerarSolicitud";
import ListadoRegistros from "../pages/subdirector/ListadoRegistros/ListadoRegistros";
import RegistroDetalle from "../pages/subdirector/RegistroDetalle/RegistroDetalle";
import MenuUser from "../pages/subdirector/MenuUser";
import ListadoInstructores from "../pages/subdirector/ListadoInstructores/ListadoInstructores";
//Revisor
import NavbarRevisor from "../pages/revisor/NavbarRevisor";
import MenuRevisor from "../pages/revisor/MenuRevisor";
import ListadoRegistrosP from "../pages/revisor/ListadoRegistrosP/ListadoRegistrosP";
import ListadoRegistrosGeneral from "../pages/revisor/ListadoRegistrosGeneral";
import RevisarRegistro from "../pages/revisor/RevisarRegistro";
import RevisarSolicitud from "../pages/revisor/RevisarSolicitud";
//Admin
import MenuAdmin from "../pages/admin/MenuAdmin";
import NavbarAdmin from "../pages/admin/NavbarAdmin";
import AdministrarSolicitudes from "../pages/admin/AdministrarSolicitudes/AdministrarSolicitudes";
import AdministrarUsuarios from "../pages/admin/AdministrarUsuarios/AdministrarUsuarios";
import ListadoCatalogos from "../pages/admin/ListadoCatalogos";
import CRUDInstructores from "../pages/admin/CRUDInstructores";
import CrudEscuelas from "../pages/admin/CRUDEscuelas/CrudEscuelas";
//Director
import MenuDirector from "../pages/director/MenuDirector";
import NavbarDirector from "../pages/director/NavbarDirector";
import ListadoInstructoresDirector from "../pages/director/ListadoInstructoresDirector";
import DirectorListadoGeneral from "../pages/director/DirectorListadoGeneral";
//Reporteador
import MenuEacuerdos from "../pages/eacuerdos/MenuEacuerdos";
import Indicadores from "../pages/eacuerdos/Indicadores";
import Tablas from "../pages/eacuerdos/Tablas";
import Reportes from "../pages/eacuerdos/Reportes/Reportes";
import NavbarEacuerdos from "../pages/eacuerdos/NavbarEacuerdos";
import VerReporte from "../pages/eacuerdos/VerReporte";
import ListadoGrupos from "../pages/subdirector/Grupos/ListadoGrupos";
import BuscarReportes from "../pages/eacuerdos/BuscarReportes/BuscarReportes";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <NavbarHome />
          <Home />
        </Route>
        <Route exact path="/login">
          <NavbarHome />
          <Login />
        </Route>
        <Route exact path="/signupUser">
          <NavbarHome />
          <UserTypeSignup />
        </Route>
        <Route exact path="/signup/:userType">
          <NavbarHome />
          <Signup />
        </Route>
        <Route exact path="/historialRegistros">
          <NavbarHome />
          <HistorialRegistros />
        </Route>
        <Route exact path="/indicadoresGeneral">
          <NavbarHome />
          <IndicadoresGeneral />
        </Route>

        <Route exact path="/historialRegistrosVigentes">
          <NavbarHome />
          <HistorialRegistros />
        </Route>
        <Route exact path="/centros">
          <NavbarHome />
          <CentrosDVDR />
        </Route>
        <Route
          path="/subdirector"
          render={({ match: { url } }) => (
            <>
              <NavbarUser />
              <Route path={`${url}/menu`} component={MenuUser} exact />
              <Route
                path={`${url}/programas/:programaId/generarSolicitud`}
                component={GenerarSolicitud}
                exact
              />
              <Route
                path={`${url}/programas`}
                component={ListadoRegistros}
                exact
              />
              <Route
                path={`${url}/programas/:programaId`}
                component={RegistroDetalle}
                exact
              />
              <Route
                path={`${url}/programas/:programaId/grupos`}
                component={ListadoGrupos}
                exact
              />
              <Route
                path={`${url}/ListadoInstructores`}
                component={ListadoInstructores}
                exact
              />
            </>
          )}
        />
        <Route
          path="/revisor"
          render={({ match: { url } }) => (
            <>
              <NavbarRevisor />
              <Route path={`${url}/menu`} component={MenuRevisor} exact />
              <Route
                path={`${url}/listadoRegistros`}
                component={ListadoRegistrosP}
                exact
              />
              <Route
                path={`${url}/listadoRegistrosGeneral`}
                component={ListadoRegistrosGeneral}
                exact
              />
              <Route
                path={`${url}/revisarRegistro`}
                component={RevisarRegistro}
                exact
              />
              <Route
                path={`${url}/revisarRegistro/solicitud`}
                component={RevisarSolicitud}
                exact
              />
            </>
          )}
        />
        <Route
          path="/admin"
          render={({ match: { url } }) => (
            <>
              <NavbarAdmin />

              <Route path={`${url}/menu`} component={MenuAdmin} exact />
              <Route
                path={`${url}/usuarios`}
                component={AdministrarUsuarios}
                exact
              />
              <Route
                path={`${url}/solicitudes`}
                component={AdministrarSolicitudes}
                exact
              />
              <Route
                path={`${url}/detallesRegistro`}
                component={DetalleRegistroS}
                exact
              />
              <Route
                path={`${url}/listadoCatalogos`}
                component={ListadoCatalogos}
                exact
              />
              <Route
                path={`${url}/crudInstructores`}
                component={CRUDInstructores}
                exact
              />
              <Route
                path={`${url}/crudEscuelas`}
                component={CrudEscuelas}
                exact
              />
            </>
          )}
        />
        <Route
          path="/director"
          render={({ match: { url } }) => (
            <>
              <NavbarDirector />

              <Route path={`${url}/menu`} component={MenuDirector} exact />
              <Route
                path={`${url}/listadoRegistrosGeneral`}
                component={DirectorListadoGeneral}
                exact
              />
              <Route
                path={`${url}/detallesRegistro`}
                component={DetalleRegistroS}
                exact
              />
              <Route
                path={`${url}/listadoInstructores`}
                component={ListadoInstructoresDirector}
                exact
              />
            </>
          )}
        />
        <Route
          path="/eacuerdos"
          render={({ match: { url } }) => (
            <>
              <NavbarEacuerdos />
              <Route path={`${url}/menu`} component={MenuEacuerdos} exact />
              <Route path={`${url}/reportes`} component={Reportes} exact />
              <Route
                path={`${url}/buscarReporte`}
                component={BuscarReportes}
                exact
              />
              <Route
                path={`${url}/reportes/:formato`}
                component={VerReporte}
                exact
              />

              <Route path={`${url}/tablas`} component={Tablas} exact />
              <Route
                path={`${url}/indicadores`}
                component={Indicadores}
                exact
              />
            </>
          )}
        />
        <Route>
          <NavbarHome />
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;

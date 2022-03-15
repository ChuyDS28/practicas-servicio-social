import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import { registrarUsuario } from "../../../api/services/registro";
import { useNavigate, useParams } from "react-router-dom";
import { registrarRevisor } from "../../../api/services/registro";

const AgregarUsuario = () => {

  useEffect(() => {
    let elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems, {responsiveThreshold: "100%"});
  });

  const SignupForm = () => {
    let navigate = useNavigate();
    const [unidades, setUnidades] = useState([]);
    const [tipoUsuario, setTipoUsuario] = useState("DIRECTOR");
    const [formValues, setFormValues] = useState({
      username: "",
      password: "",
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      numeroDeEmpleado: "",
      correoInstitucional: "",
      correoInstitucional: "",
      idUnidadAcademica: "",
      cargo: "",
      telefono: "",
      extension: "",
      activo: "true",
      correoPersonal: "",
    });

    useEffect(() => {
      getUnidades();
    }, []);

    async function getUnidades() {
      try {
        const dataU = await obtenerUnidades(0);
        setUnidades(dataU.data);
        console.log(dataU);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    }

    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };
    const handleSubmit = async () => {
      const data = {
        username: formValues.username,
        password: formValues.password,
        nombre: formValues.nombre,
        primerApellido: formValues.primerApellido,
        segundoApellido: formValues.segundoApellido,
        numeroDeEmpleado: formValues.numeroDeEmpleado,
        correoInstitucional: formValues.correoInstitucional,
        idUnidadAcademica: formValues.idUnidadAcademica,
        cargo: formValues.cargo,
        telefono: formValues.telefono,
        extension: formValues.extension,
        rol: tipoUsuario,
      };

      try {
        const response = await registrarUsuario(data);
        M.toast({
          html: "Usuario registrado espere a que activen su cuenta",
          classes: "green",
        });
        console.log(response);
        navigate("/admin/usuarios");
      } catch (error) {
        console.log(error);
        console.log(error.response);
        M.toast({ html: "Error al registrar", classes: "red" });
      }
    };

    const handleSubmitRev = async () => {
      console.log("revisor");
      const data = {
        username: formValues.username,
        password: formValues.password,
        nombre: formValues.nombre,
        primerApellido: formValues.primerApellido,
        segundoApellido: formValues.segundoApellido,
        numeroDeEmpleado: formValues.numeroDeEmpleado,
        correoInstitucional: formValues.correoInstitucional,
        correoPersonal: formValues.correoInstitucional,
        idUnidadAcademica: formValues.idUnidadAcademica,
        rol: "REVISOR",
        activo: true,
      };

      try {
        const responserev = await registrarRevisor(data);
        M.toast({
          html: "Usuario registrado espere a que activen su cuenta",
          classes: "green",
        });
        console.log(responserev);
        navigate("/admin/usuarios");
      } catch (error) {
        console.log(error);
        console.log(error.responserev);
        M.toast({ html: "Error al registrar", classes: "red" });
      }
    };

    const handleUserSubmit = (event) => {
      (tipoUsuario === "DIRECTOR" || tipoUsuario === "SUBDIRECTOR") &&
        handleSubmit();
      tipoUsuario === "REVISOR" && handleSubmitRev();

      event.preventDefault();
      console.log(formValues);
    };

    return (
      <div className="modal-content">
        <div className="teal white-text section center">
          <h5 className="center ">Agregar nuevo Usuario </h5>
        </div>
        <div class="row">
          <div class="col s12">
            <ul class="tabs s4" >
              <li
               
                class="tab col s4 "
                onClick={() => {
                  setTipoUsuario("DIRECTOR");
                  setFormValues({
                    username: "",
                    password: "",
                    nombre: "",
                    primerApellido: "",
                    segundoApellido: "",
                    numeroDeEmpleado: "",
                    correoInstitucional: "",
                    correoInstitucional: "",
                    idUnidadAcademica: "",
                    cargo: "",
                    telefono: "",
                    extension: "",
                    activo: "true",
                    correoPersonal: "",
                  });
                }}
              >
                <a href="#director">
                  Director
                </a>
              </li>
            
              
              <li
                class="tab col s4"
                onClick={() => {
                  setTipoUsuario("SUBDIRECTOR");
                  setFormValues({
                    username: "",
                    password: "",
                    nombre: "",
                    primerApellido: "",
                    segundoApellido: "",
                    numeroDeEmpleado: "",
                    correoInstitucional: "",
                    correoInstitucional: "",
                    idUnidadAcademica: "",
                    cargo: "",
                    telefono: "",
                    extension: "",
                    activo: "true",
                    correoPersonal: "",
                  });
                }}
              >
                <a href="#subdirector">Subdirector</a>
              </li>

              <li
                class="tab col s4"
                style={{ maxWidth: "100px" }}
                onClick={() => {
                  setTipoUsuario("REVISOR");
                  setFormValues({
                    username: "",
                    password: "",
                    nombre: "",
                    primerApellido: "",
                    segundoApellido: "",
                    numeroDeEmpleado: "",
                    correoInstitucional: "",
                    correoInstitucional: "",
                    idUnidadAcademica: "",
                    cargo: "",
                    telefono: "",
                    extension: "",
                    activo: "true",
                    correoPersonal: "",
                  });
                }}
              >
                <a  href="#revisor">Revisor</a>
              </li>
              </ul>
            
          </div>
          <form onSubmit={handleUserSubmit}>
            <div className="col s4 input-field">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                required
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="col s4 input-field">
              <label htmlFor="primerApellido">Apellido paterno</label>
              <input
                type="text"
                required
                name="primerApellido"
                value={formValues.primerApellido}
                onChange={handleChange}
              />
            </div>
            <div className="col s4 input-field">
              <label htmlFor="segundoApellido">Apellido materno</label>
              <input
                type="text"
                required
                name="segundoApellido"
                value={formValues.segundoApellido}
                onChange={handleChange}
              />
            </div>
            <div className="col s6 input-field">
              <label htmlFor="correoInstitucional">Correo electrónico</label>
              <input
                type="email"
                required
                name="correoInstitucional"
                value={formValues.correoInstitucional}
                onChange={handleChange}
              />
            </div>

            {tipoUsuario === "REVISOR" && (
              <div className="col s6 input-field">
                <label htmlFor="correopersonal">CORREO PERSONAL</label>
                <input
                  type="text"
                  required
                  name="correoPersonal"
                  value={formValues.correoPersonal}
                  onChange={handleChange}
                  id="correopersonal"
                />
              </div>
            )}

            <div className="col s6 input-field">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                required
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <div className="col s6 input-field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                required
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <div className="col s6 input-field">
              <label htmlFor="numeroDeEmpleado">Número de empleado</label>
              <input
                type="number"
                min="0"
                required
                name="numeroDeEmpleado"
                value={formValues.numeroDeEmpleado}
                onChange={handleChange}
              />
            </div>
            <div className="col s6">
              <label>Unidad Academica</label>
              <select
                className="browser-default"
                required
                name="idUnidadAcademica"
                value={formValues.idUnidadAcademica}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {unidades.map((centro, index) => (
                  <option key={index} value={centro.id}>
                    {centro.nombre}
                  </option>
                ))}
              </select>
            </div>

            {(tipoUsuario === "SUBDIRECTOR") && (
              <div>
                <div className="col  s6 input-field">
                  <label htmlFor="cargo">Cargo</label>
                  <input
                    type="text"
                    required
                    name="cargo"
                    value={formValues.cargo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col s6 input-field">
                  <label htmlFor="extension">Extensión</label>
                  <input
                    type="text"
                    required
                    name="extension"
                    value={formValues.extension}
                    onChange={handleChange}
                  />
                </div>
                <div className="col s6 input-field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    required
                    name="telefono"
                    value={formValues.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <div className="col s8">
              <button type="submit" className="waves-effect waves-light btn   ">
                Registrar {tipoUsuario}
                <i className="material-icons right">done</i>
              </button>
            </div>
          </form>
        </div>

        <button className=" modal-close waves-effect waves-green btn-flat right">
          Cerrar
        </button>
        <br />
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col s12 m12">
        <SignupForm />
      </div>
    </div>
  );
};

export default AgregarUsuario;

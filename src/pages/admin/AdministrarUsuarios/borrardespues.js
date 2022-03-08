import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import { registrarUsuario } from "../../../api/services/registro";
import { useNavigate, useParams } from "react-router-dom";
import { registrarRevisor } from "../../../api/services/registro";

const AgregarUsuario = () => {
  let navigate = useNavigate();
  let { userType } = useParams();
  const tabsRef = useRef(null);

  useEffect(() => {
    let elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems, { duration: 30 });
  });

  const SignupForm = () => {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [unidades, setUnidades] = useState([]);
    const [error, setError] = useState({ error: false, message: "" });
    const [formValues, setFormValues] = useState({
      username: "",
      password: "",
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      rol: "",
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
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(formValues);
      try {
        const response = await registrarUsuario(formValues);
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

    const handleSubmitRev = async (event) => {
      event.preventDefault();
      console.log(formValues);
      try {
        const responserev = await registrarRevisor(formValues);
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

    return (
      <div className="modal-content">
        <div className="teal white-text section center">
          <h5 className="center ">Agregar nuevo Usuario</h5>
        </div>
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s4">
                <a class="active" href="#director">
                  Director
                </a>
              </li>
              <li class="tab col s4">
                <a href="#subdirector">Subdirector</a>
              </li>
              <li class="tab col s4">
                <a href="#revisor">Revisor</a>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="row">
            <div id="director" class="col s12 ">
              <div className="col  s4">
                <label>Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s4">
                <label>Apellido paterno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido paterno"
                  name="primerApellido"
                  value={formValues.primerApellido}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s4">
                <label>Apellido materno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido materno"
                  name="segundoApellido"
                  value={formValues.segundoApellido}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="Ingresa tu Correo electrónico"
                  name="correoInstitucional"
                  value={formValues.correoInstitucional}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Nombre de Usuario</label>
                <input
                  required
                  placeholder="Ingresa tu nombre de usuario"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Contraseña</label>
                <input
                  type="password"
                  required
                  placeholder="Crear una contraseña"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Número de empleado</label>
                <input
                  type="number"
                  min="0"
                  required
                  placeholder="No. empleado"
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

              <div className="col  s6">
                <label>Cargo</label>
                <input
                  type="text"
                  required
                  placeholder="Cargo"
                  name="cargo"
                  value={formValues.cargo}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s6">
                <label>Extensión</label>
                <input
                  type="text"
                  required
                  placeholder="Extención"
                  name="extension"
                  value={formValues.extension}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s6">
                <label>Teléfono</label>
                <input
                  type="tel"
                  required
                  placeholder="Telefono"
                  name="telefono"
                  value={formValues.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="col  s12">
                <label>ROL</label>
                <input
                  type="text"
                  required
                  placeholder="COLOCA EL ROL EN MAYUSCULAS"
                  name="rol"
                  value={formValues.rol}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="waves-effect waves-light btn   "
                >
                  Registrar Director
                  <i className="material-icons right">done</i>
                </button>
              </div>
            </div>
          </form>

          <form onSubmit={handleSubmit} className="row">
            <div id="subdirector" class="col s12 ">
              <div className="col  s4">
                <label>Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s4">
                <label>Apellido paterno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido paterno"
                  name="primerApellido"
                  value={formValues.primerApellido}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s4">
                <label>Apellido materno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido materno"
                  name="segundoApellido"
                  value={formValues.segundoApellido}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="Ingresa tu Correo electrónico"
                  name="correoInstitucional"
                  value={formValues.correoInstitucional}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Nombre de Usuario</label>
                <input
                  required
                  placeholder="Ingresa tu nombre de usuario"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Contraseña</label>
                <input
                  type="password"
                  required
                  placeholder="Crear una contraseña"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Número de empleado</label>
                <input
                  type="number"
                  min="0"
                  required
                  placeholder="No. empleado"
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

              <div className="col  s6">
                <label>Cargo</label>
                <input
                  type="text"
                  required
                  placeholder="Cargo"
                  name="cargo"
                  value={formValues.cargo}
                  onChange={handleChange}
                />
              </div>



              <div className="col  s6">
                <label>Teléfono</label>
                <input
                  type="tel"
                  required
                  placeholder="Telefono"
                  name="telefono"
                  value={formValues.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s12">
                <label>ROL</label>
                <input
                  type="text"
                  required
                  placeholder="COLOCA EL ROL EN MAYUSCULAS"
                  name="rol"
                  value={formValues.rol}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="waves-effect waves-light btn   "
                >
                  Registrar Subdirector
                  <i className="material-icons right">done</i>
                </button>
              </div>
            </div>
          </form>

          <form onSubmit={handleSubmitRev} className="row">
            <div id="revisor" class="col s12 ">
              <div className="col  s4">
                <label>Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s4">
                <label>Apellido paterno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido paterno"
                  name="primerApellido"
                  value={formValues.primerApellido}
                  onChange={handleChange}
                />
              </div>

              <div className="col  s4">
                <label>Apellido materno</label>
                <input
                  type="text"
                  required
                  placeholder="Apellido materno"
                  name="segundoApellido"
                  value={formValues.segundoApellido}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  required
                  placeholder="Ingresa tu Correo electrónico"
                  name="correoInstitucional"
                  value={formValues.correoInstitucional}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Nombre de Usuario</label>
                <input
                  required
                  placeholder="Ingresa tu nombre de usuario"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Contraseña</label>
                <input
                  type="password"
                  required
                  placeholder="Crear una contraseña"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>

              <div className="col s6">
                <label>Número de empleado</label>
                <input
                  type="number"
                  min="0"
                  required
                  placeholder="No. empleado"
                  name="numeroDeEmpleado"
                  value={formValues.numeroDeEmpleado}
                  onChange={handleChange}
                />
              </div>

              <div className="col s12">
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
              <div className="col  s12">
                <label>ROL</label>
                <input
                  type="text"
                  required
                  placeholder="COLOCA EL ROL EN MAYUSCULAS"
                  name="rol"
                  value={formValues.rol}
                  onChange={handleChange}
                />
              </div>

              <div className="col s12 input-field">
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

              <div>
                <button
                  type="submit"
                  className="waves-effect waves-light btn   "
                >
                  Registrar Revisor
                  <i className="material-icons right">done</i>
                </button>
              </div>
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
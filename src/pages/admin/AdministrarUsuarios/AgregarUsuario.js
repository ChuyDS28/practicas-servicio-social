<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
=======
import React, { useEffect, useRef} from "react";
>>>>>>> 772afc679ac8bd1f5a20ee6ef4e38b73d9a06fb1
import M from "materialize-css/dist/js/materialize.min.js";

const AgregarUsuario = () => {
<<<<<<< HEAD
  let navigate = useNavigate();
  let { userType } = useParams();
=======

>>>>>>> 772afc679ac8bd1f5a20ee6ef4e38b73d9a06fb1
  const tabsRef = useRef(null);

  useEffect(() => {
<<<<<<< HEAD
    let elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems, { duration: 30 });
  });

  const SignupForm = () => {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [unidades, setUnidades] = useState([]);
    const [error, setError] = useState({ error: false, message: "" });
    const [formValues, setFormValues] = useState({
      rol: "",
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      correoInstitucional: "",
      confirmarCorreo: "",
      username: "",
      password: "",
      Cpassword: "",
      numeroDeEmpleado: "",
      idUnidadAcademica: "",
      cargo: "",
      extension: "",
      telefono: "",
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
      if (formValues.password !== formValues.Cpassword) {
        M.toast({ html: "Contraseñas diferentes", classes: "red" });

        return;
      }
      if (formValues.correoInstitucional !== formValues.confirmarCorreo) {
        M.toast({ html: "Correos diferentes", classes: "red" });
        return;
      }
      try {
        const response = await registrarUsuario(formValues);
        M.toast({
          html: "Usuario registrado espere a que activen su cuenta",
          classes: "green",
        });
        console.log(response);
        navigate("/login");
      } catch (error) {
        console.log(error);
        console.log(error.response);
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
                  <a href="#director">Director</a>
                </li>
                <li class="tab col s4">
                  <a class="active" href="#subdirector">
                    Subdirector
                  </a>
                </li>
                <li class="tab col s4">
                  <a class="active" href="#revisor">
                    Revisor
                  </a>
                </li>
              </ul>
            </div>


=======
    
    let elems = document.querySelectorAll(".tabs", ".select");
    M.Tabs.init(elems, {duration: 30} );
   
  });

  return (
    <div className="modal-content">
      <div className="teal white-text section center">
        <h5 className="center ">Agregar nuevo Usuario</h5>
      </div>
      <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s6">
              <a href="#director">Director</a>
            </li>
            <li class="tab col s6">
              <a class="active" href="#subdirector">
                Subdirector
              </a>
            </li>
          </ul>
        </div>
        
        <div id="director" class="col s12 ">
      
            <div class="row">
              <form class="col s12">
                <div class="row">
>>>>>>> 772afc679ac8bd1f5a20ee6ef4e38b73d9a06fb1

            <div id="director" class="col s12 ">
              <div class="row">
                <form  class="col s12">
                  <div class="row">
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        id="nombre"
                      />
                      <label for="nombre">Nombre:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio paterno"
                        id="apellido1"
                      />
                      <label for="apellido1">Apellido Paterno:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio materno"
                        id="apellido2"
                      />
                      <label for="apellido2">Apellido Materno:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        id="correo"
                      />
                      <label for="correo">Correo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        id="usuario"
                      />
                      <label for="usuario">Usuario:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Crea una contraseña"
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu No. de empleado"
                        id="numemp"
                      />
                      <label for="numemp">Numero de Empleado:</label>
                    </div>
                    <div className="col s12 l6">
            <label  >
              Unidad Academica
            </label>
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
                    <div class="input-field col s6">
                      <input type="text" placeholder="Cargo" id="Cargo" />
                      <label for="Cargo">Cargo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Extencion" id="Extencion" />
                      <label for="Extencion">Extencion:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Telefono" id="Telefono" />
                      <label for="Telefono">Telefono:</label>
                    </div>

                    <button
                      type="submit"
                      className="waves-effect waves-light btn   "
                    >
                      Registrar Director
                      <i className="material-icons right">done</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
<<<<<<< HEAD
            <div id="subdirector" class="col s12 ">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        id="nombre"
                      />
                      <label for="nombre">Nombre:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio paterno"
                        id="apellido1"
                      />
                      <label for="apellido1">Apellido Paterno:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio materno"
                        id="apellido2"
                      />
                      <label for="apellido2">Apellido Materno:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        id="correo"
                      />
                      <label for="correo">Correo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        id="usuario"
                      />
                      <label for="usuario">Usuario:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Crea una contraseña"
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu No. de empleado"
                        id="numemp"
                      />
                      <label for="numemp">Numero de Empleado:</label>
                    </div>
                    <div className="col s12 l6">
            <label  >
              Unidad Academica
            </label>
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
                    <div class="input-field col s6">
                      <input type="text" placeholder="Cargo" id="Cargo" />
                      <label for="Cargo">Cargo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Extencion" id="Extencion" />
                      <label for="Extencion">Extencion:</label>
                    </div>
                    <div class="input-field col s6">
                      <input type="text" placeholder="Telefono" id="Telefono" />
                      <label for="Telefono">Telefono:</label>
                    </div>
=======
        </div>
        <div id="subdirector" class="col s12 "> 
        
        <div class="row">
              <form class="col s12">
                <div class="row">

                <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu nombre" id="nombre"/>
                  <label for="nombre">Nombre:</label> 
               </div>
               <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu apelldio paterno" id="apellido1"/>
                  <label for="apellido1">Apellido Paterno:</label> 
               </div>
               <div class="input-field col s4">
                 <input type="text" placeholder="Ingresa tu apelldio materno" id="apellido2"/>
                  <label for="apellido2">Apellido Materno:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu correo electronico" id="correo"/>
                  <label for="correo">Correo:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu nombre de usuario" id="usuario"/>
                  <label for="usuario">Usuario:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Crea una contraseña" id="contraseña"/>
                  <label for="contraseña">Contraseña:</label> 
               </div>
               <div class="input-field col s6">
                 <input type="text" placeholder="Ingresa tu No. de empleado" id="numemp"/>
                  <label for="numemp">Numero de Empleado:</label> 
               </div>
               
               
               
               
               
               <div class="input-field col s6">
                 <selec>
                 <option value="" disabled selected>Choose your option</option>
                 <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                 </selec>
                  <label for="unidad">Unidad academica:</label> 
               </div>

>>>>>>> 772afc679ac8bd1f5a20ee6ef4e38b73d9a06fb1

                    <button
                      type="submit"
                      className="waves-effect waves-light btn   "
                    >
                      Registrar Subdirector
                      <i className="material-icons right">done</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div id="revisor" class="col s12 ">
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        id="nombre"
                      />
                      <label for="nombre">Nombre:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio paterno"
                        id="apellido1"
                      />
                      <label for="apellido1">Apellido Paterno:</label>
                    </div>
                    <div class="input-field col s4">
                      <input
                        type="text"
                        placeholder="Ingresa tu apelldio materno"
                        id="apellido2"
                      />
                      <label for="apellido2">Apellido Materno:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        id="correo"
                      />
                      <label for="correo">Correo:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        id="usuario"
                      />
                      <label for="usuario">Usuario:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Crea una contraseña"
                        id="contraseña"
                      />
                      <label for="contraseña">Contraseña:</label>
                    </div>
                    <div class="input-field col s6">
                      <input
                        type="text"
                        placeholder="Ingresa tu No. de empleado"
                        id="numemp"
                      />
                      <label for="numemp">Numero de Empleado:</label>
                    </div>
                    <div className="col s12 l12">
            <label  >
              Unidad Academica
            </label>
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
                </form>
              </div>
            </div>
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

      <div className="col s12 m12" >
        <SignupForm />
      </div>
<<<<<<< HEAD
=======
      <button className=" modal-close waves-effect waves-green btn-flat right">
        Cerrar
      </button>
      <br />
>>>>>>> 772afc679ac8bd1f5a20ee6ef4e38b73d9a06fb1
    </div>
  );
};

export default AgregarUsuario;

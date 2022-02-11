import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import img222 from "../assets/images/img222.jpg";
import cecyt2 from "../assets/images/cecyt2.jpg";
import dos from "../assets/images/dos.jpg";
import imgt5 from "../assets/images/imgt5.jpg";
import imgt6 from "../assets/images/imgt6.jpg";
import imag from "../assets/images/imag.jpg";
import cancha from "../assets/images/cancha.jpg";
import { obtenerUnidades } from "../api/services/unidadAcademica";
import { registrarUsuario } from "../api/services/registro";

const style = {
  img: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
  min: {
    background: "#2F4A92",
    minHeight: "calc(100vh - 65px)",
    height: "100%",
    margin: "0",
  },

  inputLabel: {
    fontSize: "1rem",
    float: "left",
    marginLeft: "15px",
  },
  formInput: {
    boxSizing: "border-box",
    borderRadius: "5px",
    marginTop: "5px",
    padding: "0 15px",
  },
  submitButton: {
    margin: "8px 0",
    height: "46px",
    maxWidth: "550px",
    width: "70%",
    borderRadius: "5px",
  },
};

const Signup = () => {
  let navigate = useNavigate();
  let { userType } = useParams();

  const Carrusel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
      let elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        duration: 300,
        fullWidth: true,
        indicators: true,
      });
      const timer = setInterval(() => {
        var instance = M.Carousel.getInstance(carouselRef.current);
        instance.next();
      }, 5550);
      return () => clearInterval(timer);
    }, []);

    return (
      <div
        className="carousel carousel-slider"
        style={{ height: "100%", minHeight: "calc(100vh - 65px)" }}
        ref={carouselRef}
      >
        <div
          className="carousel-fixed-item white-text  center"
          style={{ margin: "0px", backgroundColor: "rgba(0,0, 0, 0.7)" }}
        >
          <h4>Instituto Politécnico Nacional</h4>
          <p>
            <b>"La Técnica al Servicio de la Patria"</b>
            <br /> <br />
          </p>
        </div>
        <a className="carousel-item" href="#one!">
          <img alt="" src={imag} style={style.img} />
        </a>
        <a className="carousel-item" href="#two!">
          <img alt="" src={cecyt2} style={style.img} />
        </a>
        <a className="carousel-item" href="#three!">
          <img alt="" src={dos} style={style.img} />
        </a>
        <a className="carousel-item" href="#six!">
          <img alt="" src={cancha} style={style.img} />
        </a>
        <a className="carousel-item" href="#four!">
          <img alt="" src={imgt6} style={style.img} />
        </a>
      </div>
    );
  };

  const SignupForm = () => {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [unidades, setUnidades] = useState([]);
    const [error, setError] = useState({ error: false, message: "" });
    const [formValues, setFormValues] = useState({
      rol: userType.toUpperCase(),
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
      <div
        className="  "
        style={{
          padding: "2%",
          maxHeight: "calc(100vh - 65px)",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <h5 className="center white-text" style={{ marginTop: "20px" }}>
          Regístrate {userType}
        </h5>
        <blockquote>
          <p className="white-text">
            • Regístrate en la Dirección de Vinculación y Desarrollo Regional
          </p>
        </blockquote>
        <form onSubmit={handleSubmit} className="row">
          <div className="col  s12 m12 xl4">
            <label className="white-text" style={style.inputLabel}>
              Nombre
            </label>
            <input
              type="text"
              required
              className="indigo lighten-2"
              placeholder="Nombre"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
              style={style.formInput}
            />
          </div>
          <div className="col  s12 m6 xl4">
            <label className="white-text" style={style.inputLabel}>
              Apellido paterno
            </label>
            <input
              type="text"
              required
              className="indigo lighten-2"
              placeholder="Apellido paterno"
              name="primerApellido"
              value={formValues.primerApellido}
              onChange={handleChange}
              style={style.formInput}
            />
          </div>
          <div className="col  s12 m6 xl4">
            <label className="white-text" style={style.inputLabel}>
              Apellido materno
            </label>
            <input
              type="text"
              required
              className="indigo lighten-2"
              placeholder="Apellido materno"
              name="segundoApellido"
              value={formValues.segundoApellido}
              onChange={handleChange}
              style={style.formInput}
            />
          </div>
          <div className="col s12 l4 center">
            <label className="white-text" style={style.inputLabel}>
              Correo electrónico
            </label>
            <input
              type="email"
              required
              className="indigo lighten-2"
              placeholder="Ingresa tu Correo electrónico"
              name="correoInstitucional"
              value={formValues.correoInstitucional}
              onChange={handleChange}
              style={style.formInput}
            />
            <span
              className="helper-text grey-text text-lighten-3"
              style={{ fontSize: ".8rem" }}
            >
              <i>Correo de preferencia Institucional</i>
            </span>
          </div>
          <div className="col s12 l4 center">
            <label className="white-text" style={style.inputLabel}>
              Confirmar correo
            </label>
            <input
              type="email"
              required
              className="indigo lighten-2"
              placeholder="Ingresa tu correo electrónico"
              name="confirmarCorreo"
              value={formValues.confirmarCorreo}
              onChange={handleChange}
              style={style.formInput}
            />
            <span
              className="helper-text grey-text text-lighten-3"
              style={{ fontSize: ".8rem" }}
            >
              <i>Correo de preferencia Institucional</i>
            </span>
          </div>
          <div className="col s12 l4 center">
            <label className="white-text" style={style.inputLabel}>
              Nombre de Usuario
            </label>
            <input
              required
              className="indigo lighten-2"
              placeholder="Ingresa tu nombre de usuario"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              style={style.formInput}
            />
            <span
              className="helper-text grey-text text-lighten-3"
              style={{ fontSize: ".8rem" }}
            >
              <i>Nombre de usuario para iniciar sesión </i>
            </span>
          </div>

          <div className="col s12 l4" style={{ marginTop: "1rem" }}>
            <label className="white-text" style={style.inputLabel}>
              Contraseña
            </label>
            <input
              type="password"
              required
              className="indigo lighten-2"
              placeholder="Crear una contraseña"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              style={style.formInput}
            />
          </div>
          <div className="col s12 l4" style={{ marginTop: "1rem" }}>
            <label className="white-text" style={style.inputLabel}>
              Confirmar contraseña
            </label>
            <input
              type="password"
              required
              className="indigo lighten-2"
              placeholder="Ingresa la contraseña creada"
              name="Cpassword"
              value={formValues.Cpassword}
              onChange={handleChange}
              style={style.formInput}
            />
          </div>

          <div className="col s12 l4" style={{ marginTop: "1rem" }}>
            <label className="white-text" style={style.inputLabel}>
              Número de empleado
            </label>
            <input
              type="number"
              min="0"
              required
              className="indigo lighten-2"
              placeholder="No. empleado"
              name="numeroDeEmpleado"
              value={formValues.numeroDeEmpleado}
              onChange={handleChange}
              style={style.formInput}
            />
          </div>
          <div className="col s12 l6" style={{ marginTop: ".4rem" }}>
            <label className="white-text" style={style.inputLabel}>
              Unidad Academica
            </label>
            <select
              className="browser-default indigo lighten-2"
              required
              name="idUnidadAcademica"
              value={formValues.idUnidadAcademica}
              onChange={handleChange}
              style={style.formInput}
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

          {(userType === "Subdirector" || userType === "Director") && (
            <>
              <div className="col  s12 m6 xl6">
                <label className="white-text" style={style.inputLabel}>
                  Cargo
                </label>
                <input
                  type="text"
                  required
                  className="indigo lighten-2"
                  placeholder="Cargo"
                  name="cargo"
                  value={formValues.cargo}
                  onChange={handleChange}
                  style={style.formInput}
                />
              </div>
              <div className="col  s12 m4 xl4">
                <label className="white-text" style={style.inputLabel}>
                  Extensión
                </label>
                <input
                  type="text"
                  required
                  className="indigo lighten-2"
                  placeholder="Extención"
                  name="extension"
                  value={formValues.extension}
                  onChange={handleChange}
                  style={style.formInput}
                />
              </div>
              <div className="col  s12 m4 xl4">
                <label className="white-text" style={style.inputLabel}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  className="indigo lighten-2"
                  placeholder="Telefono"
                  name="telefono"
                  value={formValues.telefono}
                  onChange={handleChange}
                  style={style.formInput}
                />
              </div>
            </>
          )}

          <div className="col s12 center">
            <button
              type="submit"
              className="deep-purple accent-2 waves-effect waves-light btn "
              style={style.submitButton}
            >
              Registrarse
              <i className="material-icons right">send</i>
            </button>
            <p className="white-text">
              Se te enviará una confirmación de registro por correo
            </p>
            <p className="grey-text text-lighten-4">
              ¿Tienes una cuenta?
              <Link to="/login" className="white-text">
                <b> Inicia sesión</b>
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  };
  return (
    <div className="row" style={style.min}>
      <div
        className="col s12 m12 l6 xl5 hide-on-med-and-down"
        style={{ padding: "0" }}
      >
        <Carrusel />
      </div>
      <div className="col s12 m12 l6 xl7" style={{ padding: "0" }}>
        <SignupForm />
      </div>
    </div>
  );
};
export default Signup;

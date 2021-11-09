import React from "react";
import Footer from "./Footer";
import TargetaRegistro from "../components/TargetaRegistro";

const style = {
  headerImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
    filter: "brightness(0.8)",
  },
  headerFilter: {
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    top: "0",
    height: "100%",
    filter: "brightness(0.5)",
    backgroundImage:
      "linear-gradient(180deg, rgba(57, 191, 183, 0.8) 4.74%, transparent 100%)",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50% , -50%)",
    color: "#fff",
  },
  subtitleContainer: {
    width: "fit-content",
    border: "2px solid #fff",
    margin: "auto",
    padding: "0 1rem",
  },
};



const UserTypeSignup = () => {
  return (
    <div>
      <header style={{ position: "relative", height: "50vh" }}>
        <img
          style={style.headerImg}
          src="https://picsum.photos/1800/900"
          alt=""
        />
        <div style={style.headerFilter}></div>
        <div className=" " style={style.headerTitle}>
          <h3 style={{ fontSize: "5rem" }}>Registro</h3>
          <div style={style.subtitleContainer}>
            <h4>Bienvenido</h4>
            <p>
              Seleccione su
              <span className="purple-text text-accent-1"> usuario</span>
            </p>
          </div>
        </div>
      </header>
      <main className="row container section">
        <TargetaRegistro
          user="Revisor"
          description="Tendra acceso a ver los registros pendientes por revisar además de las acciones de contenido que le correspondan.."
          link="/signup/revisor"
          pic="https://picsum.photos/400/400?random=2"
        />
        <TargetaRegistro
          user="Subdirector "
          description="Tendra acceso a ver los registros pendientes por revisar
                además de las acciones de contenido que le correspondan.."
          link="/signup/Subdirector"
          pic="https://picsum.photos/400/400?random=3"
        />
       
        <TargetaRegistro
          user="Director Academico "
          description="Tendra acceso a ver los registros pendientes por revisar
                además de las acciones de contenido que le correspondan.."
          link="/signup/Director%20Academico"
          pic="https://picsum.photos/400/400?random=5"
        />
     <TargetaRegistro
          user="Administrador"
          description="Tendra acceso a ver los registros pendientes por revisar
                además de las acciones de contenido que le correspondan.."
          link="/signup/Administrador"
          pic="https://picsum.photos/400/400?random=1"
        />
      </main>

      <Footer />
    </div>
  );
};

export default UserTypeSignup;
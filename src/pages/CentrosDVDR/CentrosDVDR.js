import React, { useState } from "react";
import Footer from "..//Footer";
import Modal from "../../components/Modal.js";
import InformacionDelCentro from "./InformacionDelCentro";
import cajeme from "..//..//assets/images/CodigosQR/cajeme.png";
import campeche from "..//..//assets/images/CodigosQR/campeche.jpg";
import cancun from "..//..//assets/images/CodigosQR/cancun.jpg";
import chihuahua from "..//..//assets/images/CodigosQR/chihuahua.png";
import culiacan from "..//..//assets/images/CodigosQR/culiacan.png";
import durango from "..//..//assets/images/CodigosQR/durango.jpg";
import mazatlan from "..//..//assets/images/CodigosQR/mazatlan.jpg";
import mochis from "..//..//assets/images/CodigosQR/mochis.png";
import morelia from "..//..//assets/images/CodigosQR/morelia.png";
import oaxaca from "..//..//assets/images/CodigosQR/oaxaca.jpg";
import tampico from "..//..//assets/images/CodigosQR/tampico.png";
import tijuana from "..//..//assets/images/CodigosQR/tijuana.jpg";
import veracruz from "..//..//assets/images/CodigosQR/veracruz.jpg";
import Mapa from "./Mapa"




const data = [{
        titulo: "Cajeme",
        link: "https://www.youtube.com/embed/TOKmS6e_2FY",
        imagenurl: cajeme,
    },
    {
        titulo: "Campeche",
        link: "https://www.youtube.com/embed/TOKmS6e_2FY",
        imagenurl: campeche,
    },
    {
        titulo: "Cancun",
        link: "https://www.youtube.com/embed/TOKmS6e_2FY",
        imagenurl: cancun,
    },
];

const CentrosDVDR = () => {
    const [centro, setCentro] = useState("Centro");
    const [link, setLink] = useState("Link");
    const [imagenurl, setimagenUrl] = useState("URL");
    const [manejadorModal, setmanejadorModal] = useState(false);

    function cambiodeTexto(texto) {
        setCentro(texto);
        setmanejadorModal(true);
    }

    function cambiodeVinculo(vinculo) {
        setLink(vinculo);
        setmanejadorModal(true);
    }

    function cambiodeURL(vinculo) {
        setimagenUrl(vinculo);
        setmanejadorModal(true);
    }

    function abrirModal(titulo, youtube, codigo) {
        setCentro(titulo);
        setLink(youtube);
        setimagenUrl(codigo);
        setmanejadorModal(true);
    }
    return ( <
        >


        <
        Modal open = { manejadorModal }
        fnCloseModal = {
            () => setmanejadorModal(false) } >
        <
        InformacionDelCentro unidad = { centro }
        vinculo = { link }
        url = { imagenurl }
        />{" "} <
        /Modal>{" "} <
        div >
        <
        header > < /header>{" "} <
        main >
        <
        h1 > { centro } < /h1>{" "} {
            data.map((centro) => ( <
                button class = "waves-effect waves-light btn modal-trigger"
                onClick = {
                    () =>
                    abrirModal(centro.titulo, centro.link, centro.imagenurl)
                } >
                { centro.titulo } { " " } <
                /button>
            ))
        } <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () =>
            abrirModal(
                "Centro de Vinculación y Desarrollo Regional Unidad Cajeme",
                "https://www.youtube.com/embed/TOKmS6e_2FY",
                cajeme
            )
        } >
        prueba { " " } <
        /button>{" "} <
        /main>{" "}



        <
        Mapa fnabrirmodal = { abrirModal }



        />



        <
        Footer / >
        <
        /div>; { " " } <
        />
    );
};

export default CentrosDVDR;
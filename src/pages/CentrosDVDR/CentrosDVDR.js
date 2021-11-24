import React, { useState } from "react";
import Footer from "..//Footer";

import Modal from "../../components/Modal.js";
import InformacionDelCentro from "./InformacionDelCentro";

const CentrosDVDR = () => {
    const [centro, setCentro] = useState("Centro");
    const [media, setMedia] = useState("media");
    const [manejadorModal, setmanejadorModal] = useState(false);

    function cambiodeTexto(texto) {
        setCentro(texto);
        setmanejadorModal(true);
    }

    function cambiodeVideo(video) {
        setMedia(video);
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
        />      <
        /Modal> <
        Modal open = { manejadorModal }
        fnCloseModal = {
            () => setmanejadorModal(false) } >
        <
        InformacionDelCentro link = { media }
        />      <
        /Modal>

        <
        div >
        <
        header > < /header> <
        main >
        <
        h1 > { centro } < /h1> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Cajeme") } >
        CVDR Cajeme <
        /button>

        <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Campeche") } >
        CVDR Campeche <
        /button>

        <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Cancún") } >
        CVDR Cancún <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Chihuahua") } >
        CIITA Chihuahua <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Culiacán") } >
        CVDR Culiacán <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Durango") } >
        CVDR Durango <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Mazatlán") } >
        CVDR Mazatlán <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Monchis") } >
        CVDR Monchis <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Morelia") } >
        CVDR Morelia <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Oaxaca") } >
        CVDR Oaxaca <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Tampico") } >
        CVDR Tampico <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Tijuana") } >
        CVDR Tijuana <
        /button> <
        button class = "waves-effect waves-light btn modal-trigger"
        onClick = {
            () => cambiodeTexto("Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Veracruz") } >
        CIITA Veracruz <
        /button> <
        /main> <
        Footer / >
        <
        /div>; <
        />
    );
};

export default CentrosDVDR;
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
const styles = {
  contenedor: {
    position:"relative",
    top:"20px",
    display: "flex",
    flexDirection:"row",
    fontSize: "7px",
    height:"72px",
    padding:"0px", 
  },
  contenedor1:{
    width:"250px",
    height:"71px",
    marginLeft:"80px",
    marginRight:"80px",

 
  },
  titulo:{
    marginBottom:"15px",
    textAlign:"center"
  },
  sub:{
    marginBottom:"12px"
  }

  /* contenedor:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"470px",
        left:"130px",
        fontSize:"8px",
        justifyContent: "space-between",
    },
    contenedor2:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"480px",
        left:"100px",
        fontSize:"7px",
        justifyContent: "space-between",
    },
    contenedor3:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"470px",
        left:"570px",
        fontSize:"8px",
        justifyContent: "space-between",
    },
    contenedor4:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"480px",
        left:"500px",
        fontSize:"7px",
        justifyContent: "space-between",
    },
    uno:{
        marginBottom:"2px"
    }
 */
};
const Firmas = (props) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedor1}>
        <Text style={styles.titulo}>RESPONSABLE DE LA INFORMACIÓN</Text>
        <Text style={styles.sub}>NOMBRE: &nbsp;{props.nombre}</Text>
        <Text style={styles.sub}>CARGO: &nbsp;{props.cargo}</Text>
        <Text style={styles.sub}>EXTENSIÓN: &nbsp;{props.extension}</Text>
        <Text style={styles.sub}>E_MAIL: &nbsp;{props.email}</Text>
        <Text style={styles.sub}>FIRMA:____________________________________________________</Text>
      </View>
      <View style={styles.contenedor1}>
        <Text style={styles.titulo}>TITULAR DE LA UNIDAD</Text>
        <Text style={styles.sub}>NOMBRE:  &nbsp;{props.nombre1}</Text>
        <Text style={styles.sub}>CARGO:  &nbsp;{props.cargo1}</Text>
        <Text style={styles.sub}>EXTENSIÓN:  &nbsp;{props.extension1}</Text>
        <Text style={styles.sub}>E_MAIL:  &nbsp;{props.email1}</Text>
        <Text style={styles.sub}>FIRMA:____________________________________________________</Text>
      </View>
    </View>
  );
};

export default Firmas;

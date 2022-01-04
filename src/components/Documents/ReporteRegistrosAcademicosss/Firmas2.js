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
const styles= {
    contenedor:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"370px",
        left:"130px",
        fontSize:"8px",
        justifyContent: "space-between",
    },
    contenedor2:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"380px",
        left:"100px",
        fontSize:"7px",
        justifyContent: "space-between",
    },
    contenedor3:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"370px",
        left:"570px",
        fontSize:"8px",
        justifyContent: "space-between",
    },
    contenedor4:{
        display: "flex",
        flexDirection:"col",
        position:"absolute",
        top:"380px",
        left:"500px",
        fontSize:"7px",
        justifyContent: "space-between",
    },
    uno:{
        marginBottom:"2px"
    }



}
const Firmas2 = () => {
  return (
    <>
      <View style={styles.contenedor}>
      <Text>RESPONSABLE DE LA INFORMACIÓN</Text>
      </View>
      <View style={styles.contenedor2}>
      <Text style={styles.uno}>NOMBRE:___________________________________________________</Text>
      <Text style={styles.uno}>CARGO:____________________________________________________</Text>
      <Text style={styles.uno}>EXTENSIÓN:________________________________________________</Text>
      <Text style={styles.uno}>E_MAIL:___________________________________________________</Text>
      <Text style={styles.uno}>FIRMA:____________________________________________________</Text>
      </View>
      <View style={styles.contenedor3}>
      <Text>TITULAR DE LA UNIDAD</Text>
      </View>
      <View style={styles.contenedor4}>
      <Text style={styles.uno}>NOMBRE:___________________________________________________</Text>
      <Text style={styles.uno}>CARGO:____________________________________________________</Text>
      <Text style={styles.uno}>EXTENSIÓN:________________________________________________</Text>
      <Text style={styles.uno}>E_MAIL:___________________________________________________</Text>
      <Text style={styles.uno}>FIRMA:____________________________________________________</Text>
      </View>
      



{/* 

      <Text>Titular de la unidad responsable</Text> */}

     
    </>
  );
};

export default Firmas2;

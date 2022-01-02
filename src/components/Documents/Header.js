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
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <View style={styles.header} fixed>
      <View style={styles.imageContainer}>
        <Image style={styles.image} src={logo} />
      </View>
      <View style={styles.dataContainer}>
        <Text style={{ fontSize: "15px", fontWeight: "bold" }}>
          Instituto Politécnico Nacional
        </Text>
        <Text>
          Coordinacion General de Planeacion e Información Institucional
        </Text>
        <View
          style={{
            height: "1px",
            backgroundColor: "#00897b",
            marginVertical: "10px",
          }}
        />
        <Text>Dirección de Información Institucional</Text>
        <Text>JULIO - SEPTIEMBRE 2021</Text>
        <Text>FECHA DE CORTE AL 30 DE SEPTIEMBRE DE 2021</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    height: "100px",
    width: "100%",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75px",
  },
  dataContainer: {
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "right",
    fontSize: "10px",
  },
});
export default Header;

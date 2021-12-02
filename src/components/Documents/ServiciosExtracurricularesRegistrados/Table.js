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


const Row = ({ row }) => {
  return (
    <View style={styles.tr}>
      {row && (
        <>
          <Text style={[styles.td,{flexBasis:"30%"}]}>{row.NombrePrograma}</Text>
          <Text style={[styles.td,{flexBasis:"20%"}]}>{row.Clave}</Text>
          <Text style={[styles.td,{flexBasis:"25%"}]}>{row.CentroUnidadAcademica}</Text>
          <Text style={[styles.td,{flexBasis:"20%"}]}>{row.Vigencia}</Text>
          <Text style={[styles.td,{flexBasis:"15%"}]}>{row.DuracionTotal}</Text>
        </>
      )}
    </View>
  );
};
const Table = ({ data }) => {
 
  return (
    <View style={{paddingBottom:"150px"}}>
      <Text
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "10px",
        }}
      >
        SERVICIOS EXTRACURRICULARES REGISTRADOS
      </Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "10px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "10px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <Text style={styles.tableHeadCell}>Nombre de Programa</Text>
          <Text style={styles.tableHeadCell}>Clave de Registro</Text>
          <Text style={styles.tableHeadCell}>Centro</Text>
          <Text style={[styles.tableHeadCell,{flexBasis:"5%"}]}>Termino de vigencia</Text>
          <Text style={[styles.tableHeadCell,{flexBasis:"5%"}]}>Duracion Total en Hrs</Text>
        </View>
        <View style={styles.tableBody}>
          {data && data.map((item, index) => {
            return <Row key={index} row={item} />;
          })}
          <Row />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  table: {
    /* border: "1px solid #d3d3d3", */
  },
  tableHead: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    flexWrap: "nowrap",
    backgroundColor: "#d3d3d3",
    /*  border: "1px solid gray", */
  },
  tableHeadCell: {
    fontSize: "10px",
    fontWeight:"1100",
    flexGrow: "1",
    padding: "5px",
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    flexWrap: "nowrap",
    borderBottom: "1px solid #d3d3d3",
  },
  td: {
    fontSize: "8pt",
    flexGrow: "1",
    padding: "5px",
  },
});
export default Table;

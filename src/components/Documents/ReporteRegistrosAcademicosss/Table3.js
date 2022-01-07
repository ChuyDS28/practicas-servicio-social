import React from "react";
import Firmas from "./Firmas"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

const Row = (props) => {
  return (
    <View style={styles.tr}>
      {props && (
        <>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "69.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.No}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "82px",
                textAlign: "center",
              },
            ]}
          >
            {props.Codigo}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "197px",
                textAlign: "center",
              },
            ]}
          >
            {props.Nombre}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "218px",
                textAlign: "center",
              },
            ]}
          >
            {props.Unidad}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "110px",
                textAlign: "center",
              },
            ]}
          >
            {props.Fechai}
          </Text>
         <Text
            style={[
              styles.td1,
              {
                flexBasis: "143px",
                textAlign: "center",
                
              },
            ]}
          >
            {props.Fechat}
          </Text>
           {/* <Text
            style={[
              styles.td,
              {
                flexBasis: "30px",
                border: "1px solid black",
                textAlign: "center",
              },
            ]}
          >
            {props.Acumulado}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "30px",
                border: "1px solid black",
                textAlign: "center",
              },
            ]}
          >
            {props.Variacion}
          </Text> */}
        </>
      )}
    </View>
  );
};
const Table3 = ({ data }) => {
  return (
    <View >
      <Text
        style={{
          fontSize: "9px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "5px",
        }}
      >
        ESTÁNDARES O PROGRAMAS ACREDITADOS PARA CERTIFICAR COMPETENCIAS
        LABORALES
      </Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "9px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "9px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <View style={styles.tableHeadCell1}>
            <Text>NO.</Text>
          </View>
          <View style={styles.tableHeadCell2}>
            <Text>ESTÁNDAR O PROGRAMA DE COMPETENCIA</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>UNIDAD RESPONSABLE</Text>
          </View>
          <View style={styles.tableHeadCell4}>
            <Text>VIGENCIA</Text>
          </View>
        </View>
        <View style={styles.tableHead2}>
          <View style={styles.tableHeadCell6}>
            <Text>CÓDIGO</Text>
          </View>
          <View style={styles.tableHeadCell7}>
            <Text>NOMBRE</Text>
          </View>
        </View>
        <View
          style={[styles.tableHead2, { width: "250px", marginLeft: "561px" }]}
        >
          <View style={styles.tableHeadCell8}>
            <Text>FECHA DE INICIO</Text>
          </View>
          <View style={styles.tableHeadCell9}>
            <Text>FECHA DE TÉRMINO</Text>
          </View>
        </View>
        {/*   <View style={styles.tableHead3}>
          <View style={styles.tableHeadCell12}>
         <Text >REGISTROS ACADÉMICOS</Text>
         </View>
         </View>  */}

        
          <View style={styles.tableBody}>
        <Row No="" Codigo="" Nombre="" Unidad="" Fechai="" Fechat=""/>
        
       {/*  <View style={styles.barra}>
         <Row Nivel="TOTAL" Mes1="11" Mes2="0" Mes3="0" Mes4="1" Mes5="" Acumulado="0" Variacion="-100.00%"/>
         </View>  
         
          {data &&
            data.map((item, index) => {
              return <Row key={index} row={item} />;
            })} 
         <View style={styles.tableHead4}>
          <View style={styles.tableHeadCell13}>
            <Text>La impartición de eventos formativos se ha comenzado a activar después de haber atravesado un período de escasa actividad por situaciones de pandemia por lo que en el último trimestre de este año se llegará a la meta esperada de acuerdo con las solicitudes de registros académicos que se han recibido.</Text>
           </View>
          </View>  */}
        </View>    
      </View>
      <br/>
    <Firmas
     nombre="Lic. María Mercedes Pérez Guillén"
     cargo="Encargada de acuerdos"
     extension="57296000 EXT. 51655"
     email="mperezgui@ipn.mx"
     nombre1="M. en C. Rodolfo Alejandro Romo Mexía Gutiérrez"
     cargo1="Director"
     extension1="57296000 EXT. 51601"
     email1="rromo@ipn.mx"
    
    />
    </View>
  );
};

const styles = StyleSheet.create({
  
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    top: "-1px",
    height: "25px",
  
  },
  td: {
    fontSize: "6px",
    flexGrow: "1",
    padding: "3px",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
    
  },
  td1: {
    fontSize: "6px",
    flexGrow: "1",
    padding: "3px",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
    borderRight:"1px solid black"
  },
  
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  tableHead: {
    display: "flex",
    backgroundColor: "#f59733",
    alignItems: "flex-start",
    height: "36px",
    flexDirection: "row",
    border: "1px solid black",
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "18px",
    flexDirection: "row",
    marginTop: "-18px",
    marginLeft: "70px",
    width: "431px",
  },
 
  tableHead4: {
    display: "flex",
    height: "120px",
    flexDirection: "row",
    width: "220px",
    border: "1px solid black",
    marginLeft: "593px",
    fontSize: "8px",
    marginTop: "-123px",
    textAlign: "center",
  },
  tableHeadCell13: {
    marginTop: "30px",
    marginLeft: "5px",
    marginRight: "5px",
   
  },

  tableHeadCell1: {
    flexBasis: "70px",
    height: "35px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    padding:"10px"
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    flexBasis: "281px",
    textAlign: "center",
    fontSize: "8px",
    lineHeight: "2px",
  },
  tableHeadCell3: {
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    flexBasis: "220px",
    height: "35px",
    textAlign: "center",
    fontSize: "8px",
    padding:"10px"
  },
  tableHeadCell4: {
    flexBasis: "253px",
    borderBottom:"1px solid black",
    fontSize: "8px",
    textAlign: "center",
    lineHeight: "2px",
  },
  tableHeadCell5: {
    flexBasis: "220px",
    height: "42px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
  tableHeadCell6: {
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    flexBasis: "81px",
    textAlign: "center",
    fontSize: "8px",
    height: "18px",
  },
  tableHeadCell7: {
    flexBasis: "195px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "18px",
    lineHeight: "2px",
  },
  tableHeadCell8: {
    flexBasis: "110px",
    borderBottom:"1px solid black",
    borderRight:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "18px",
  },
  tableHeadCell9: {
    flexBasis: "140px",
    borderBottom:"1px solid black",
    fontSize: "8px",
    textAlign: "center",
    height: "18px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    borderRight:"1px solid black",
    borderBottom:"1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
});

export default Table3;

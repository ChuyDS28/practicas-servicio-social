import React from "react";
import Firmas from "../Firmas";
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
                flexBasis: "68.2px",
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
                flexBasis: "118px",
                textAlign: "center",
              },
            ]}
          >
            {props.Cvdr}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "78px",
                textAlign: "center",
              },
            ]}
          >
            {props.Convenio}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "78px",
                textAlign: "center",
              },
            ]}
          >
            {props.Bases}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "238px",
                textAlign: "center",
              },
            ]}
          >
            {props.NoC}
          </Text>
          <Text
            style={[
              styles.td1,
              {
                flexBasis: "220px",
                textAlign: "center",
              },
            ]}
          >
            {props.Inst}
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
const Table = ({ data }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: "9px",
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: "5px",
        }}
      >
        CONVENIOS Y BASES DE COLABORACIÓN DE EDUCACIÓN CONTINUA
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
          <View style={styles.tableHeadCell5}>
            <Text>CVDR O CIITA</Text>
          </View>
          <View style={styles.tableHeadCell2}>
            <Text>TIPO</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>(2) NÚMERO DE CONVENIO O BASE DE COLABORACIÓN</Text>
          </View>
          <View style={styles.tableHeadCell4}>
            <Text>(3) INSTITUCIÓN / EMPRESA/ UNIDAD IPN</Text>
            <Text>CON LA QUE SE REALIZA</Text>
          </View>
        </View>
       <View style={styles.tableHead2}>
          <View style={styles.tableHeadCell6}>
            <Text>CONVENIO</Text>
          </View>
          <View style={styles.tableHeadCell7}>
            <Text>BASES DE</Text>
            <Text>COLABORACIÓN</Text>
          </View>
        </View>
         {/* <View
          style={[styles.tableHead2, { width: "250px", marginLeft: "561px" }]}
        >
          <View style={styles.tableHeadCell8}>
            <Text>FECHA DE INICIO</Text>
          </View>
          <View style={styles.tableHeadCell9}>
            <Text>FECHA DE TÉRMINO</Text>
          </View>
        </View> */}
        {/*   <View style={styles.tableHead3}>
          <View style={styles.tableHeadCell12}>
         <Text >REGISTROS ACADÉMICOS</Text>
         </View>
         </View>  */}
{/* <Row No="Total" Cvdr="" Convenio="1" Bases="0" NoC="" Inst="" /> */}
        <View style={styles.tableBody}>
          <View style={styles.barra}>
          <Row No="Total" Cvdr="" Convenio="1" Bases="0" NoC="" Inst="" />
          </View>
          <Row No="" Cvdr="DVDR" Convenio="1" Bases="0" NoC="DSETT.D/CSI//0889/2021." Inst="Instituto de Seguridad de Servicios Sociales de los Trabajadores del Estado" />
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
      <br />
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
  barra: {
  /*   display: "flex",
    flexDirection: "row",
    alignItems:"stretch",
    flexWrap: "nowrap", 
     top: "0px",  */
/*     height: "18px", */
   /*  borderBottom: "1px solid #d3d3d3", */
    backgroundColor: "#cdcdcd",
  },
  tr: {
    display: "flex",
    flexDirection: "row",
  alignItems:"stretch",
    flexWrap: "nowrap",
    top: "-1px",
    
  },
  td: {
    fontSize: "8px",
    flexGrow: "1",
    padding: "5px 2px 5px 2px",
/*     padding: "3px", */
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  td1: {
    fontSize: "8px",
    flexGrow: "1",
    padding: "5px 2px 5px 2px",
   /*  padding: "3px", */
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
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
    height: "44px",
    flexDirection: "row",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    height: "26px",
    flexDirection: "row",
    marginTop: "-25px",
    marginLeft: "191px",
    width: "160px",
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
    height: "44px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    padding: "15px 2px 0px 2px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "160px",
    textAlign: "center",
    fontSize: "8px",
    padding: "4px 2px 0px 2px",
    height: "18px",
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "240px",
    height: "44px",
    textAlign: "center",
    fontSize: "8px",
    padding: "15px 2px 0px 2px",
  },
  tableHeadCell4: {
    flexBasis: "220px",
    borderBottom: "1px solid black",
    fontSize: "8px",
    textAlign: "center",
    padding: "15px 2px 0px 2px",
    height: "44px",
  },
  tableHeadCell5: {
   flexBasis: "120px",
    height: "44px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    padding: "15px 2px 0px 2px",
  },
  tableHeadCell6: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "80px",
    textAlign: "center",
    fontSize: "8px",
    padding: "3px 2px 0px 2px",
    height: "26px",
  },
  tableHeadCell7: {
    flexBasis: "80px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "8px",
    textAlign:"center",
    height: "26px",
    padding: "3px 2px 0px 2px",
   /*  padding: "3px 3px 0px 3px", */
  
  },
  tableHeadCell8: {
    flexBasis: "110px",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    textAlign: "center",
    padding: "3px 2px 0px 2px",
    fontSize: "8px",
    height: "22px",
  },
  tableHeadCell9: {
    flexBasis: "140px",
    borderBottom: "1px solid black",
    fontSize: "8px",
    textAlign: "center",
    height: "22px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "25px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
});

export default Table;

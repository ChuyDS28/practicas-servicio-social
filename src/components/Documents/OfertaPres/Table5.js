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
                flexBasis: "79px",
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
                flexBasis: "106px",
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
                flexBasis: "269px",
                textAlign: "center",
              },
            ]}
          >
            {props.Nombre}
          </Text>
          {/* <Text
            style={[
              styles.td,
              {
                flexBasis: "123.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Tipo}
          </Text> */}
          <Text
            style={[
              styles.td,
              {
                flexBasis: "202px",
                textAlign: "center",
              },
            ]}
          >
            {props.NoR}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "89px",
                textAlign: "center",
              },
            ]}
          >
            {props.Hom}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "88.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Muj}
          </Text>
          <Text
            style={[
              styles.td3,
              {
                flexBasis: "85.5px",
                textAlign: "center",
              },
            ]}
          >
            {props.Total}
          </Text>
        </>
      )}
    </View>
  );
};
const Table5 = ({ data }) => {
  return (
    <View break>
      <Text
        style={{
          fontSize: "8px",
          fontWeight: "bold",
          textAlign: "center",
         /*  marginVertical: "-2px", */
          marginTop:"-2px",
        }}
      >
        PROGRAMAS EN LA MODALIDAD PRESENCIAL OFERTADOS Y NÚMERO DE USUARIOS UNIDADES MÓVILES DE APRENDIZAJE
      </Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "7px" }}>
          FUENTE: Dirección de Vinculación y Desarrollo Regional
        </Text>
        <Text style={{ fontSize: "7px" }}>39 DE 40</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHead}>
          <View style={styles.tableHeadCell1}>
            <Text>NO.</Text>
          </View>
         
          <View style={styles.tableHeadCell5}>
            <Text>UNIDAD</Text>
            <Text>ACADÉMICA</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>NOMBRE DEL PROGRAMA ACADÉMICO</Text>
          </View>
         {/*  <View style={styles.tableHeadCell4}>
            <Text>TIPO</Text>
          </View> */}
          <View style={styles.tableHeadCell2}>
            <Text>TIPO</Text>
          </View>
          <View style={styles.tableHeadCell6}>
            <Text>NO. DE USUARIOS </Text>
          </View>
          
        </View>
       <View
          style={[styles.tableHead2, { width: "232px", marginLeft: "580px" }]}
        >
          <View style={styles.tableHeadCell8}>
            <Text>HOMBRES</Text>
          </View>
          <View style={styles.tableHeadCell8}>
            <Text>MUJERES</Text>
          </View>
          <View style={styles.tableHeadCell9}>
            <Text>TOTAL</Text>
          </View>
        </View>
 
      
       
      
        {/*   <View style={styles.tableHead3}>
          <View style={styles.tableHeadCell12}>
         <Text >REGISTROS ACADÉMICOS</Text>
         </View>
         </View>  */}

        <View style={styles.tableBody}>
          <Row
            No="1"
            Unidad="CVDR Campeche"
            Nombre="PROYECTOS DE TURISMO ALTERNATIVO Y DESARROLLO
            ECONOMICO EN COMUNIDADES VINCULADAS A LA RUTA TREN
            MAYA"
            NoR="Conferencia"
            Hom="12"
            Muj="4"
            Total="16"
          />
         
            <Row
               No="2"
               Unidad="CVDR Durango"
               Nombre="EXCEL BASICO"
               Tipo="Curso"
               Hom="6"
               Muj="19"
               Total="25"
            />
            <Row
               No="3"
               Unidad="CVDR Durango"
               Nombre="EXCEL INTERMEDIO"
               Tipo="Curso"
               Hom="5"
               Muj="17"
               Total="22"
            />
              <Row
               No="4"
               Unidad="CVDR Durango"
               Nombre="INTRODUCCION A LA PROGRAMACION EN PHYTON"
               Tipo="Curso"
               Hom="2"
               Muj="2"
               Total="4"
            />
              <Row
               No="5"
               Unidad="CVDR Durango"
               Nombre="INTRODUCCION A LA PROGRAMACION EN PHYTON"
               Tipo="Curso"
               Hom="0"
               Muj="1"
               Total="1"
            />
             <Row
               No="6"
               Unidad="CVDR Oaxaca"
               Nombre="Congruencia en el personal directivo Grupo 3"
               Tipo="Curso"
               Hom="23"
               Muj="12"
               Total="35"
            />
              <Row
               No="7"
               Unidad="CVDR Oaxaca"
               Nombre="Congruencia en el personal directivo Grupo 4"
               Tipo="Curso"
               Hom="4"
               Muj="8"
               Total="12"
            />
             <Row
               No="8"
               Unidad="CVDR Tijuana"
               Nombre="Auditoria Ambiental"
               Tipo="Diplomado"
               Hom="24"
               Muj="16"
               Total="40"
            />
              <Row
               No="9"
               Unidad="CIITA Chihuahua"
               Nombre="Dimensiones y Tolerancias Geometrícas"
               Tipo="Curso"
               Hom="11"
               Muj="3"
               Total="14"
            />
             <Row
               No=""
               Unidad=""
               Nombre=""
               Tipo=""
               Hom=""
               Muj=""
               Total="0"
            />
             <Row
               No=""
               Unidad=""
               Nombre=""
               Tipo=""
               Hom=""
               Muj=""
               Total="0"
            />
             <Row
               No=""
               Unidad=""
               Nombre=""
               Tipo=""
               Hom=""
               Muj=""
               Total="0"
            />
             <Row
               No=""
               Unidad=""
               Nombre=""
               Tipo=""
               Hom=""
               Muj=""
               Total="0"
            />
             <Row
               No=""
               Unidad=""
               Nombre=""
               Tipo=""
               Hom=""
               Muj=""
               Total="0"
            />
            <View style={styles.barra2}>
            <Row
          
               No=""
               Unidad=""
               Nombre=""
               NoR=""
               Hom="87"
               Muj="82"
               Total="169"
            />
      
      </View>
         
          {/*
      <View style={styles.barra}>
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
          </View>   */}
        </View>
      </View>
      <br/>
      <Firmas/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  barra2:{
    backgroundColor:"#9c9c9c",
  },
  texto:{
    display: "flex",
    fontSize:"8px",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
  /*   top: "-1px", */
   
  },
  td: {
    fontSize: "8px",
    padding:"5px 2px 5px 2px",
    flexGrow: "1",
   /*  padding: "3px", */
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  td3: {
    fontSize: "7px",
    flexGrow: "1",
    backgroundColor:"#cdcdcd",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft:"1px solid black",
  },
  td2: {
    fontSize: "7px",
    flexGrow: "1",
    padding: "3px",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
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
    height: "24px",
    flexDirection: "row",
    borderLeft: "1px solid black", 
   borderTop: "1px solid black", 
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    borderRight:"1px black solid",
    height: "12px",
    flexDirection: "row",
    marginTop: "-11px",
   
 
  
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
  /*  tableHeadCell13: {
    marginTop: "30px",
    marginLeft: "5px",
    marginRight: "5px",
    border:"1px solid black"
  }, */

  tableHeadCell1: {
    flexBasis: "70px",
    height: "24px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
    fontSize: "7px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderBottom: "1px solid black",
    borderRight:"1px solid black",
    flexBasis: "180px",
    textAlign: "center",
    fontSize: "7px",
    padding: "10px 2px 0px 2px",
    height:"24px"
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "240px",
    padding: "5px 5px 0px 5px",
    textAlign: "center",
    fontSize: "7px",
    height:"24px"
  },
  tableHeadCell4: {
    flexBasis: "110px",
    borderBottom: "1px solid black",
    borderRight:"1px solid black",
    fontSize: "7px",
    height: "24px",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
  },
  tableHeadCell5: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    fontSize: "7px",
    height: "24px",
    textAlign: "center",
    padding: "5px 2px 0px 2px",
  },
  tableHeadCell6: {
    borderRight: "1px solid black",

    borderBottom: "1px solid black",
    flexBasis: "234px",
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell7: {
    flexBasis: "146px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell8: {
    flexBasis: "91px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell9: {
    flexBasis: "85.5px",
    borderBottom: "1px solid black",
    
    textAlign: "center",
    fontSize: "7px",
    height: "12px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "25px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "25px",
  },
  tableHeadCell12: {
    flexBasis: "200px",
    margin: "1px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
  },
});

export default Table5;

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
const Table2 = ({ data }) => {
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
        PROGRAMAS EN LA MODALIDAD PRESENCIAL OFERTADOS Y N??MERO DE USUARIOS
      </Text>
      <Text
        style={{
          fontSize: "8px",
          fontWeight: "bold",
          textAlign: "center",
         /*  marginVertical: "-2px", */
          marginTop:"1x",
        }}
      >
        NIVEL SUPERIOR
      </Text>
      <View style={styles.tableHeader}>
        <Text style={{ fontSize: "7px" }}>
          FUENTE: Direcci??n de Vinculaci??n y Desarrollo Regional
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
            <Text>ACAD??MICA</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>NOMBRE DEL PROGRAMA ACAD??MICO</Text>
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
         <Text >REGISTROS ACAD??MICOS</Text>
         </View>
         </View>  */}

        <View style={styles.tableBody}>
          <Row
            No="1"
            Unidad="ENMH"
            Nombre="Ventilaci??n Mec??nica"
            NoR="Curso"
            Hom="422"
            Muj="377"
            Total="799"
          />
         
            <Row
               No="2"
               Unidad="EMNH"
               Nombre="Taller de Cardiolog??a Avanzada"
               Tipo="B??sico (Presencial)"
               NoR="Taller"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="3"
               Unidad="ESIA ZAC"
               Nombre="Fundamentos de Valuaci??n Inmobiliaria en Bienes Privados y Bienes
               Nacionales"
               Tipo="B??sico (Presencial)"
               NoR="Curso"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="4"
               Unidad="CECyT 2"
               Nombre="Interpretacion de la Norma ISO/IEC 17025 y validacion de metodos
               analiticos"
               Tipo="B??sico"
               NoR="Curso"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="5"
               Unidad="CECyT 2"
               Nombre="Medicina bioest??tica y modulaci??n del envejecimiento"
               Tipo="B??sico (Presencial)"
               NoR="Diplomado"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="6"
               Unidad="CECyT 2"
               Nombre="Medicina bioest??tica y modulaci??n del envejecimiento"
               Tipo=""
               NoR="Diplomado"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="7"
               Unidad="CECyT 2"
               Nombre="Automatizacion Aplicada a la Gestion de la Manufactura"
               Tipo="B??sico (Presencial)"
               NoR="Seminario"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <Row
               No="8"
               Unidad="CECyT 2"
               Nombre="Calidad con Enfoque a la Mejora Continua en los Procesos"
               Tipo="B??sico (Presencial)"
               NoR="Seminario"
               Hom="14"
               Muj="14"
               Total="32"
            />
            <View style={styles.barra2}>
            <Row
          
               No="TOTAL"
               Unidad=""
               Nombre=""
               Tipo=""
               NoR=""
               Hom="0"
               Muj="1"
               Total="2"
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
            <Text>La impartici??n de eventos formativos se ha comenzado a activar despu??s de haber atravesado un per??odo de escasa actividad por situaciones de pandemia por lo que en el ??ltimo trimestre de este a??o se llegar?? a la meta esperada de acuerdo con las solicitudes de registros acad??micos que se han recibido.</Text>
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
    height:"15px"
  /*   top: "-1px", */
   
  },
  td: {
    fontSize: "8px",
    padding:"5px 2px 0px 2px",
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

export default Table2;

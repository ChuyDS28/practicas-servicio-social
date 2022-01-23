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
                flexBasis: "147px",
                textAlign: "left",
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
            {props.Unidad}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "183px",
                textAlign: "left",
              },
            ]}
          >
            {props.UnidadA}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "91px",
                textAlign: "left",
              },
            ]}
          >
            {props.Nombre}
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
            {props.Tipo}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "70px",
                textAlign: "right",
              },
            ]}
          >
            {props.Hom}
          </Text>
          <Text
            style={[
              styles.td,
              {
                flexBasis: "70px",
                textAlign: "right",
              },
            ]}
          >
            {props.Muj}
          </Text>
          <Text
            style={[
              styles.td3,
              {
                flexBasis: "72px",
                textAlign: "right",
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
        Eventos presenciales (Idiomas con registro CELEX)
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
            <Text>UNIDAD ACADÉMICA</Text>
          </View>
          <View style={styles.tableHeadCell2}>
            <Text>IDIOMA</Text>
          </View>
          <View style={styles.tableHeadCell5}>
            <Text>NO.REGISTRO CELEX</Text>
          </View>
          <View style={styles.tableHeadCell3}>
            <Text>MODALIDAD</Text>
          </View>
          <View style={styles.tableHeadCell4}>
            <Text>EVENTOS</Text>
          </View>
          <View style={styles.tableHeadCell6}>
            <Text>USUARIOS ATENDIDOS</Text>
          </View>
        </View>
       <View
          style={[styles.tableHead2, { width: "218px", marginLeft: "594px" }]}
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
               No="TOTAL"
               Unidad=""
               UnidadA=""
               Nombre=""
               Tipo="207"
               Hom="8,555"
               Muj="12,033"
               Total="20,588"
            />
         
          <Row
            No="cecyt2"
            Unidad="Ingles"
            UnidadA="*"
            Nombre="Presencial"
            Tipo="1"
            Hom="422"
            Muj="377"
            Total="799"
          />
           
           <Row
            No="cecyt2"
            Unidad="Frances"
            UnidadA="*"
            Nombre="Presencial"
            Tipo="1"
            Hom="14"
            Muj="18"
            Total="32"
          />
           
           <Row
            No="cecyt13"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXCECYT13IACT06-17"
            Nombre="Presencial"
            Tipo="1"
            Hom="22"
            Muj="54"
            Total="76"
          />
           
           <Row
            No="escatep"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXESCATIACT-16"
            Nombre="Presencial"
            Tipo="1"
            Hom="15"
            Muj="20"
            Total="35"
          />
           
           <Row
            No="cecyt7"
            Unidad="Ingles"
            UnidadA="DFLECELEXCE CYT7I ACT22-17 "
            Nombre="A Distancia"
            Tipo="3"
            Hom="751"
            Muj="823"
            Total="1,574"
          />
           
           <Row
            No="cecyt10"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXCECYT10IACT04-17"
            Nombre="A Distancia"
            Tipo="3"
            Hom="231"
            Muj="341"
            Total="572"
          />
           
           <Row
            No="cecyt13"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXCECYT13IACT06-17"
            Nombre="A Distancia"
            Tipo="2"
            Hom="309"
            Muj="466"
            Total="775"
          />
           
           <Row
            No="CET1"
            Unidad="Ingles"
            UnidadA="DFLE-CET1IACT18-17"
            Nombre="A Distancia"
            Tipo="3"
            Hom="87"
            Muj="65"
            Total="152"
          />
           
           <Row
            No="encb"
            Unidad="Ingles"
            UnidadA="DFLE- CELEXENCBI-16"
            Nombre="A Distancia"
            Tipo="18"
            Hom="132"
            Muj="262"
            Total="394"
          />
           
           <Row
            No="escatep"
            Unidad="Aleman"
            UnidadA="DFLE-CELEXESCATAACT21-18"
            Nombre="A Distancia"
            Tipo="3"
            Hom="9"
            Muj="39"
            Total="48"
          />
           
           <Row
            No="escatep"
            Unidad="Frances"
            UnidadA="DFLE-CELEXESCATFACT13-18"
            Nombre="A Distancia"
            Tipo="8"
            Hom="31"
            Muj="70"
            Total="101"
          />
           
           <Row
            No="escatep"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXESCATIACT-16"
            Nombre="A Distancia"
            Tipo="30"
            Hom="380"
            Muj="814"
            Total="1,194"
          />
           
           <Row
            No="esfm"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXESFMIACT2-20"
            Nombre="A Distancia"
            Tipo="22"
            Hom="143"
            Muj="175"
            Total="318"
          />
           
           <Row
            No="esiqie"
            Unidad="Aleman"
            UnidadA="DFLE-CELEXESIQIEA15-18"
            Nombre="A Distancia"
            Tipo="8"
            Hom="43"
            Muj="50"
            Total="93"
          />
           
           <Row
            No="esiqie"
            Unidad="Frances"
            UnidadA="DFLE-CELEXESIQIEF16-17"
            Nombre="A Distancia"
            Tipo="3"
            Hom="8"
            Muj="5"
            Total="13"
          />
           
           <Row
            No="esiqie"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXESIQIEACT01-19"
            Nombre="A Distancia"
            Tipo="15"
            Hom="679"
            Muj="530"
            Total="1,209"
          />
            <Row
            No="upiicsa"
            Unidad="Aleman"
            UnidadA="DFLE-CELEXUPIICSAA04-18"
            Nombre="A Distancia"
            Tipo="10"
            Hom="257"
            Muj="260"
            Total="519"
          />
           
           <Row
            No="upiicsa"
            Unidad="Frances"
            UnidadA="DFLE-CELEXUPIICSAF05-18"
            Nombre="A Distancia"
            Tipo="12"
            Hom="509"
            Muj="729"
            Total="1,238"
          />
           
           <Row
            No="upiicsa"
            Unidad="Ingles"
            UnidadA="DFLE-PGII-CELEXUPIICSAACT8-21"
            Nombre="A Distancia"
            Tipo="12"
            Hom="3,958"
            Muj="6,238"
            Total="10,196"
          />
           <Row
            No="upiicsa"
            Unidad="Italiano"
            UnidadA="DFLE-CELEXUPIICSAlt03-18 "
            Nombre="A Distancia"
            Tipo="10"
            Hom="98"
            Muj="170"
            Total="268"
          />
           <Row
            No="UPIIZ"
            Unidad="Ingles"
            UnidadA="DFLE-CELEXUPIIZI01-18"
            Nombre="A Distancia"
            Tipo="11"
            Hom="212"
            Muj="198"
            Total="410"
          />
            <Row
            No="CVDR Campeche"
            Unidad="Ingles"
            UnidadA="DFLE-CELEX-CVDR-CAMPECHE-IACT-2020"
            Nombre="A Distancia"
            Tipo="10"
            Hom="133"
            Muj="110"
            Total="243"
          />
            <Row
            No="CVDR Mochis"
            Unidad="Ingles"
            UnidadA="DFLE-CELEX-CVDR-MOCHIS-IACT-2020"
            Nombre="A Distancia"
            Tipo="20"
            Hom="112"
            Muj="219"
            Total="331"
          />
           
          
           
           
         

         
          
           
         
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
      <br />
      <Text style={styles.texto}>
      *Respecto al Número de Registro CELEX, éste se les solicita a las Unidades Académicas lo anoten en en Sistema de Educación Permanente (http://aplicaciones.dec.ipn.mx/autoevaluacion o
http//148.204.110.122/autoevaluacion), es responsabilidad de la Escuela y/o Centro, el obtenerlo y mantenerlo vigente ante la Dirección de Formación de Lenguas Extranjeras.</Text>

      <Firmas />
    </View>
  );
};

const styles = StyleSheet.create({
  texto:{
    display: "flex",
    fontSize:"8px",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
    top: "5px",
  },
  tr: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "nowrap",
 /*    top: "-1px", */
    height: "10px",
  },
  td: {
    fontSize: "8px",
    flexGrow: "1",
/*     padding: "3px", */
    borderBottom: "1px solid black",
    padding: "1px 2px 0px 2px",
    borderLeft: "1px solid black",
  },
  td3: {
    fontSize: "8px",
    flexGrow: "1",
    padding: "1px 2px 0px 2px",
/*     padding: "3px", */
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft:"1px solid black",
  },
  td2: {
    fontSize: "8px",
    flexGrow: "1",
 /*    padding: "3px", */
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
    height: "30px",
    flexDirection: "row",
   
   borderLeft: "1px solid black", 
   borderTop: "1px solid black", 
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    borderRight:"1px black solid",
  
    height: "15px",
    flexDirection: "row",
    marginTop: "-14px",
    
    
  
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
    flexBasis: "160px",
    padding: "10px 2px 0px 2px",
    height: "30px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
  /*   padding: "10px 2px 0px 2px", */
    fontSize: "8px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
    borderBottom: "1px solid black",
    flexBasis: "90px",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
    fontSize: "8px",
    /* padding: "10px 2px 0px 2px", */
    height:"30px"
  },
  tableHeadCell3: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "100px",
     padding: "10px 2px 0px 2px",
    textAlign: "center",
    fontSize: "8px",
    height:"30px"
  },
  tableHeadCell4: {
    flexBasis: "90px",
    borderBottom: "1px solid black",
    borderRight:"1px solid black",
    fontSize: "8px",
    height: "30px",
    padding: "10px 2px 0px 2px",
    textAlign: "center",
    /* padding: "12px 2px 0px 2px", */
  },
  tableHeadCell5: {
    flexBasis: "200px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    fontSize: "8px",
    padding: "10px 2px 0px 2px",
    height: "30px",
    textAlign: "center",
   /*  padding: "12px 2px 0px 2px", */
  },
  tableHeadCell6: {
    borderRight: "1px solid black",

    borderBottom: "1px solid black",
    flexBasis: "234px",
    textAlign: "center",
    fontSize: "8px",
    height: "15px",
   /*  padding: "3px 2px 0px 2px", */
  },
  tableHeadCell7: {
    flexBasis: "146px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
    height: "15px",
  /*   padding: "3px 2px 0px 2px", */
  },
  tableHeadCell8: {
    flexBasis: "73px", 
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    padding: "3px 0px 0px 5px",
    textAlign: "center",
    fontSize: "8px",
    height: "15px",

  /*   padding: "3px 2px 0px 2px", */
  },
  tableHeadCell9: {
    flexBasis: "73px", 
    borderBottom: "1px solid black",
    padding: "3px 2px 0px 2px",
    textAlign: "center",
    fontSize: "8px",
    height: "15px",
  /*   padding: "3px 2px 0px 2px", */
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
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
                textAlign: "left",
                padding:"2px 20px 0px 3px"
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
          marginTop: "-2px",
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
          marginTop: "1x",
        }}
      >
        NIVEL MEDIO SUPERIOR
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
            <Text>NOMBRE DEL PROGRAMA</Text>
            <Text>ACAD??MICO</Text>
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
            Nombre="Abordaje de envejecimiento como fenomeno multidimencional desde una
            perspectiva interdisciplinaria"
            NoR="Curso"
            Hom="422"
            Muj="377"
            Total="799"
          />

          <Row
            No="2"
            Unidad="EMNH"
            Nombre="Curso Introductorio a la evaluaci??n y rehabilitaci??n del paciente con baja
            vision"
            Tipo="B??sico (Presencial)"
            NoR="Taller"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="3"
            Unidad="ESIA ZAC"
            Nombre="Dolor: generalidades y aplicaciones"
            Tipo="B??sico (Presencial)"
            NoR="Curso"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="4"
            Unidad="CECyT 2"
            Nombre="Importancia de la Investigaci??n en Enfermer??a"
            Tipo="B??sico"
            NoR="Curso"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="5"
            Unidad="CECyT 2"
            Nombre="La Salud a nivel mundial"
            Tipo="B??sico (Presencial)"
            NoR="Diplomado"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="6"
            Unidad="CECyT 2"
            Nombre="Lentes de contacto especializados; excelente soluci??n visual; con gran
            oportunidad de desarrollo profesional"
            Tipo=""
            NoR="Diplomado"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="7"
            Unidad="CECyT 2"
            Nombre="Estrategias de comunicaci??n y motivaci??n para el cambio de h??bitos"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="8"
            Unidad="CECyT 2"
            Nombre="Emociones y la reproducci??n"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="9"
            Unidad="CECyT 2"
            Nombre="Herramientas para la educaci??n a distancia: Microsoft Teams "
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="10"
            Unidad="CECyT 2"
            Nombre="Enfoque Empresarial en el ??rea de la Salud"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="11"
            Unidad="CECyT 2"
            Nombre="Enfoque Empresarial en el ??rea de la Salud"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="12"
            Unidad="CECyT 2"
            Nombre="Abordaje Optometrico en Baja Visi??n"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="13"
            Unidad="CECyT 2"
            Nombre="Hematolog??a y diagnostico en el laboratorio"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="14"
            Unidad="CECyT 2"
            Nombre="Contaminacion atmosferica y cambio climatico"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="15"
            Unidad="CECyT 2"
            Nombre="Temas selectos de ecolog??a aplicada"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="16"
            Unidad="CECyT 2"
            Nombre="Manejo de Residuos Peligrosos Biol??gico Infecciosos"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="17"
            Unidad="CECyT 2"
            Nombre="EXCEL BASICO"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
 <Row
            No="18"
            Unidad="CECyT 2"
            Nombre="EXCEL INTERMEDIO"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="19"
            Unidad="CECyT 2"
            Nombre="EXCEL AVANZADO"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="20"
            Unidad="CECyT 2"
            Nombre="Ingenier??a de Fluidos de Control "
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
             <Row
            No="21"
            Unidad="CECyT 2"
            Nombre="Perforaci??n, Terminaci??n y Reparaci??n de Pozos Petroleros"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="22"
            Unidad="CECyT 2"
            Nombre="Estrategias Did??cticas Apoyadas con Tecnolog??as Digitales para la Creaci??n
            de Contenido Atractivo en Moodle"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="23"
            Unidad="CECyT 2"
            Nombre="Herramientas para la Educaci??n a Distancia:Microsoft Teams"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="24"
            Unidad="CECyT 2"
            Nombre="Rob??tica Industrial: Generalidades y puntos clave"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="25"
            Unidad="CECyT 2"
            Nombre="Rob??tica Industrial aplicada en pintura automotriz"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="26"
            Unidad="CECyT 2"
            Nombre="Propiedades Mec??nicas del Acero Estructural en M??xico"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
          <Row
            No="27"
            Unidad="CECyT 2"
            Nombre="Integraci??n Tecnol??gica en el Centro de Aprendizaje e Innovaci??n RHEEMESIME Azcapotzalco"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
             <Row
            No="28"
            Unidad="CECyT 2"
            Nombre="Basquetbol"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
             <Row
            No="29"
            Unidad="CECyT 2"
            Nombre="Fut7"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="30"
            Unidad="CECyT 2"
            Nombre="Karate"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
          />
           <Row
            No="31"
            Unidad="CECyT 2"
            Nombre="Running y Cross Training"
            Tipo="B??sico (Presencial)"
            NoR="Seminario"
            Hom="14"
            Muj="14"
            Total="32"
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
            <Text>La impartici??n de eventos formativos se ha comenzado a activar despu??s de haber atravesado un per??odo de escasa actividad por situaciones de pandemia por lo que en el ??ltimo trimestre de este a??o se llegar?? a la meta esperada de acuerdo con las solicitudes de registros acad??micos que se han recibido.</Text>
           </View>
          </View>   */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barra2: {
    backgroundColor: "#9c9c9c",
  },
  texto: {
    display: "flex",
    fontSize: "8px",
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
    fontSize: "7px",
    padding: "3px 1px 0px 2px",
    flexGrow: "1",
    /*  padding: "3px", */
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
  },
  td3: {
    fontSize: "7px",
    flexGrow: "1",
    backgroundColor: "#cdcdcd",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
  },
  td2: {
    fontSize: "7px",
    flexGrow: "1",
/*     padding: "3px", */
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
    height: "32px",
    flexDirection: "row",
    borderLeft: "1px solid black",
    borderBottom:"1px solid black",
    borderTop: "1px solid black",
  },
  tableHead2: {
    display: "flex",
    alignItems: "flex-start",
    borderRight: "1px black solid",
    height: "15px",
    flexDirection: "row",
    marginTop: "-15px",
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
    height: "31px",
    borderRight: "1px solid black",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
    fontSize: "7px",
    /* ,
   textAlign:"center",
   lineHeight:"15px",
  
   border:"2px solid black"  */
  },
  tableHeadCell2: {
  
    borderRight: "1px solid black",
    flexBasis: "180px",
    textAlign: "center",
    fontSize: "7px",
    padding: "10px 2px 0px 2px",
    height: "31px",
  },
  tableHeadCell3: {
    borderRight: "1px solid black",

    flexBasis: "240px",
    padding: "5px 5px 0px 5px",
    textAlign: "center",
    fontSize: "7px",
    height: "31px",
  },
  tableHeadCell4: {
    flexBasis: "110px",
    borderRight: "1px solid black",
    fontSize: "7px",
    height: "31px",
    textAlign: "center",
    padding: "10px 2px 0px 2px",
  },
  tableHeadCell5: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    fontSize: "7px",
    height: "31px",
    textAlign: "center",
    padding: "5px 2px 0px 2px",
  },
  tableHeadCell6: {
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    flexBasis: "234px",
    textAlign: "center",
    fontSize: "7px",
    height: "16px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell7: {
    flexBasis: "146px",
    top:"-3px",
    borderRight: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "16px",
  },
  tableHeadCell8: {
    flexBasis: "91px",
    borderRight: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "15px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell9: {
    flexBasis: "85.5px",
    textAlign: "center",
    fontSize: "7px",
    height: "15px",
    padding: "3px 2px 0px 2px",
  },
  tableHeadCell10: {
    flexBasis: "95px",
    borderRight: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "32px",
  },
  tableHeadCell11: {
    flexBasis: "61px",
    borderRight: "1px solid black",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "7px",
    height: "32px",
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

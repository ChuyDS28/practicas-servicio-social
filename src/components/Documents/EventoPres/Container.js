import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Table from "./Table"
import Table2 from "./Table2"
import Header from "../Header";
import Table3 from "./Table3";
/*import Table4 from "./Table4"
import Table5 from "./Table5"
import Table6 from "./Table6"
import Table7 from "./Table7"
import Table8 from "./Table8"
import Table9 from "./Table9"
import Table10 from "./Table10"
import Table11 from "./Table11"
import Table12 from "./Table12" */

const styles = StyleSheet.create({
    body: {
      padding: "15px",
      paddingBottom: 0,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 11,
      bottom: 20,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
    firma: {},
  });
  const Container = (props) => {
    return (
      <Document>
        <Page size="A4" style={styles.body} orientation="landscape" >
          <Header />
          <Table data={[]} />
          <Table2 data={[]} />
         <Table3 data={[]} />
           {/*     <Table4 data={[]} />
          <Table5 data={[]} />
          <Table6 data={[]} />
          <Table7 data={[]} />
          <Table8 data={[]} />
          <Table9 data={[]} />
          <Table10 data={[]} />
          <Table11 data={[]} />
          <Table12 data={[]} /> */}
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
     
      </Document>
    );
  };
  
  export default Container;
  
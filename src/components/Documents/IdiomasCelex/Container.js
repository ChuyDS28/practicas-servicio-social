import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Table from "./Table"
import Header from "../Header";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import Table5 from "./Table5";
import Table6 from "./Table6";
const styles = StyleSheet.create({
    body: {
      padding: "15px",
      paddingBottom: 64,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
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
          <Table4 data={[]} />
          <Table5 data={[]} />
          <Table6 data={[]} />
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
  
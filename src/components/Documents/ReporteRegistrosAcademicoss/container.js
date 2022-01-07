import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Header from "../Header";
import Table2 from "./Table2";
import Table1 from "./Table1";

const styles = StyleSheet.create({
  body: {
    padding: "15px",
    paddingBottom: 65,
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
        <Table1 data={[]} />
        <Table2 data={[]} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      {/*   <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table3 data={[]} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page size="A4" style={styles.body} orientation="landscape">
        <Header />
        <Table2 data={[]} />

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page> */}
    </Document>
  );
};

export default Container;

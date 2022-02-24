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
import Header from "../Header";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import Table5 from "./Table5";
const Container = (props) => {
  return (
    <Document>
      {props.data && (
        <Page size="A4" style={styles.body} orientation="landscape">
          <Header />
          <Table1 data={props.data} />
          <Table2 data={props.data} />
          <Table3 data={props.data} />
          <Table4 data={props.data} />
          <Table5 data={props.data} />
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: "15px",
    paddingBottom: 50,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 11,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
export default Container;

import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface MyDocumentProps {
  title: string;
  content: string;
  tableData: { name: string; age: number }[];
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  text: {
    fontSize: 12,
    textAlign: 'justify',
    marginVertical: 10
  },
  tableHeader: {
    backgroundColor: '#e6e6e6',
    padding: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  tableRow: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  tableCell: {
    flex: 1,
    textAlign: 'center'
  }
});

const MyDocument = (props: MyDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.content}</Text>
        <View
          style={{ display: 'flex', flexDirection: 'row', marginVertical: 10 }}
        >
          <View style={[styles.tableHeader, styles.tableCell]}>
            <Text>Name</Text>
          </View>
          <View style={[styles.tableHeader, styles.tableCell]}>
            <Text>Age</Text>
          </View>
        </View>
        {props.tableData.map((data, index) => (
          <View
            style={{ display: 'flex', flexDirection: 'row', marginVertical: 5 }}
            key={index}
          >
            <View style={[styles.tableRow, styles.tableCell]}>
              <Text>{data.name}</Text>
            </View>
            <View style={[styles.tableRow, styles.tableCell]}>
              <Text style={{ color: 'maroon' }}>{data.age}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;

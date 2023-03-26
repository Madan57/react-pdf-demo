import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import html2canvas from 'html2canvas';
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import axios from 'axios';
import * as FileSaver from 'file-saver';
import { color } from '@mui/system';

const PDFGenerator = () => {
  const [pdfUrl, setPdfUrl] = React.useState<string | null>(null);

  const [file, setFile] = useState<Blob | string | null>(null);

  console.log('check file here', file);

  // const generateAndUploadPDF = async () => {
  //   const doc = new jsPDF();

  //   // Set the font size and line height for your text
  //   const fontSize = 12;
  //   const lineHeight = 1.2;

  //   // Add a header to each page

  //   // Add a footer to each page

  //   // Add some text to the first page
  //   doc.text('Agreement Title', 10, 10);
  //   doc.text('Agreement Text', 10, 20);

  //   doc.addImage('my-image.jpg', 'JPEG', 10, 10, 100, 100);

  //   // Add a signature field to the fourth page
  //   doc.addPage();
  //   // save the PDF document
  //   doc.save('agreement file name.pdf');

  //   // Save the document
  //   const pdfBlob = doc.output('blob');

  //   // Save PDF file using FileSaver.js
  //   FileSaver.saveAs(pdfBlob, 'agreements.pdf');

  //   console.log('check pdf file upload', pdfBlob);

  //   // Upload PDF file to server using axios
  //   const formData = new FormData();
  //   formData.append('pdfFile', pdfBlob, 'agreements.pdf');

  //   console.log('check pdf file url', pdfUrl);

  //   try {
  //     const response = await axios.post('/upload-pdf', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });

  //     console.log('check response data here', response.data.pdfUrl);

  //     setPdfUrl(response.data.pdfUrl);
  //     console.log('File uploaded successfully');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Define styles
  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      fontSize: 12,
      paddingTop: 30,
      paddingBottom: 50,
      paddingHorizontal: 50
    },
    section: {
      marginBottom: 10
    },
    heading: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black'
    },
    text: {
      marginBottom: 5,
      textAlign: 'justify'
    },
    bullet: {
      flexDirection: 'row',
      marginBottom: 5
    },
    bulletText: {
      marginLeft: 5,
      textAlign: 'justify'
    }
  });

  // Define dummy data
  const merchantName = 'Acme Inc.';
  const merchantAddress = '123 Main St, Anytown USA';
  const customerName = 'John Smith';
  const date = 'March 24, 2023';
  const agreementTerms = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Aliquam erat volutpat. Proin non est non odio lacinia commodo.',
    'Sed et orci quis enim aliquam eleifend eu in diam.',
    'Suspendisse tincidunt felis ac urna varius, nec bibendum nibh hendrerit.'
  ];

  const handleUpload = (blob: Blob) => {
    console.log('post blob file on post api', blob);
    console.log('check file', file);
    const formData = new FormData();
    formData.append('file', blob);

    axios
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log('File uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
      {pdfUrl ? (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          Download PDF
        </a>
      ) : (
        <PDFDownloadLink
          document={
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.heading}>Merchants Agreements</Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, iste!
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <h1>Heading</h1>
                </View>
                <View style={styles.section}>
                  <Text
                    style={{
                      color: 'maroon',
                      fontSize: '16px',
                      marginBottom: '1rem'
                    }}
                  >
                    Merchants Agreements
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, iste!
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam erat volutpat. Proin non est non odio lacinia
                    commodo. Sed et orci quis enim aliquam eleifend eu in diam.
                    Suspendisse tincidunt felis ac urna varius, nec bibendum
                    nibh hendrerit. Sed venenatis ipsum ac ex egestas, ut
                    sollicitudin orci blandit. Donec lobortis odio eget augue
                    hendrerit pretium. Integer vel dolor non est bibendum
                    interdum at sed velit.
                  </Text>
                  <h1>Heading</h1>
                </View>
              </Page>
              <Page size="A4" />
            </Document>
          }
          fileName="agreements.pdf"
        >
          {({ blob, url, loading, error }) => {
            if (blob) {
              console.log('PDF blob:', blob);
              setFile(blob);
            }
            return (
              <button onClick={() => blob && handleUpload(blob)}>
                Generate and upload pdf file
              </button>
            );
          }}
        </PDFDownloadLink>
      )}
      {/* <button onClick={generateAndUploadPDF}>Generate and Upload PDF</button> */}
    </div>
  );
};

export default PDFGenerator;

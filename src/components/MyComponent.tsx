import React from 'react';
import axios from 'axios';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text } from '@react-pdf/renderer';
import { jsPDF } from 'jspdf';

const MyDocument = () => (
  <Document>
    <Page>
      <Text>Example PDF Document</Text>
    </Page>
  </Document>
);

const MyComponent = () => {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Example PDF Document', 10, 10);
    const pdfData = doc.output();
    const formData = new FormData();
    formData.append(
      'pdfFile',
      new Blob([pdfData], { type: 'application/pdf' }),
      'example.pdf'
    );
    axios
      .post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        console.log('PDF uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading PDF:', error);
      });
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download PDF</button>
      <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default MyComponent;

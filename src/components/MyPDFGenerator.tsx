import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';
import MyPDFTemplate from './MyPDFTemplate';

const MyPDFGenerator: React.FC = () => {
  const pdfContent = ReactDOMServer.renderToStaticMarkup(
    <MyPDFTemplate text="Hello, world!" />
  );

  return (
    <PDFViewer>
      <Document>
        <Page>
          <View>
            <Text>{pdfContent}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyPDFGenerator;

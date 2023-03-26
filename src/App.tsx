import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

import { PDFDownloadLink } from '@react-pdf/renderer';

import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './components/MyDocument';
import PDFGenerator from './components/PDFGenerator';
import MyComponent from './components/MyComponent';

function App() {
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState([
    { name: 'John Doe', age: 25 },
    { name: 'Jane Doe', age: 30 },
    { name: 'Bob Smith', age: 40 }
  ]);

  // const handleFileUpload = (event: any) => {
  //   const uploadedFile = event.target.files[0];
  //   setFile(uploadedFile);
  // };

  // const handleFileUpload = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   const uploadedFile = event.currentTarget.files?.[0];
  //   if (uploadedFile) {
  //     // setFile(uploadedFile);
  //   }
  // };

  const handleRenderSuccess = (pdf: any) => {
    console.log('check event fire', pdf);
    pdf.toBlob((blob: any) => {
      setFile((prevFile) => blob);

      // Create a FormData object to store the file data
      const formData = new FormData();
      formData.append('file', blob);

      console.log('check file here', file);

      fetch('/upload', {
        method: 'POST',
        body: formData
      })
        .then((response) => {})
        .catch((error) => {});
    });
  };

  return (
    <div className="App">
      {/* <div>
        <PDFDownloadLink
          onClick={handleRenderSuccess}
          document={
            <MyDocument
              title="My PDF Document"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              tableData={tableData}
            />
          }
          fileName="aggrements.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      </div> */}
      <PDFGenerator />
    </div>
  );
}

export default App;

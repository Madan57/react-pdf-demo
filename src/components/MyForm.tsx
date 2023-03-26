import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import html2canvas from 'html2canvas';

const DynamicPDFForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // const generatePDF = () => {
  //   const input = formRef.current!;

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('aggrements.pdf');
  //   });
  // };

  // const generatePDF = () => {
  //   const input = formRef.current!;

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  //     // Get the values of the form inputs
  //     const nameNode = input.elements.namedItem('name');
  //     const emailNode = input.elements.namedItem('email');

  //     let name = '';
  //     let email = '';

  //     if (nameNode instanceof HTMLInputElement) {
  //       name = nameNode.value;
  //     }

  //     if (emailNode instanceof HTMLInputElement) {
  //       email = emailNode.value;
  //     }

  //     // Add the text to the PDF
  //     pdf.setFontSize(14);
  //     pdf.text(`Hello ${name}, your email is ${email}`, 10, pdfHeight - 20);

  //     pdf.save('aggrements.pdf');
  //   });
  // };

  // const generatePDF = () => {
  //   const input = formRef.current!;

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  //     // Get the values of the form inputs
  //     const nameNode = input.elements.namedItem('name');
  //     const emailNode = input.elements.namedItem('email');

  //     let name = '';
  //     let email = '';

  //     if (nameNode instanceof HTMLInputElement) {
  //       name = nameNode.value;
  //     }

  //     if (emailNode instanceof HTMLInputElement) {
  //       email = emailNode.value;
  //     }

  //     // Add the text to the PDF
  //     pdf.setFontSize(10);
  //     pdf.text(`Hello ${name}, your email is ${email}`, 10, pdfHeight - 20);
  //     pdf.setFontSize(12);
  //     pdf.text('Static field 1: Some text goes here', 10, pdfHeight - 40);
  //     pdf.text('Static field 2: More text goes here', 10, pdfHeight - 55);

  //     pdf.save('aggrements.pdf');
  //   });
  // };

  // const generatePDF = () => {
  //   const input = formRef.current!;

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  //     // Get the values of the form inputs
  //     const nameNode = input.elements.namedItem('name');
  //     const emailNode = input.elements.namedItem('email');

  //     let name = '';
  //     let email = '';

  //     if (nameNode instanceof HTMLInputElement) {
  //       name = nameNode.value;
  //     }

  //     if (emailNode instanceof HTMLInputElement) {
  //       email = emailNode.value;
  //     }

  //     // Add the text to the PDF
  //     pdf.setFont('helvetica', 'bold');
  //     pdf.setFontSize(16);
  //     pdf.text(`Hello ${name}, your email is ${email}`, 10, pdfHeight - 20);
  //     pdf.setFont('helvetica', 'normal');
  //     pdf.setFontSize(12);
  //     pdf.text('Static field 1: Some text goes here', 10, pdfHeight - 40);
  //     pdf.text('Static field 2: More text goes here', 10, pdfHeight - 55);

  //     pdf.save('aggrements.pdf');
  //   });
  // };

  // const generatePDF = () => {
  //   const input = formRef.current!;
  //   const nameInput = input.elements.namedItem('name') as HTMLInputElement;
  //   const emailInput = input.elements.namedItem('email') as HTMLInputElement;

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  //     pdf.setFontSize(14);

  //     pdf.setTextColor(0, 0, 0);

  //     pdf.setFontSize(16);
  //     pdf.text('Agreement:', 20, 20);
  //     pdf.setTextColor(128, 0, 0);

  //     pdf.text(
  //       `Hello ${nameInput.value}, your email is ${emailInput.value}.`,
  //       20,
  //       30
  //     );

  //     pdf.setFontSize(12);
  //     pdf.setTextColor(0, 128, 0);

  //     pdf.text('Static field 1', 20, 50);

  //     pdf.setTextColor(0, 191, 255);

  //     pdf.text('Static field 2', 20, 60);

  //     // Create a static table
  //     const headers = [['Name', 'Email', 'Message']];
  //     const data = [
  //       ['John Doe', 'john@example.com', 'Lorem ipsum dolor sit amet']
  //     ];
  //     autoTable(pdf, {
  //       head: headers,
  //       body: data,
  //       startY: 80,
  //       margin: { top: 10, bottom: 10 }
  //     });

  //     pdf.save('aggrements.pdf');
  //   });
  // };

  const generatePDF = () => {
    const input = formRef.current!;
    const nameInput = input.elements.namedItem('name') as HTMLInputElement;
    const emailInput = input.elements.namedItem('email') as HTMLInputElement;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0);

      pdf.setFontSize(16);
      pdf.text('Agreement:', 20, 20);
      pdf.setTextColor(128, 0, 0);

      pdf.text(
        `Hello ${nameInput.value}, your email is ${emailInput.value}.`,
        20,
        30
      );

      pdf.setFontSize(12);
      pdf.setTextColor(0, 128, 0);

      pdf.text('Static field 1', 20, 50);

      pdf.setTextColor(0, 191, 255);

      pdf.text('Static field 2', 20, 60);

      // Create a dynamic table
      const dynamicHeaders = [['Name', 'Email', 'Message']];
      const dynamicData = [
        ['John Doe', 'john@example.com', 'Lorem ipsum dolor sit amet']
      ];
      autoTable(pdf, {
        head: dynamicHeaders,
        body: dynamicData,
        startY: 80,
        margin: { top: 10, bottom: 10 }
      });

      // Create a hardcoded table
      const hardcodedHeaders = [['Agreement', 'Signed By']];
      const hardcodedData = [
        ['Agreement 1', 'John Doe'],
        ['Agreement 2', 'Jane Smith']
      ];
      autoTable(pdf, {
        head: hardcodedHeaders,
        margin: { top: 10, bottom: 10 }
      });

      pdf.save('agreements_with_dynamic_data.pdf');
    });
  };

  return (
    <>
      <div className="form-container">
        <form ref={formRef}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
        </form>

        <button onClick={generatePDF}>Download PDF</button>
      </div>
    </>
  );
};

export default DynamicPDFForm;

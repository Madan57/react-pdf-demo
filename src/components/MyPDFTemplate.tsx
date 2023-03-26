import React from 'react';

interface Props {
  text: string;
}

const MyPDFTemplate: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default MyPDFTemplate;

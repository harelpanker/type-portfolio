import React from 'react';
import cv from '../../public/files/Harel Panker CV - 2021.pdf';

const CVButton = () => {
  return (
    <a href={cv} download>
      CVButton
    </a>
  );
};

export default CVButton;

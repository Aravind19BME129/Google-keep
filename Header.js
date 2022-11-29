import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css";
const header = () => {
  return (
    <header>
      <h1>
      <LockIcon /> G-KEEP</h1>
      <h2>
        <AccountCircleIcon />
      </h2>
    </header>
  );
};

export default header
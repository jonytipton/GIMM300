import React from 'react';
import './App.css';
import MerchantsForm from './MerchantsForm';
import MerchantsTable from './MerchantsTable';

function Merchants() {
  return (
    <div>
        <MerchantsForm/>
        <MerchantsTable/>
    </div>
  );
}

export default Merchants;
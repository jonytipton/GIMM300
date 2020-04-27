import React from 'react';
import './App.css';
   
function Merchants() {
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.currentTarget.merchantId.value)
      console.log(event.currentTarget.merchantName.value)
      console.log(event.currentTarget.merchantAddress.value)
      console.log(event.currentTarget.isStocked.value)
    }
    const handleChange = event => {
      let isDisabled = false
      if (!event.currentTarget.merchantId.value) isDisabled = true
      if (event.currentTarget.merchantName.value <= 13) isDisabled = true
      event.currentTarget.submit.disabled = isDisabled
    }
    return (
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
          Merchant's ID:
          <input type="text" placeholder="WM64" name="merchantId"/>
        </label>
        <label>
          Merchant's Name:
          <input type="text" placeholder="Walmart Store 64" name="merchantName" />
        </label>
        <label>
          Address:
          <input type="text" placeholder="1122 3rd St. Boise, ID 83706" name="merchantAddress" />
        </label>
        <label>
          Stock:
          <input type="text" placeholder="In/Out" name="isStocked" />
        </label>
        <div>
          <input type="submit" value="Submit" name="submit" disabled />
        </div>
      </form>
    );
  }

  export default Merchants

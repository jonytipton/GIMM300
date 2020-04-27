import React from 'react';
import './App.css';

export default function Merchants() {

    return(
        <form>
            <input type="text" placeholder="Merchant's ID" name="merchantId" />
            <input type="text" placeholder="MerchantName" name="merchantName" />
            <input type="text" placeholder="Merchant's Address" name="merchantAddress" />
            <input type="text" placeholder="Yes/No" name="isStocked" />

        </form>
    )
}
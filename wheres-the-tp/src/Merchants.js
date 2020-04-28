import React from 'react';
import './App.css';
import MerchantsForm from './MerchantsForm';


class Merchants extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            merchants: [
                {
                    id: 'TarJay231',
                    name: 'Target Store 231',
                    address: 'Targee Rd',
                    stock: false
                },
                {
                    id: 'Alb23',
                    name: 'Albertsons Store 145',
                    address: 'Overland',
                    stock: false
                }
            ]
        };
    }


    newMerchant=(merchantData)=>{
        this.setState({merchants:merchantData});
        //this is logging correctly but i cant capture it in the merchants object
        console.log(merchantData.merchantAddress.value)

    }
   
    render(){
        return(
            <div>
                <MerchantsForm getNewMerchant={this.newMerchant.bind(this)}/>
                
                <h3>{merchantData.merchantAddress.value}</h3>
               
            </div>
        );      
    }
}

export default Merchants
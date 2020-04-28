import React from 'react';
import './App.css';
import MerchantsForm from './MerchantsForm';


class Merchants extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            merchants: [
                {
                    merchantID: 'TarJay231',
                    merchantName: 'Target Store 231',
                    merchantAddress: 'Targee Rd',
                    isStocked: false
                },
                {
                    merchantID: 'Alb23',
                    merchantName: 'Albertsons Store 145',
                    merchantAddress: 'Overland',
                    isStocked: false
                }
            ]
        };
    }


    parentFunction=(data_from_child)=>{
        //console.log(data_from_child.merchantName.value);
        //this.newMerchant.merchantID = data_from_child.merchantId.value;

        this.setState({merchants:data_from_child});
        //console.log(this.newMerchant.merchantId);
    }
   
    render(){
        return(
            <div>
                <MerchantsForm functionCallFromParent={this.parentFunction.bind(this)}/>
                
               
            </div>
        );      
    }
// <Todos merchants={this.state.merchants} />

}

export default Merchants
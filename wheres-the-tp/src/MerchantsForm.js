import React from 'react';
import './App.css';
   
class MerchantsForm extends React.Component {

    childFunction=(e)=>{
        e.preventDefault();
        this.props.functionCallFromParent(e.currentTarget);
    }

    render(){
        return (
            <form onSubmit={this.childFunction.bind(this)} >
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
              <input type="submit" value="Submit" name="submit" />
            </div>
          </form>
        );
    }
  }

  export default MerchantsForm

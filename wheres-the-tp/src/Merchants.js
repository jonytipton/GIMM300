import React from "react";
import Firebase from "firebase";
import config from "./config";
import {Link} from 'react-router-dom';

let isDisabled = true;

class App extends React.Component {
  constructor(props) {
    super(props);
    if(!Firebase.apps.length) {
        Firebase.initializeApp(config);
    }

    this.state = {
      developers: []
    };
  }


  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let name = this.refs.name.value;
    let stock = this.refs.stock.value;
    let address = this.refs.address.value;
    let uid = this.refs.uid.value;

    if (uid && name && stock && address) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].name = name;
      developers[devIndex].stock = stock;
      developers[devIndex].address = address;
      this.setState({ developers });
    } else if (name && stock && address) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, name, stock, address });
      this.setState({ developers });
    }

    this.refs.name.value = "";
    this.refs.stock.value = "";
    this.refs.address.value = "";
    this.refs.uid.value = "";
  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.name.value = developer.name;
    this.refs.stock.value = developer.stock;
    this.refs.address.value = developer.address;
  };


  verifyKey = (e) => {
    e.preventDefault();
    if(e.currentTarget.accessKey.value === 'pug life'){
      isDisabled = false;
    } else{
      isDisabled = true;
    }
    this.forceUpdate();        
  }

//todo either make yes/no the only possible answers or get radio boxes working
  render() {
    const { developers } = this.state;
    return (
      <div>
        <div className="col-xl-12">
            <h1>Merchant Stock Form</h1>
          </div>
        <div className={!isDisabled ? 'invisible' : null}>       
          <div>            
            <div className="card">
              <form onSubmit={this.verifyKey.bind(this)}>
                <label className="card-body">
                <h3>Please Enter Access Key Before Editing</h3>
                <input type="password" placeholder="Key" name="accessKey"/>
                <button
                type="submit"
                >Verify</button>
                </label>
              </form>
              <div>
                <ul className = 'call-out-link'>
                <Link to = '/get-key'>
                <li>Need a key?</li>
                </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      <React.Fragment> 
        <div className={isDisabled ? 'invisible' : null}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2>Adjust Your Stock Data</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title" >{developer.name}</h5>
                    <p className="card-text"  >In Stock: {developer.stock}</p>
                    <p className="card-text"  >Address: <br/>{developer.address}</p>  
                    <button
                      disabled = {isDisabled}
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link" 
                    >
                      Delete
                    </button>
                    <button
                      disabled = {isDisabled}
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link" 
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h2>Add Your Stock Data</h2>
              <form onSubmit={this.handleSubmit}>       
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Merchant Name</label>
                    <input
                      disabled = {isDisabled}
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Merchant Address</label>
                    <input
                      disabled = {isDisabled}
                      type="text"
                      ref="address"
                      className="form-control"
                      placeholder="1111 North St. Boise, ID"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label>Is there toilet paper?</label>
                    <input
                      disabled = {isDisabled}
                      type="text"
                      ref="stock"
                      className="form-control"
                      placeholder="Yes/No"
                    />
                  </div>
                  
                </div>
                <button type="submit" value = "Submit" name = "submit" disabled = {isDisabled} className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
            </div>
          </div>
        </div>
        </div>   
        
      </React.Fragment>

      </div>
      
    );
  }
}

export default App;

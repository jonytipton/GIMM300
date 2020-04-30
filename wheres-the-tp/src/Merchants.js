import React from "react";
import Firebase from "firebase";
import config from "./config";

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
    let role = this.refs.role.value;
    let uid = this.refs.uid.value;

    if (uid && name && role) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].name = name;
      developers[devIndex].role = role;
      this.setState({ developers });
    } else if (name && role) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, name, role });
      this.setState({ developers });
    }

    this.refs.name.value = "";
    this.refs.role.value = "";
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
    this.refs.role.value = developer.role;
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


  render() {
    const { developers } = this.state;
    return (
      <div>
        <div>
                        
        <div className="card">
         <form onSubmit={this.verifyKey.bind(this)}>
         <label className="card-body">
           <h3>Please Enter Access Key Before Editing</h3>
           <input type="text" placeholder="Key" name="accessKey"/>
           <button
             type="submit"
             //todo validate the key, if good enable other buttons
             >Verify</button>
         </label>
         </form>
     </div>
        </div>
      <React.Fragment>   
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Merchant Stock Form</h1>
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
                    <h5 className="card-title" /*change style w/o key*/ >{developer.name}</h5>
                    <p className="card-text" /*change style w/o key*/ >{developer.role}</p> 
                    <button
                    //disable if key not entered
                      disabled = {isDisabled}
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link" //change style w/o key
                    >
                      Delete
                    </button>
                    <button
                    //disable if key not entered
                      disabled = {isDisabled}
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link" //change style w/o key
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
              <h1>Add new stock levels here</h1>
              <form onSubmit={this.handleSubmit}>       
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      disabled = {isDisabled}
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Role</label>
                    <input
                      disabled = {isDisabled}
                      type="text"
                      ref="role"
                      className="form-control"
                      placeholder="Role"
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
      </React.Fragment>

      </div>
      
    );
  }
}

export default App;

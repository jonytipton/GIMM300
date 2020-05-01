import React from 'react';
import './App.css';
import Firebase from "firebase";
import config from "./config";

class Tplocator extends React.Component {
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


  render() {
    const { developers } = this.state;
    return (
        <div className="img">
        <div className="row">
          <div className="col-xl-12">
            <div>
            <h1>Locations with Toilet Paper</h1>
            <hr/>
            </div>
            {developers.map(developer => (
              <div className={developer.stock === 'No' ? "invisible" : null}>
                <div
                  key={developer.uid}
                  className="card merchant-card"
                  >
                  <div className="card-body">
                    <h5 className="card-title" >{developer.name}</h5>
                    <p className="card-text"  >Address: <br/>{developer.address}</p>  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    );
  }
}

export default Tplocator;
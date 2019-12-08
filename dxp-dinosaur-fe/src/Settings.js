import React from 'react';
import SettingsEntity from '../entities/SettingsEntity';

class Settings extends React.Component {
  constructor(props) {
   super(props);
    this.handleClick = this.handleClick.bind(this);
    this.sendNumEggs = this.sendNumEggs.bind(this);

 }

  sendNumEggs = (numEggs, callback) => {
    const settings = new Settings(
      12,
      1,
      "1 2 3 4 4");

    console.log("sending :" + numEggs);
    fetch('http://localhost:3001/settings', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: JSON.stringify(settings),
    },
    ).then(response => {
      if (response.ok) {
        response.json().then(json => {
          callback(json);
        });
      }
    });
  };


  handleClick = () => {
    let result = "";
    this.sendNumEggs(5, jsonBody => {
        result = JSON.stringify(jsonBody, null, 2);
        console.log("sent");
        console.log(result);
    })
  };

  render() {
    return(
    <div>
      <button onClick={this.handleClick}>schedule</button>;
       Save Settings
    </div>)

  }
}

export default SettingsComp;

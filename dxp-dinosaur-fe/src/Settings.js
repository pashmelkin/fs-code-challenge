import React from 'react';
import SettingsEntity from './entities/SettingsEntity';
import Rotation from './Rotation';
import Sequence from './Sequence';
import NumEggs from './NumEggs';

class Settings extends React.Component {
  constructor(props) {
   super(props);
  }

  saveSettings = (settings, callback) => {
    console.log(settings);
    fetch('http://localhost:3001/settings', {
      method: 'PUT',
      headers: {
       'Content-Type': 'application/json'
      },
      body: settings
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
    let settings = new SettingsEntity("1", "5", "1 2 3 4 5");
    let data = JSON.stringify(settings);
    this.saveSettings(data, jsonBody => {
        result = JSON.stringify(jsonBody, null, 2);
    })
  };


  render() {
    return(
    <div>
      <NumEggs />
      <NumEggs />
      <NumEggs />
      <button onClick={this.handleClick}> Save Settings </button>
    </div>
  );
  }
}
export default Settings;

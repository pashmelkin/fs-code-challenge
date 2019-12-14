import React from 'react';
import SettingsEntity from './entities/SettingsEntity';
import Rotation from './Rotation';
import Sequence from './Sequence';
import NumEggs from './NumEggs';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Settings extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     numberOfEggs: ' ',
     rotation: ' ',
     sequence: ' ',
     formValid: true,
     error: null
   }
  }

  saveSettings = (settings, callback) => {
    console.log(settings);
    fetch('http://localhost:3001/settings', {
      method: 'PUT',
      headers: {
       'Content-Type': 'application/json'
      },
      body: settings
    }
    ).then(response => {
      if (!response.ok) {
        response.json().then(json => {
          callback(json);
        });
      } else {
        callback();
      }
    });
  };
  handleEggs = (number) => {
      this.setState({numberOfEggs: number});
  }
  handleRotation = (rotation) => {
      this.setState({rotation});
  }
  handleSequence = (sequence) => {
      this.setState({sequence: sequence});
  }

  handleClick = () => {
    let result = "";
    let settings = new SettingsEntity(
      this.state.numberOfEggs,
      this.state.rotation,
      this.state.sequence);
    let data = JSON.stringify(settings);
    this.saveSettings(data, jsonBody => {
        result = JSON.stringify(jsonBody, null, 2);
        //TODO base on errors rerturns
        if (result === undefined)
        {
          this.props.onSettingsSet("SavedSettings");
        }
    })
  };


  render() {
    return(
    <div>
      <NumEggs  onNumberSet={this.handleEggs} />
      <Rotation onRotation={this.handleRotation} />
      <Sequence onSequence={this.handleSequence} />

      <Button onClick={this.handleClick} variant="primary" type="submit"
        disabled={!this.state.formValid}>Save Settings</Button>
    </div>
  );
  }
}
export default Settings;

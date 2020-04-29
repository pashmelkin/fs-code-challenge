import React from 'react'
import SettingsEntity from './entities/SettingsEntity'
import FormComponent from './FormComponent'
import checkFunctions from './utils/CheckValue';
import ApiCall from './utils/ApiCall';


import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Button, Row} from 'react-bootstrap'

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
    ApiCall(settings, callback);

  };

  handleValue = (parameter, value) => {
    this.setState({[parameter]: value});
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
        //TODO base on errors returns
        if (result === undefined)
        {
          this.props.onSettingsSet("SavedSettings");
        }
    })
  };


  render() {
    return(
    <div>
      <Container  md="auto">
        <Row>
          <FormComponent labelText="Please enter the number of Eggs" checkFunction={checkFunctions.isAllNumeric} onSet={(e) => this.handleValue("numberOfEggs", e)}/>
        </Row>
        <Row>
          <FormComponent labelText="Please enter the Rotation" checkFunction={checkFunctions.isAllNumeric}  onSet={(e) => this.handleValue("rotation", e)}/>
        </Row>
        <Row>
          <FormComponent labelText="Please enter the sequence" checkFunction={checkFunctions.checkSequence}  onSet={(e) => this.handleValue("sequence", e)}/>
        </Row>
        <Row>
          <Button onClick={this.handleClick} variant="primary" type="submit"
                  disabled={!this.state.formValid}>Save Settings</Button>
        </Row>
      </Container>
    </div>
  );
  }
}
export default Settings;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class SavedSettings extends React.Component {

  sendRunCommnad = (callback) => {
    fetch('http://localhost:3001/run', {
      method: 'POST'
    }
    ).then(response => {
        response.json().then(json => {
          callback(json);
        });
    });
  };

  handleClick = () => {
    this.sendRunCommnad(jsonBody => {
        let result = JSON.stringify(jsonBody, null, 2);
        this.props.onRunReportReady(result);
        this.props.onSettingsSet("RunReport", result);
    })
  };

  render() {
    return (
        <div>
          <Button type="submit" onClick={this.handleClick}>Run</Button>
        </div>
    )
  }
};

export default SavedSettings;

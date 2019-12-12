import React from "react";

class SavedSettings extends React.Component {
  constructor(props)
  {
    super(props);
  }


  sendRunCommnad = (callback) => {
    fetch('http://localhost:3001/run', {
      method: 'POST'
    }
    ).then(response => {
        response.json().then(json => {
          console.log("json: " + json);
          callback(json);
        });
    });
  };

  handleClick = () => {
    this.sendRunCommnad(jsonBody => {
        let result = JSON.stringify(jsonBody, null, 2);
        console.log("result: " + result);
        this.props.onSettingsSet("RunReport");
        this.props.onRunReportReady(result);
    })
  };

  render() {
    return (
        <div>
          <button type="submit" onClick={this.handleClick}>Run</button>
        </div>
    )
  }
};

export default SavedSettings;

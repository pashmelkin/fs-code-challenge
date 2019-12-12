import React from "react";

class SavedSettings extends React.Component {

  sendRunCommnad = (callback) => {
    fetch('http://localhost:3001/run', {
      method: 'POST'
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

  handleClick = () => {

    this.sendRunCommnad(jsonBody => {
        let result = JSON.stringify(jsonBody, null, 2);
        console.log(result);
        if (result === undefined)
        {
          this.props.onSettingsSet("SavedSettings");
        }
    })
  };

  render() {
    return (
        <div>
          <button type="submit" onClick={this.handleClick}> Run</button>
        </div>
    )
  }
};

export default SavedSettings;

import React from "react";

class RunReport extends React.Component {

  handleClick = () => {
      this.props.onSettingsSet("Settings");
  };

  render() {
    return (
        <div>
          <div>
            {this.props.runReport}
          </div>
          <button type="submit" onClick={this.handleClick}>Start Again </button>
        </div>
    )
  }
};

export default RunReport;
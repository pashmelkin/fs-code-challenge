import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


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
          <Button type="submit" onClick={this.handleClick}>Start Again </Button>
        </div>
    )
  }
};

export default RunReport;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Row} from 'react-bootstrap'

class RunReport extends React.Component {

  handleClick = () => {
      this.props.onSettingsSet("Settings");
  };

  render() {
    return (
        <div>
          <Container>
            <Row md="auto">
              {this.props.runReport}
            </Row>
            <Row md="auto">
              <Button type="submit" onClick={this.handleClick}>Start Again </Button>
            </Row>
          </Container>
        </div>
    )
  }
};

export default RunReport;

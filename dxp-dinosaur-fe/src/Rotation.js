import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class Rotation extends React.Component {
  constructor(props) {
   super(props);
   this.state = { rotation: ' ' };
  }
  handleChange = event => {
      if(event.target.value === '')
      {
          this.setState({ rotation: '' });
      }
      const rotationParsed = parseFloat(event.target.value);
      console.log(rotationParsed);
      if (!isNaN(rotationParsed) && rotationParsed < 1)
      {
        this.setState({ rotation: rotationParsed });
        this.props.onRotation(rotationParsed);
      }
   };

  render() {
    return(
      <div>
        <Form>
          <Form.Group controlId="textareas" >
            <Form.Label> Rotation %</Form.Label>
            <Form.Control type="number" placeholder="Enter Rotation as %"
            min='0'
            step='0.1'
            max='1'
            value={this.state.rotation}
            onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </div>
      );
  }
}

export default Rotation;

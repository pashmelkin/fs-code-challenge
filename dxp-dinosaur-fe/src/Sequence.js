import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class Sequence extends React.Component {
  constructor(props) {
   super(props);
   this.state = { sequence: '' };
  }

  handleChange = event => {
    const sequence = event.target.value.trimLeft();
    this.setState({ sequence });
    this.props.onSequence(sequence);

   };

  render() {
    return(
      <div>
        <Form>
          <Form.Group controlId="textareas" >
            <Form.Label> Sequence</Form.Label>
            <Form.Control type="text" placeholder="Enter Sequence"
            value={this.state.sequence}
            onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </div>
      );
  }
}

export default Sequence;

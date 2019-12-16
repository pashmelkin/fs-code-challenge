import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class NumEggs extends React.Component {
  constructor(props) {
   super(props);
   this.state = { numberOfEggs: '' };
  }

  handleChange = event => {
      if(event.target.value === '')
      {
          this.setState({ numberOfEggs: '' });
      }
      const numberEggs = parseInt(event.target.value, 10);
      if (!isNaN(numberEggs) && numberEggs > 0)
      {
        this.setState({ numberOfEggs: numberEggs });
        this.props.onNumberSet(numberEggs);
      }

   };

  render() {
    return(

      <div>
          <Form>
          <Form.Group controlId="textareas" >
            <Form.Label> Number of Eggs</Form.Label>
            <Form.Control type="integer" placeholder="Enter Number of Eggs"
            min='0'
            value={this.state.numberOfEggs}
            onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </div>
      );
  }
}

export default NumEggs;

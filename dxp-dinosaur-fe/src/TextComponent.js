import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class TextComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = { Text: '' };
  }

  handleChange = event => {
      if(event.target.value === '')
      {
          this.setState({ Text: '' });
          return;
      }
      const textToInt = parseInt(event.target.value, 10);
      if (this.allnumeric(event.target.value))
      {
        this.setState({ Text: textToInt });
      //  this.props.onNumberSet(textToInt);
      }

   };

  allnumeric = inputtxt => {
      console.log(inputtxt);
      const numbers = /^[0-9]+$/;
      return !!inputtxt.match(numbers);

    };


    render() {
    return(

      <div>
          <Form>
          <Form.Group controlId="textareas" >
            <Form.Label> {this.props.labelText}</Form.Label>
            <Form.Control type="integer" placeholder="Enter the Value"
            min='0'
            value={this.state.Text}
            onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </div>
      );
  }
}

export default TextComponent;

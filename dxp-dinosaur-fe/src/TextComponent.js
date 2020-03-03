import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class TextComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = { Text: '' };
  }

  handleChange = event => {
      const value = event.target.value.trimLeft();

      if(value === '')
      {
          this.setState({ Text: '' });
          return;
      }
      if (this.allnumeric(value))
      {
        this.setState({ Text: value });
        this.props.onSet(value);
      }

   };

  allnumeric = inputtxt => {
      console.log(inputtxt);
      const numbers = /^[0-9 .]+$/;
      return !!inputtxt.match(numbers);

    };


    render() {
    return(

      <div>
          <Form>
          <Form.Group controlId="textareas" >
            <Form.Label> {this.props.labelText}</Form.Label>
            <Form.Control type="string" placeholder="Enter the Value"
            value={this.state.Text}
            onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </div>
      );
  }
}

export default TextComponent;

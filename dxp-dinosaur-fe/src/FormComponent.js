import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class FormComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = { Text: '' };
  }

  handleChange = (event, checkFunction) => {
      const value = event.target.value.trimLeft();

      if(value === '')
      {
          this.setState({ Text: '' });
          return;
      }
      if (checkFunction(value))
      {
          this.setState({ Text: value });
          this.props.onSet(value);
      }

   };

    render() {
    return(

      <div>
          <Form>
          <Form.Group controlId="textareas" >
            <Form.Label column={0}> {this.props.labelText}</Form.Label>
            <Form.Control type="string" placeholder="Enter the Value"
            value={this.state.Text}
            onChange={(e) => this.handleChange (e, this.props.checkFunction)}
            />
          </Form.Group>
        </Form>
      </div>
      );
  }
}

export default FormComponent;

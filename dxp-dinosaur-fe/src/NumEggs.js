import React from 'react';

class NumEggs extends React.Component {
  constructor(props) {
   super(props);
   this.state = { numberOfEggs: '' };
  }

  handleChange = event => {
     this.setState({ numberOfEggs: event.target.value });
     console.log(this.state.numberOfEggs);
   };

  render() {
    return(
      <form>
      <input
           type="text"
           name="Number of Eggs"
           value={this.state.numberOfEggs}
           onChange={this.handleChange}
         />
        </form>
      );
  }
}

export default NumEggs;

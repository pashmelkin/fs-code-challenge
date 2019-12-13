import React from 'react';

class NumEggs extends React.Component {
  constructor(props) {
   super(props);
   this.state = { numberOfEggs: ' ' };
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
      <div>  Number of Eggs </div>
      <form>
      <input
           type="text"
           min='0'
           name="Number of Eggs"
           value={this.state.numberOfEggs}
           onChange={this.handleChange}
         />
        </form>
        </div>
      );
  }
}

export default NumEggs;

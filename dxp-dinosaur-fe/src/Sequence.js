import React from 'react';

class Sequence extends React.Component {
  constructor(props) {
   super(props);
   this.state = { sequence: ' ' };
  }

  handleChange = event => {
    this.setState({ sequence: event.target.value });
    this.props.onSequence(event.target.value);

   };

  render() {
    return(
      <div>
        <div> Sequence </div>
        <form>
        <input
           type="text"
           name="Sequence"
           value={this.state.sequence}
           onChange={this.handleChange}
         />
        </form>
        </div>
      );
  }
}

export default Sequence;

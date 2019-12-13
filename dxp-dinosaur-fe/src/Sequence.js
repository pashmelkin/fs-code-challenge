import React from 'react';

class Sequence extends React.Component {
  constructor(props) {
   super(props);
   this.state = { sequence: ' ' };
  }

  handleChange = event => {
    const sequence = event.target.value.trimLeft();
    this.setState({ sequence });
    this.props.onSequence(sequence);

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

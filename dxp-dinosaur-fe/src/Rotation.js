import React from 'react';

class Rotation extends React.Component {
  constructor(props) {
   super(props);
   this.state = { rotation: ' ' };
  }
  handleChange = event => {
      const rotationParsed = parseFloat(event.target.value);
      if (!isNaN(rotationParsed) && rotationParsed < 1)
      {
        this.setState({ rotation: rotationParsed });
        this.props.onRotation(rotationParsed);
      }
   };

  render() {
    return(
      <div>
        <div>  Rotation </div>
        <form>
          <input
              type='number'
              step="0.1"
              min='0'
              max='1'
            name="Rotation"
            value={this.state.rotation}
            onChange={this.handleChange}
            /> %
        </form>
      </div>
      );
  }
}

export default Rotation;

import React from "react";
import ReactDOM from "react-dom";
import Settings from './Settings';

import "./index.css";


class App extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
        <div>
          <Settings />
        </div>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

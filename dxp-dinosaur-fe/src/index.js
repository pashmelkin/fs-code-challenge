import React from "react";
import ReactDOM from "react-dom";

import Settings from './Settings';
import SavedSettings from './SavedSettings';
import RunReport from './RunReport';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={page: "Settings"};
  }

  moveToNextPage = nextPage => {
      console.log('move to next component: ' + nextPage);
      this.setState({page: nextPage})
    }

  render() {
    return (
        <div>
          {this.state.page === "Settings" && <Settings onSettingsSet={this.moveToNextPage}/>}
          {this.state.page === "SavedSettings" && <SavedSettings onSettingsSet={this.moveToNextPage}/>}
          {this.state.page === "Run" && <RunReport onSettingsSet={this.moveToNextPage}/>}
        </div>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

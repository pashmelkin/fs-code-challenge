import React from "react";
import ReactDOM from "react-dom";

import Settings from './Settings';
import SavedSettings from './SavedSettings';
import RunReport from './RunReport';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      page: "Settings",
      runReport: " "
    };
  }

  moveToNextPage = page => {
      this.setState({page});
    }

  printReport = runReport => {
      this.setState(runReport);
  }


  render() {
    return (
        <div>
          {this.state.page === "Settings" && <Settings onSettingsSet={this.moveToNextPage}/>}
          {this.state.page === "SavedSettings" && <SavedSettings onSettingsSet={this.moveToNextPage} onRunReportReady={this.printReport}/>}
          {this.state.page === "RunReport" && <RunReport onSettingsSet={this.moveToNextPage} />}
        </div>
    )
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

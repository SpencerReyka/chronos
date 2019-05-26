import React from "react";

import Calendar from "./components/Calendar.jsx";
import DetailPane from "./components/DetailPane.jsx";
import Paper from "@material-ui/core/Paper";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
          <DetailPane />
          <Paper>Hello</Paper>
          <Paper>World</Paper>
          <Paper>My</Paper>
          <Paper>Name</Paper>
          <Paper>Is</Paper>
          <Paper>Spencer</Paper>
        </main>
      </div>
    );
  }
}

export default App;

import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    // console.log(this.state.language);
    return this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          select a language :
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("hindi")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("english")}
          />
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

//
// <i className="flag in" onClick={() => this.onLanguageChange("hindi")} />
// //

import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {
  //static contextType = LanguageContext;

  render() {
    //  console.log(this.context);

    return (
      <ColorContext.Consumer>
        (s) =>
        {
          <LanguageContext.Consumer>
            {value => (value === "english" ? "Submit" : "Dabaye")}
          </LanguageContext.Consumer>
        }
      </ColorContext.Consumer>
    );
  }
}
export default Button;

//  const text = this.context === "english" ? "Submit" : "Dabaye";

// <LanguageContext.Consumer>
//   {value => (value === "english" ? "Submit" : "Dabaye")}
// </LanguageContext.Consumer>

// color =>
//   <button className={`ui button primary ${color}`>
//
//   </button>

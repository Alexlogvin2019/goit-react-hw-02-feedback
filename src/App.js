import React, { Component } from "react";
import "./App.css";
import Statistic from "./components/statistic/Statistic";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  addComment = name => {
    // const name = e.target.name
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      ((this.state.good + this.state.neutral) * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };
  render() {
    return (
      <div>
        <Statistic
          {...this.state}
          // good={this.state.good}
          // neutral={this.state.neutral}
          // bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          func={this.addComment}
        />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//         <Statistic />
//     </div>
//   );
// }

// export default App;

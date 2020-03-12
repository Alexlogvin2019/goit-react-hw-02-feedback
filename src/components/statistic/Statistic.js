import React from "react";
import FeedbackOption from "../feedbackOptions/FeedbackOptions";
import Section from "../section/Section";

const Statistic = props => {
  let divOp;
  if(props.positivePercentage)
  { divOp = <div>     <p>Good {props.good}</p>
        <p>Neutral {props.neutral}</p>
        <p>Bad {props.bad}</p>
        <p>Total {props.total}</p>
        <p>Positive feedback {props.positivePercentage}%</p>
      </div>}
      else {divOp = <p>No feedback given</p>}
  return (
    <>
      <Section header="Please leave feedback">
        <FeedbackOption hren={props.func} />
      </Section>

      <Section header="Statistic">
        
      {divOp}

      </Section>
    </>
  );
};

export default Statistic;
// class Statistic extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };
//   addComment = name => {
//     this.setState(prevState => {
//       return {
//         [name]: ++prevState[name]
//       };
//     });
//   };
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round(
//       ((this.state.good + this.state.neutral) * 100) /
//         (this.state.good + this.state.neutral + this.state.bad)
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <button
//           type="button"
//           name="good"
//           onClick={evn => {
//             this.addComment(evn.target.name);
//           }}
//         >
//           Good
//         </button>
//         <button
//           type="button"
//           name="neutral"
//           onClick={evn => {
//             this.addComment(evn.target.name);
//           }}
//         >
//           Neutral
//         </button>
//         <button
//           type="button"
//           name="bad"
//           onClick={evn => {
//             this.addComment(evn.target.name);
//           }}
//         >
//           Bad
//         </button>
//         <h2>Statistic</h2>
//         <p>Good {this.state.good}</p>
//         <p>Neutral {this.state.neutral}</p>
//         <p>Bad {this.state.bad}</p>
//         <p>Total {this.countTotalFeedback()}</p>
//         <p>Positive feedback {this.countPositiveFeedbackPercentage()}%</p>
//       </div>
//     );
//   }
// }

// export default Statistic;

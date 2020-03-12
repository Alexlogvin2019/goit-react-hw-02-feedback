import React from "react";

function FeedbackOption({hren}) {
//     console.log('')

  return (
    <>
      <button
        type="button"
        name="good"
        onClick={(e) => hren(e.target.name)}

      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={(e) => hren(e.target.name)}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={(e) => hren(e.target.name)}
      >
        Bad
      </button>
    </>
  );
}

export default FeedbackOption;

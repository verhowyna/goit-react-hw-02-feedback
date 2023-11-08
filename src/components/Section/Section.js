import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onLeaveFeedback,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {title === 'Please leave feedback' ? (
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      )}
    </div>
  );
};

import { Notification } from '../Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <div>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total: {total}</p>
      <p className={css.item}>Positive feedback: {positivePercentage}%</p>
    </div>
  ) : (
    <Notification message="There is no feedback" />
  );
};

import React, { Component } from 'react';
import style from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  HandleImcrement = evt => {
    const btnName = evt.target.textContent.toLowerCase();
    this.setState(prevState => {
      for (const key in prevState) {
        if (key === btnName) {
          return { [key]: prevState[key] + 1 };
        }
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = good
      ? Math.round((good * 100) / countTotalFeedback)
      : 0;

    return (
      <div className={style.Feedback}>
        <h2>Plese leave feedback</h2>
        <div className={style.Feedback__bar}>
          <button type="button" onClick={this.HandleImcrement}>
            Good
          </button>
          <button type="button" onClick={this.HandleImcrement}>
            Neutral
          </button>
          <button type="button" onClick={this.HandleImcrement}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistic</h2>
          <ul className={style.statistic}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {countTotalFeedback}</li>
            <li>Positive Feedback: {countPositiveFeedbackPercentage}%</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Feedback;

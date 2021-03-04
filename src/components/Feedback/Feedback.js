import React, { Component } from 'react';
import style from './Feedback.module.css';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notifications from './Notification';

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
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.HandleImcrement}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notifications message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;

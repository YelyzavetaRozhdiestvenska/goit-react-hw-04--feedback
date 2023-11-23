import React, { Component } from 'react';
import { Statistic } from './statistic/Statistic';
import { Section } from './sections/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleState = chosenFeedback => {
    this.setState(prevState => {
      return {
        [chosenFeedback]: prevState[chosenFeedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const options = ['good', 'neutral', 'bad'];

    return (
      <main>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleState}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </main>
    );
  }
}

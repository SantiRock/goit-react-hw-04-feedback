import { Component, useState } from 'react';
import css from './App.module.css';
import PropTypes from "prop-types";
import { FeedbackOption } from './FeedbackOptions';
import { Stats } from './Stats';

const Section = ( {title, children} ) => {
  return (
    <section>
       <h2>{title}</h2>
       {children}
    </section>   
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object
}

const Notification = ( {message} ) => <p>{message}</p>

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, positive: 0 }

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {total: prevState.good + prevState.bad + prevState.neutral}
     })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {positive: (prevState.good / prevState.total) * 100 }
    })
  }

  handlegood = evt => { 
    evt.preventDefault();
    this.setState({good: this.state.good + 1})
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  handleneutral = evt => { 
    evt.preventDefault();
    this.setState({neutral: this.state.neutral + 1})
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  handlebad = evt => { 
    evt.preventDefault();
    this.setState({bad: this.state.bad + 1})
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }


  render() {
    const { good } = this.state
    const { neutral } = this.state
    const { bad } = this.state
    const {total} = this.state
    const {positive} = this.state

    return (
      <div className={css.container}>
        <Section title={'Please leave feedback'} >
          <FeedbackOption option={['Good', 'Neutral', 'Bad']} 
          onLeaveFeedback={[this.handlegood, this.handleneutral, this.handlebad]} />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message={'No feedback given'} />
          ) : (
            <Stats good={good} neutral={neutral} bad={bad} total={total} positive={positive.toFixed(0) + '%'} />
          )}
        </Section>        
      </div>
    );
  }
};

export { App } 
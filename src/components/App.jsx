import { useEffect, useState } from 'react';
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

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)

  const state = {good, neutral, bad}

  const leaveFeedback = (options) => {
    //console.log(options)
    if (options ==='good') {
      return setGood(state => state + 1)
    } 
    if (options ==='neutral') {
      return setNeutral(state => state + 1)

    }
    if (options ==='bad') {
      return setBad(state => state + 1)

    }

  }

  useEffect(() => {
    setTotal(good + bad + neutral)   
  }, [good, bad, neutral])

  useEffect(() => {
    setPositive((good / total) * 100)
  }, [total, good])

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'} >
        <FeedbackOption options={Object.keys(state)} 
        onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message={'No feedback given'} />
          ) : (
          <Stats good={good} neutral={neutral} bad={bad} total={total} positive={positive.toFixed(0) + '%'} />
        )}
      </Section>        
    </div>
  )
}

export { App } 
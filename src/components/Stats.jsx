import PropTypes from "prop-types";
import css from './App.module.css';

const Stat = ( {text, value} ) => <p>{text}: {value}</p>
const Stats = ( {good, neutral, bad, total, positive} ) => {
  return (
    <div className={css.stats}>
      <Stat text='Good' value={good} />
      <Stat text='Neutral' value={neutral} />
      <Stat text='Bad' value={bad} />
      <Stat text='Total' value={total} />
      <Stat text='Positive feedback' value={positive} />
    </div>
  )
}

Stat.propTypes = {
    text: PropTypes.string.isRequired,
}

Stats.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    positive: PropTypes.string
}

export {Stats}
import PropTypes from "prop-types";
import css from './App.module.css';

const Btn = ( {handleClick, text} ) => <button className={css.btn} onClick={handleClick}>{text}</button>

const FeedbackOption = ( {options, onLeaveFeedback}) => {
    return (
      <div className={css.btns}>
        <ul>
          {options.map((option, index) => {
            return(
              <li key={index}>
                <Btn text={option} handleClick={() => onLeaveFeedback(option)} />                
              </li>
            )
          })}
        </ul>
      </div>
    )
}

Btn.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

FeedbackOption.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func
}

export {FeedbackOption}
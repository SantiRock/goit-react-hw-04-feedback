import PropTypes from "prop-types";
import css from './App.module.css';

const Btn = ( {handleClick, text} ) => <button className={css.btn} onClick={handleClick}>{text}</button>

const FeedbackOption = ( {option, onLeaveFeedback}) => {
    return (
      <div className={css.btns}>
        <Btn text={option[0]} handleClick={onLeaveFeedback[0]}/>
        <Btn text={option[1]} handleClick={onLeaveFeedback[1]}/>
        <Btn text={option[2]} handleClick={onLeaveFeedback[2]}/>
      </div>
    )
}

Btn.propTypes = {
    handleClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

FeedbackOption.propTypes = {
    option: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.array
}

export {FeedbackOption}
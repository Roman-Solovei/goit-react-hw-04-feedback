import React from "react";
import PropTypes from 'prop-types';
import s from './statistics.module.css'

export default function Statistics({ good, neutral, bad, total, positivePercentage }) { 
    return <div>
    <ul>
        <li className={s.statistics}>Neutral: {neutral}</li>
        <li className={s.statistics}>Good: {good}</li>        
        <li className={s.statistics}>Bad: {bad}</li>
        <li className={s.statistics}>Total: {total}</li>
        <li className={s.statistics}>Positive feadback: {positivePercentage} %</li>
    </ul>

    </div>
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}
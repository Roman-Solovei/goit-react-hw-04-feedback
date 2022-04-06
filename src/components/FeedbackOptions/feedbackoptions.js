import React from "react";
import PropTypes from 'prop-types';
import s from './feedbackoptions.module.css'


export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return <div className={s.feedbackOptions}>
        {options.map(option => {
            return <button                
                key={ option }
                className = {s.feedbackButton}
                onClick={() => {
                    onLeaveFeedback(option)
                }}                
            >
                { option }    
            </button>
            })
        }
    </div>
}
 
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
import { useState } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics"
import Notification from "./components/Notification"


export default function App() { 

    const [neutral, setNeutral] = useState(0);
    const [good, setGood] = useState(0);    
    const [bad, setBad] = useState(0);
   

    const countTotalFeedback = () => {        
        return neutral + good + bad
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good * 100 / countTotalFeedback())
    };

    function onFeedback (option) {
        switch (option) {
            case "neutral":
            setNeutral((neutralstate) => neutralstate + 1);
            break;
            
            case "good":
            setGood((state) => state + 1);
            break;     

            case "bad":
            setBad((state) => state + 1);
            break;

            default:
            return;
        }
    };

   
    const total = countTotalFeedback();        
    const goodFeedback = countPositiveFeedbackPercentage();
        
    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={ ["neutral","good","bad"] }
                    onLeaveFeedback={ onFeedback }
                />
            </Section>

            <Section title="Statistics">
               { total  === 0 ? <Notification message="There is no feedback"/> : 
                <Statistics
                    good={ good }
                    neutral={ neutral }
                    bad={ bad }
                    total={ total }
                    positivePercentage={ goodFeedback }                
                /> }
            </Section>          
      </div>
    );
};
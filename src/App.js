import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Statistics from "./components/Statistics"
import Notification from "./components/Notification"


export default class App extends Component { 

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }   

    countTotalFeedback() {
        const { good, neutral, bad } = this.state
        return good + neutral + bad
    };

    countPositiveFeedbackPercentage() {
        const { good } = this.state
        return Math.round(good * 100 / this.countTotalFeedback())
    }


    onFeedback= (option) => {
        this.setState({
        [option]:this.state[option] +1
        })
  }

     render() { 
    
        const { good, neutral, bad } = this.state;       
        const total = this.countTotalFeedback();        
        const goodFeedback = this.countPositiveFeedbackPercentage();
        
    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onFeedback}
                />
            </Section>

            <Section title="Statistics">
               { total  === 0 ? <Notification message="There is no feedback"/> : 
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={ goodFeedback }                
                /> }
            </Section>          
      </div>
    );
  }    
}


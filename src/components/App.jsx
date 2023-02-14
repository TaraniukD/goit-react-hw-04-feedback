import { useState }  from "react";

import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";


export function App() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
   
    const buttonClickTotal = e => {
        const { name } = e.target;
    
        switch (name) {
            case 'good':
                setGood( prevState => prevState + 1);
                break;
          
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
          
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    };

  const countTotalFeedback = () => {
           return good + neutral + bad;
   }

  const countPositiveFeedbackPercentage = () => {
           return Math.round(good / countTotalFeedback() * 100)
   }

       return (
       <div 
       style={{
        width: '360px',
        margin: '30px auto',
        padding: '20px',
        backgroundColor: '#d7eff1',
        textAlign: 'center',
        borderRadius: '10px',
       }}
       >
           <Section title="Please leave feedback">
                   <FeedbackOptions options={{ good, neutral, bad }} 
               onLeaveFeedback={buttonClickTotal} />
           </Section>

           { countTotalFeedback() !== 0 ? 
           (<Section title="Statistics">
           <Statistics 
           good={good}
           neutral={neutral}
           bad={bad}
           total={countTotalFeedback()} 
           positivePercentage={countPositiveFeedbackPercentage()}
           />
           </Section>) : 
           (<Notification message="There is no feedback :(" />)
           } 
       </div> 
       )
   }


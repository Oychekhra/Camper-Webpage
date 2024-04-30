import React, { useRef,} from 'react';
import emailjs from '@emailjs/browser';
import { QuestionContainer } from './style';
import NotificationComponent from './Notification';

const QuestionComponent = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_uwmiidb', 'template_ttay11f', form.current, {
            publicKey: 'dP0JaUcpOqAaMQVLB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


  return (
    <QuestionContainer ref={form} onSubmit={sendEmail}>
      <h1> Send a question</h1>
      <input type="text" name="user_name"  placeholder='Your name'/>
      <input type="email" name="user_email" placeholder='Your Email' />
      <textarea name="message"  placeholder='Your question' rows='7'/>
      <div style={{width:'100%'}}>
      <NotificationComponent />
      </div>
    </QuestionContainer>
  )
}

export default QuestionComponent

import React from 'react'
import MapImg from '../../Assets/map.png'
import { ContactContainer, ContactContainerLeft, ContactContainerRight } from './contact'

const ContactComponent = () => {
  return (
    <ContactContainer>
      <ContactContainerLeft>
        <div>
            <img src={MapImg} alt="" />
        </div>
        <div>
            <div>
                <h6>Phone number</h6>
                <p>+7 237 181 181</p>
                <p>+7 210 181 191</p>
            </div>
            <div>
                <h6>E-mail</h6>
                <p>logo.uz</p>
            </div>
        </div>
      </ContactContainerLeft>
      <ContactContainerRight>
        <h1>Have you got a question</h1>
        <input type="text"  placeholder='Your name'/>
        <input type="text"  placeholder='Your email'/>
        <input type="text"  placeholder='Your question'/>
        <button>Send question</button>
      </ContactContainerRight>
    </ContactContainer>

  )
}

export default ContactComponent

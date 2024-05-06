import React from 'react'
import { ContactContainer, ContactMiniWrapper, ContactWrapper, LeftContainer, MapWrapper, RightContainer } from './style'
import QuestionComponent from './question'
import map from '../../Assets/map.png'

const ContactComponent = () => {
  return (
    <ContactContainer>
      <LeftContainer>
        <MapWrapper><img src={map} alt="Map" /></MapWrapper>
        <ContactWrapper>
            <ContactMiniWrapper>
                <p>Phone number:</p>
                <h1>+7 237 181 181</h1>
                <h1>+7 210 181 191</h1>
            </ContactMiniWrapper>
            <ContactMiniWrapper>
                <p>E-mail:</p>
                <h1>logo.uz</h1>
            </ContactMiniWrapper>
        </ContactWrapper>
      </LeftContainer>
      <RightContainer>
        <QuestionComponent />
      </RightContainer>
    </ContactContainer>
  )
}

export default ContactComponent

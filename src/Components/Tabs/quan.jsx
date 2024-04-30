import React from 'react'
import { InfoContainer, LeftContainer,  QueAnsContainer, RightContainer } from './style'
import QuestionComponent from './question'

const QueAnsComponent = () => {
  return (
    <QueAnsContainer>
      <RightContainer>
        <InfoContainer>
            <p>Name</p>
            <h1>Question  Lorem ipsum dolor sit amet?</h1>
        </InfoContainer>
        <InfoContainer>
            <p>Name</p>
            <h1>Question  Lorem ipsum dolor sit amet?</h1>
        </InfoContainer>
        <InfoContainer>
            <p>Name</p>
            <h1>Question  Lorem ipsum dolor sit amet?</h1>
        </InfoContainer>
        <InfoContainer>
            <p>Name</p>
            <h1>Question  Lorem ipsum dolor sit amet?</h1>
        </InfoContainer>
        <InfoContainer>
            <p>Name</p>
            <h1>Question  Lorem ipsum dolor sit amet?</h1>
        </InfoContainer>
      </RightContainer>
      <LeftContainer>
        <QuestionComponent />
      </LeftContainer>
    </QueAnsContainer>
  )
}

export default QueAnsComponent

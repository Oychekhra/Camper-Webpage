import React from 'react'
import { InfoContainer, LeftContainer,  QueAnsContainer, RightContainer } from './style'
import QuestionComponent from './question'

const QueAnsComponent = () => {
  return (
    <QueAnsContainer>
      <LeftContainer>
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
      </LeftContainer>
      <RightContainer>
        <QuestionComponent />
      </RightContainer>
    </QueAnsContainer>
  )
}

export default QueAnsComponent

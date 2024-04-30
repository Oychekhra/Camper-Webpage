import React from 'react'
import { DropDownCon, FAQContainer, LeftContainer, RightContainer } from './style'
import QuestionComponent from './question'

const FAQComponent = () => {
  return (
    <FAQContainer>
        <RightContainer>
            <DropDownCon>
                <option>Frequently Asked Questions</option>
                <option ></option>
                <option ></option>
            </DropDownCon>
            <DropDownCon>
                <option>Frequently Asked Questions</option>
                <option ></option>
                <option ></option>
            </DropDownCon>
            <DropDownCon>
                <option>Frequently Asked Questions</option>
                <option ></option>
                <option ></option>
            </DropDownCon>
            <DropDownCon>
                <option>Frequently Asked Questions</option>
                <option ></option>
                <option ></option>
            </DropDownCon>
            <DropDownCon>
                <option>Frequently Asked Questions</option>
                <option ></option>
                <option ></option>
            </DropDownCon>
        </RightContainer>
        <LeftContainer>
            <QuestionComponent />
        </LeftContainer>
      
    </FAQContainer>
  )
}

export default FAQComponent

// import {tuning } from './mock/mockdata'
import { TopContainer } from '../Motor/style'
import background from '../../Assets/tuning.jpg'

const TuningComponent = () => {
  return (
    <div style={{background:'#FAFAFA'}}>
        <TopContainer style={{backgroundImage:`url(${background})`}}>
            <p style={{fontSize:'16px', fontWeight:500}}>Home / Tunings</p>
            <p style={{fontSize:'27px', fontWeight:700}} >Our Ranges</p>
            <p style={{fontSize:'80px', fontWeight:700}}>Tunings</p>
        </TopContainer>
    </div>
  )
}

export default TuningComponent

import { TopContainer } from '../Motor/style'
import background from '../../Assets/caravan.JPG'

const CaravanComponent = () => {
  return (
    <div style={{background:'#FAFAFA'}}>
        <TopContainer style={{backgroundImage:`url(${background})`}}>
            <p style={{fontSize:'16px', fontWeight:500}}>Home / Caravan</p>
            <p style={{fontSize:'27px', fontWeight:700}} >Our Ranges</p>
            <p style={{fontSize:'80px', fontWeight:700}}>Caravan</p>
        </TopContainer>
    </div>
  )
}

export default CaravanComponent
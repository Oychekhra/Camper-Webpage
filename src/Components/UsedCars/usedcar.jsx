import { TopContainer } from '../Motor/style'
import background from '../../Assets/usedcar.jpg'

const UsedCarComponent = () => {
  return (
    <div style={{background:'#FAFAFA'}}>
        <TopContainer style={{backgroundImage:`url(${background})`}}>
            <p style={{fontSize:'16px', fontWeight:500}}>Home / Used Car</p>
            <p style={{fontSize:'27px', fontWeight:700}} >Our Ranges</p>
            <p style={{fontSize:'80px', fontWeight:700}}>Used Cars</p>
        </TopContainer>
    </div>
  )
}

export default UsedCarComponent
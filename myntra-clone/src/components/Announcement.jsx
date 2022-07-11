import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color :  rgb(226, 234, 254);
  display : flex;
  box-shadow: rgba(0, 0, 0, 0.40) 0px 20px 20px -25px;
`
const Info = styled.div`
  display : flex;
  width : 100%;
  align-items : center;
  justify-content: center;
  padding : 5px 0px;
`
 
function Announcement() {
  return (
    <div>
    <Container>
       <Info>
       Invite friends to Myntra's EORS & get up to Rs.150 <br />
       MynSash for every person who visits
       </Info>
    </Container>
       <br />
    </div>
  )
}

export default Announcement
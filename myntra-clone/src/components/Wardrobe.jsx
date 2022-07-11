import React from 'react'
import styled from 'styled-components'
import {wardrobe, clothing} from "../data"

const Item = styled.div`
    display : flex;
    flex-wrap : wrap;
    margin-left : 10px;
    cursor : pointer
`
const Img = styled.img`
    width : 280px;
    margin : 10px;
    transition : all 0.5s ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`
const Wardrobe = () => {
  return (
      <div>
        <br />
        
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0bf2f455-f754-4b3a-b498-d4125428c7db1654785362720-Must-Haves-In-Your-Wardrobe.jpg" width={"1500px"} />
        <Item>
            {wardrobe.map((ele) => (
                <div key={ele.id}><Img src={ele.url}/></div>
            ))}
        </Item>
        
        <img src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/50c50bfe-67ac-44c0-ba7a-f76e59549f311654785362626-Best-Of-Clothing.jpg" width={"1500px"} />
        <Item>
            {clothing.map((ele) => (
                <div key={ele.id}><Img src={ele.img}/></div>
            ))}
        </Item>
    </div>
  )
}

export default Wardrobe
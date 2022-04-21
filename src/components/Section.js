import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = ({title, description, image}) => {
  return (
      
      <Wrap imageBg={image}>
        <Fade left>
        <ItemText>
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                Custom Order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' />
        </Buttons>
    </Wrap>

    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: orange;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/${props => props.imageBg}');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center;    
`;

const ItemText = styled.div`
    padding-top: 18vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    gap: 16px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`;

const Buttons = styled.div`

`;

export default Section
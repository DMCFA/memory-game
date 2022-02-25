import styled, { css } from 'styled-components';

interface Props {
  flipped: boolean;
}

const images = css`
  width: auto;
  height: auto;
  cursor: pointer;
  transition: all 0.8s;
  backface-visibility: hidden;
`;

export const StyledContainer = styled.div`
  padding: 3rem;

  @media screen and (max-width: 1600px) {
    padding: 0.7rem;
  }
`;

export const StyledGameHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const StyledResults = styled.h4`
  color: #325288;
  font-size: 2.4rem;
  font-variant: small-caps;

  @media screen and (max-width: 800px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 230%;
  }
`;

export const StyledNewGameButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #325288 5%, #205dbe 100%);
  background-color: #325288;
  border-radius: 6px;
  border: 1px solid #325288;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.8rem 1.2rem;
  text-transform: uppercase;
  text-shadow: 0px 1px 0px #325288;

  @media screen and (max-width: 1451px) {
    padding: 0.7rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    font-weight: 400;
    text-transform: none;
    font-variant: small-caps;
    padding: 0.4rem 0.6rem;
  }

  &:hover {
    background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
    background-color: #1e62d0;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const StyledGrid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 1.5rem;
  justify-items: center;

  @media screen and (max-width: 1600px) {
    margin-top: 1.5rem;
    row-gap: 0.5rem;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledCard = styled.div`
  position: relative;

  .front .flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`;

export const StyledFrontCard = styled.img<Props>`
  ${images}
  transform: ${(props) => (props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)')};
  z-index: ${(props) => (props.flipped ? '2' : '1')};
`;

export const StyledBackCard = styled.img<Props>`
  ${images}
  position: absolute;
  top: 0;
  left: 0;
  transform: ${(props) =>
    props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)'};
  z-index: ${(props) => (props.flipped ? '1' : '2')};
`;

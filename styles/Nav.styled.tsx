import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  background-color: #325288;

  h1 {
    color: #faeee7;
    font-size: 3rem;
    font-variant: small-caps;
    padding-inline-start: 4rem;
    line-height: 110%;

    @media screen and (max-width: 1451px) {
      font-size: 2rem;
      line-height: 180%;
    }
    @media screen and (max-width: 1150px) {
      font-size: 1.5rem;
      line-height: 225%;
    }
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  margin-left: 60%;

  @media screen and (max-width: 1000px) {
    margin: 0;
  }

  a {
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    font-variant: small-caps;
    text-align: center;
    border-radius: 4px;
    margin: 0.8rem 1rem 0.8rem 1rem;
    padding: 0.4rem 0.6rem;
    background: transparent;
    color: #faeee7;
    border: 2px solid white;
    transition: all 0.5s;

    @media screen and (max-width: 1451px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 1150px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 1000px) {
      font-size: 1rem;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;

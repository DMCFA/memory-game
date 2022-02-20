import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  height: fit-content;
  width: 100%;
  height: fit-content;
  background-color: #325288;

  h1 {
    color: #faeee7;
    font-size: 3rem;
    font-variant: small-caps;
    padding: 0.6rem;
    padding-inline-start: 4rem;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  margin-left: 60%;

  a {
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    font-variant: small-caps;
    text-align: center;
    border-radius: 4px;
    margin: 1.3rem 1rem 1rem 1rem;
    padding: 0.4rem 0.6rem;
    background: transparent;
    color: #faeee7;
    border: 2px solid white;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

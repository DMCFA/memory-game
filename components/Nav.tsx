import Link from 'next/link';
import { StyledNav, StyledLinks } from '../styles/Nav.styled';

const Nav = () => {
  return (
    <StyledNav>
      <h1>memory game</h1>
      <StyledLinks>
        <Link href='/'>
          <a>home</a>
        </Link>
        <Link href='/rules'>
          <a>rules</a>
        </Link>
      </StyledLinks>
    </StyledNav>
  );
};

export default Nav;

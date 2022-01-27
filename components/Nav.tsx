import Link from 'next/link';
import { StyledNav } from '../styles/Nav.styled';

const Nav = () => {
  return (
    <StyledNav>
      <h1>memory game</h1>
      <Link href='/'>
        <a>home</a>
      </Link>
      <Link href='/rules'>
        <a>rules</a>
      </Link>
    </StyledNav>
  );
};

export default Nav;

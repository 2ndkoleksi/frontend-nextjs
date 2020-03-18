import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { useScreenSize } from '../../hooks/useScreenSize';
import Burger from './Burger';
import Menu from './Menu';

const link = [
  { link: '/about', label: 'about us' },
  { link: '/product', label: 'product' },
  { link: '/contact', label: 'contact' }
];

const NavigationWrapper = styled.div`
  width: 100%;
  min-height: 84px;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  align-items: center;
  justify-items: center;
  justify-content: end;

  & li {
    &:after {
      content: '';
      display: block;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary.pink};
      width: 0;
      transition: 1s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }

  & li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.black};
    font-weight: 500;
    transition: 0.5s;
    text-transform: uppercase;
  }
`;

const BurgerWrapper = styled.div``;

function Navigation() {
  const [open, setOpen] = useState(false);
  const menuId = 'main-menu';
  const [isSmallScreen] = useScreenSize();

  return (
    <NavigationWrapper>
      {isSmallScreen ? (
        <BurgerWrapper>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </BurgerWrapper>
      ) : (
        <NavLinks>
          {link.map((el) => (
            <li key={`link-to-${el.label}`} className='links'>
              <Link href={el.link}>
                <a>{el.label}</a>
              </Link>
            </li>
          ))}
        </NavLinks>
      )}
    </NavigationWrapper>
  );
}

export default Navigation;

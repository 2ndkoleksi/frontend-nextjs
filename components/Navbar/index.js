import { useState, useEffect, createRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { useScreenSize } from '../../hooks/useScreenSize'
import Burger from './Burger'
import Menu from './Menu'

const link = [
  { link: '/rules', label: 'rules' },
  { link: '/product', label: 'product' },
  { link: '/contact', label: 'contact' }
]

const NavigationWrapper = styled.div`
  position: fixed;
  width: 100%;
  max-height: 4rem;
  z-index: 10;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  align-items: center;
  justify-items: center;
  justify-content: end;
  height: 4rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #fff;

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
`

const BurgerWrapper = styled.div``

function Navigation() {
  const [open, setOpen] = useState(false)
  const menuId = 'main-menu'
  const [isSmallScreen] = useScreenSize()

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
  )
}

export default Navigation

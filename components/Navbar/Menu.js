import styled from 'styled-components'
import Link from 'next/link'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flext-start;
  background: ${({ theme }) => theme.colors.primary.pink};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  padding: 1rem 4rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.medium};
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.primary.white};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: ${({ theme }) => theme.fontSize.small};
    }

    &:hover {
      color: ${({ theme }) => theme.hoverColors.primary};
    }
  }
`

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link href='/rules'>
        <a tabIndex={tabIndex}>
          <span aria-hidden='true'>💁🏻‍♂️</span>
          Rules
        </a>
      </Link>
      <Link href='/product'>
        <a tabIndex={tabIndex}>
          <span aria-hidden='true'>🛍️</span>
          Product
        </a>
      </Link>
      <Link href='/contact'>
        <a tabIndex={tabIndex}>
          <span aria-hidden='true'>📩</span>
          Contact
        </a>
      </Link>
    </StyledMenu>
  )
}

export default Menu

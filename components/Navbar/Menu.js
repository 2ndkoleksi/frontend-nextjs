import styled from 'styled-components';
import Link from 'next/link';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.pink};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.primary.white};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.hoverColors.primary};
    }
  }
`;

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link href='/about'>
        <a tabIndex={tabIndex}>
          <span aria-hidden='true'>💁🏻‍♂️</span>
          About us
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
  );
};

export default Menu;

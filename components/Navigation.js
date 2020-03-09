import Link from 'next/link'
import styled from 'styled-components'

import BurgerMenu from './Navbar/Burger'

const link = [
  { link: '/product', label: 'product' },
  { link: '/shop', label: 'shop' }
]

const NavigationWrapper = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 84px;
  color: ${({ theme }) => theme.colors.primary.white};

  & nav {
    max-width: 1720px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'logo nav';
    grid-column-gap: 10px;

    & .logo-wrapper {
      grid-area: nav;
      grid-column: 1;
      min-width: 160px;
      height: 82px;
      position: relative;

      & img {
        width: 80%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-area: nav;
  grid-template-columns: repeat(2, 80px);
  align-items: center;
  justify-items: end;
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
    color: ${({ theme }) => theme.colors.primary.white};
    font-weight: 500;
    transition: 0.5s;
  }
`

const BurgerWrapper = styled.div`
  display: none;

  @media (max-width: 769px) {
    display: grid;
    grid-area: burger;
    justify-content: start;

    ${NavigationWrapper} {
    }
  }
`

function Navigation() {
  // const [isNavVisible, setNavVisibility] = React.useState(false)
  // const [isSmallScreen, setIsSmallScreen] = React.useState(false)

  // React.useEffect(() => {
  //   const mediaQuery = window.matchMedia('(max-width: 768px)')
  //   mediaQuery.addListener(handleMediaQueryChange)
  //   handleMediaQueryChange(mediaQuery)

  //   return () => {
  //     mediaQuery.removeListener(handleMediaQueryChange)
  //   }
  // }, [])

  // const handleMediaQueryChange = (mediaQuery) => {
  //   if (mediaQuery.matches) {
  //     setIsSmallScreen(true)
  //   } else {
  //     setIsSmallScreen(false)
  //   }
  // }

  // const toggleNav = () => {
  //   setNavVisibility(!isNavVisible)
  // }

  return (
    <NavigationWrapper>
      {/* {!isSmallScreen ||
        (isNavVisible && ( */}
      <nav>
        <div className='logo-wrapper'>
          <img
            src='/images/logo/pink-name-300.png'
            rel='noopener noreferrer'
            alt='2ndkoleksi'
          ></img>
        </div>

        <NavLinks>
          {link.map((el) => (
            <li key={`link-to-${el.label}`} className='links'>
              <Link href={el.link}>
                <a>{el.label}</a>
              </Link>
            </li>
          ))}
        </NavLinks>
      </nav>
      {/* ))} */}

      <BurgerWrapper>
        <BurgerMenu />
      </BurgerWrapper>
    </NavigationWrapper>
  )
}

export default Navigation

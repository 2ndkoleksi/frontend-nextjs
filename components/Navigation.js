import Link from 'next/link'
import styled from 'styled-components'

const NavigationWrapper = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary.blue};
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 104px;
  color: ${({ theme }) => theme.colors.primary.white};
`

const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & li {
    transition: all 300ms linear 0s;

    & .logo-wrapper {
      min-width: 160px;
      height: 82px;
      position: relative;

      & img {
        margin: auto;
        display: inline-block;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: ${({ theme }) => theme.colors.primary.white};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary.pink};
    }
  }
`

const link = [{ link: '/product', label: 'product' }]

function Navigation() {
  return (
    <NavigationWrapper>
      <NavLinks>
        <li>
          <div className='logo-wrapper'>
            <Link href='/'>
              <img
                src='/images/logo/pink-name-300.png'
                rel='noopener noreferrer'
                alt='2ndkoleksi'
              ></img>
            </Link>
          </div>
        </li>
        {link.map((el) => (
          <li key={`link-to-${el.label}`}>
            <Link href={el.link}>
              <a>{el.label}</a>
            </Link>
          </li>
        ))}
      </NavLinks>
    </NavigationWrapper>
  )
}

export default Navigation

import styled, { keyframes } from 'styled-components'

const fadeInLeft = keyframes`
  0% {
      opacity:0;
      transform:translateX(-200px);
    }
  100% {
      opacity:1;
      transform:translateX(0);
    }
`

const fadeInRight = keyframes`
  0% {
      opacity:0;
      transform:translateX(200px);
    }
  100% {
      opacity:1;
      transform:translateX(0);
    }
`

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 80%, #fff 100%);
  color: ${({ theme }) => theme.colors.primary.white};
`

const Outer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.span`
  z-index: 0;
  animation: ${fadeInRight} 2s ease-in-out;
  height: 280px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Content = styled.div`
  animation-delay: 0.3s;
  z-index: 3;
  animation: ${fadeInLeft} 2s ease-in-out;
  height: 100%;
  padding: 1rem;

  & p {
    width: 280px;
    font-size: 13px;
    line-height: 1.4;
    margin: 20px 0;
  }

  & h1 {
    text-align: left;
  }
`

const Button = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 10px;

  & a {
    display: inline-block;
    overflow: hidden;
    position: relative;
    font-size: 11px;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid #aaa;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.white};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -10px;
      width: 0%;
      background: #111;
      height: 100%;
      z-index: -1;
      transition: width 0.3s ease-in-out;
      transform: skew(-25deg);
      transform-origin: right;
    }

    &:hover {
      transition: all 0.5s ease;

      &::after {
        width: 150%;
        left: -10px;
        transform-origin: left;
      }
    }
  }

  & a:nth-of-type(1) {
    border-radius: 50px 0 0 50px;
    border-right: none;
  }

  & a:nth-of-type(2) {
    border-radius: 0px 50px 50px 0;
  }
`

const Label = styled.span`
  display: inline-block;
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 1em;
  text-transform: uppercase;
`

const Card = ({ content }) => {
  return (
    <Wrapper>
      <Outer>
        <Content>
          <Label>{content.label}</Label>
          <h2>
            Chanel
            <br /> Patiti
          </h2>
          <p>
            Shadow your real allegiance to New York's Pirate radio with this
            cool cap featuring the Graphic Know Wave logo.
          </p>

          <Button>
            <a href='#'>$115</a>
            <a className='cart-btn' href='#'>
              <i className='cart-icon ion-bag'></i>Contact Me For Details
            </a>
          </Button>
        </Content>
        <ImageWrapper>
          <img src={content.imgSource} alt='product' />
        </ImageWrapper>
      </Outer>
    </Wrapper>
  )
}

export default Card

import styled, { keyframes } from 'styled-components'

const lineFadeIn = keyframes`
  0% { opacity: 0; d: path("M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 "); stroke: #fff; }
  50% { opacity: 1; d: path("M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300"); stroke: #888BFF; }
  100% { opacity: 1; d: path("M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400"); stroke: #545581; }
`

const contentFadeIn = keyframes`
  0% { transform: translateY(-1rem); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`

const imageFadeIn = keyframes`
  0% { transform: translate(-.5rem, -.5rem) scale(1.05); opacity: 0; filter: blur(2px); }
  50% { opacity: 1; filter: blur(2px); }
  100% { transform: translateY(0) scale(1.0); opacity: 1; filter: blur(0); }
`
const Container = styled.div`
  height: 400px;
`

const Card = styled.div`
  position: relative;
  height: 100%;
  border-radius: 6px;
  padding: 2rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;

  & .card__image-container {
    margin: -2rem -2rem 1rem -2rem;

    & img {
      max-width: 100%;
    }
  }

  & .card__line {
    opacity: 0;
    animation: ${lineFadeIn} 0.8s 0.8s forwards ease-in;
  }

  & .card__image {
    opacity: 0;
    animation: ${imageFadeIn} 0.8s 1.4s forwards;
  }

  & .card__title {
    color: ${({ theme }) => theme.colors.primary.black}
    margin-top: 0;
    font-weight: 800;
    letter-spacing: 0.01em;
  }

  & .card__content {
    margin-top: -1rem;
    opacity: 0;
    animation: ${contentFadeIn} 0.8s 1.6s forwards;
  }

  & .card__svg {
    // position: absolute;
    // left: 0;
    // top: 95px;
  }
`

function CardRules({ content, id }) {
  return (
    <Container>
      <Card>
        {/* <div className='card__image-container'>
          <img
            className='card__image'
            src='https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80'
            alt=''
          />
        </div> */}

        <svg className='card__svg' viewBox='0 0 800 500'>
          <path
            d='M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500'
            stroke='transparent'
            fill='#fff'
          />
          <path
            className='card__line'
            d='M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400'
            stroke='white'
            strokeWidth='3'
            fill='transparent'
          />
        </svg>

        <div className='card__content'>
          <h1 className='card__title'>{id}</h1>
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Card>
    </Container>
  )
}

export default CardRules

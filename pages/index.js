import { useContext } from 'react'
import styled from 'styled-components'

import MainLayout from '../components/layout/MainLayout'
import AddToHomeScreenContext from '../components/AddToHomescreen'
import { LogoText, FlexWrapper, CenterText } from '../components/styles/Main'

const BackgroundFull = styled.div`
  & img {
    width: 100%;
  }
`

const TextDescription = styled.div`
  text-transform: uppercase;
  font-weight: 700;
`

const Home = () => {
  const { deferredPrompt, changeToNull } = useContext(AddToHomeScreenContext)

  const openAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()

      deferredPrompt.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt')
        } else {
          console.log('User dismissed the install prompt')
        }
      })

      changeToNull(null)
    }
  }

  React.useEffect(() => {
    window.addEventListener('appinstalled', () => {
      console.log('👍', 'app installed')
      window.alert('App installed ! Please check your home screen now!')
    })
  }, [deferredPrompt])

  return (
    <MainLayout>
      <BackgroundFull>
        <img src='/images/header-image.png' />
      </BackgroundFull>

      <CenterText>
        <h3>
          Why shop at <LogoText>2ndkoleksi</LogoText>?
        </h3>

        <FlexWrapper>
          <div>
            <img
              src='images/svg/check.svg'
              alt='checked'
              rel='noopener noreferrer'
            />
            <TextDescription>100% money back guarantee</TextDescription>
          </div>

          <div>
            <img
              src='images/svg/check.svg'
              alt='checked'
              rel='noopener noreferrer'
            />
            <TextDescription>
              we double-check the authenticity before we ship
            </TextDescription>
          </div>
        </FlexWrapper>
      </CenterText>
    </MainLayout>
  )
}

export default Home

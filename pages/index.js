// import { useContext, useEffect } from 'react';
import styled from 'styled-components'

import { useScreenSize } from '../hooks/useScreenSize'
import MainLayout from '../components/layout/MainLayout'
import Greet from '../components/Greet'
import Slide2 from '../components/Slide2'
// import AddToHomeScreenContext from '../context/AddToHomescreen';

const BackgroundFull = styled.div`
background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
  height: inherit;
`

const Home = () => {
  // const { deferredPrompt, changeToNull } = useContext(AddToHomeScreenContext);
  const [isSmallScreen] = useScreenSize()

  // const openAddToHomeScreen = () => {
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt();

  //     deferredPrompt.userChoice.then(function(choiceResult) {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('User accepted the install prompt');
  //       } else {
  //         console.log('User dismissed the install prompt');
  //       }
  //     });

  //     changeToNull(null);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('appinstalled', () => {
  //     console.log('👍', 'app installed');
  //     window.alert('App installed ! Please check your home screen now!');
  //   });
  // }, [deferredPrompt]);

  return (
    <MainLayout>
      <BackgroundFull>
        <Greet />
      </BackgroundFull>
    </MainLayout>
  )
}

export default Home

import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'

import { Global } from '../components/styles/GlobalStyle'
import '../components/styles/nprogress.css'
import { theme } from '../components/theme/Main'

import AddToHomeScreenContext from '../context/AddToHomescreen'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      deferredPrompt: null
    }
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('👍', 'beforeinstallprompt')
      // Stash the event so it can be triggered later.
      this.setState({
        deferredPrompt: event
      })
    })
  }

  changeToNull = (data) => {
    this.setState({
      deferredPrompt: data
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Global />
        <ThemeProvider theme={theme}>
          <AddToHomeScreenContext.Provider
            value={{
              deferredPrompt: this.state.deferredPrompt,
              changeToNull: this.changeToNull
            }}
          >
            <Component {...pageProps} />
          </AddToHomeScreenContext.Provider>
        </ThemeProvider>
        <style jsx global>{`
          @font-face {
            font-family: 'Dosis';
            src: url('/fonts/Dosis-VariableFont_wght.ttf');
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </>
    )
  }
}

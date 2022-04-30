/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import {
  // CacheProvider,
  ThemeProvider,
  CssBaseline,
} from 'ui/styles/muiSetupExport'

import type { AppProps } from 'next/app'
import Head from 'next/head'

// import createEmotionCache from 'ui/styles/createEmotionCache'
import 'ui/styles/webGlobals.css'
import theme from 'ui/themes/webTheme'

// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache()

interface IProps extends AppProps {
  Component: FC
  pageProps: unknown
}
const MyApp = ({ Component, pageProps }: IProps) => (
  // <CacheProvider value={clientSideEmotionCache}>
  <>
    <Head>
      <title>Base Project Next js</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  // </CacheProvider>
)

export default MyApp

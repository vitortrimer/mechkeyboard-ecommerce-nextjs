
import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from 'utils/themes'
import * as S from 'utils/globalStyles'
import Header from 'components/Header'


function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <S.GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

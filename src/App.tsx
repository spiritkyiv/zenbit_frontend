import React from 'react';
import { ContactPage } from './components/ContactForm'
import GlobalStyles from './styles/global';
import GlobalFonts from './fonts/fonts.js'

function App() {
  return (
    <>
    <GlobalFonts />
    <GlobalStyles />
    <ContactPage />
    </>
  );
}

export default App;

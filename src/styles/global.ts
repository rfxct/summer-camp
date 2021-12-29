import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }

  html, body { height: 100% }

  body {
    background-color: #E5E5E5;

    background-image: url(blurred.png);
    background-repeat: no-repeat;
    background-size: 40vh;
    background-position: top left;
  }

  #root {
    height: 100vh;
    width: calc(100vw - 50px * 2);

    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1000px) {
    #background-img { display: none !important }
  }
`

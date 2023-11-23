import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  body {
    margin-left: auto;
    margin-right: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 400px;
   }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

main {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  display: block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 360px;
  height: 360px;
  margin-bottom: 40px;
  border: 2px solid #808080;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
  background-color: #FDEAA8;
}

button {
  margin-right: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: #0B63F6;
  box-shadow: 0 5px 0 #003CC5;
 
}

button:hover {
  background: #003CC5;
  box-shadow: none;
  position: relative;
  top: 5px;
}
`;

export default GlobalStyle;

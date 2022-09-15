import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /** Layout */
    --appbar-height: 40px;
    --list-width: 272px;
    --list-header-height: 40px;
    --gap: 8px;
    --scrollbar-thickness: 17px;

    /** Palette */
    --color-gray-800: rgb(26, 32, 44);
    --color-gray-700: rgb(45, 55, 72);
    --color-gray-600: rgb(74, 85, 104);
    --color-gray-500: rgb(113, 128, 150);
    --color-gray-400: rgb(160, 174, 192);
    --color-gray-200: rgb(226, 232, 240);
    --color-gray-100: rgb(237, 242, 247);
    --color-gray-50: rgb(247, 250, 252);

    --color-blue-800: rgba(26, 32, 44, 0.9);
    --color-blue-700: rgba(27, 164, 255, 0.85);
    --color-blue-600: rgba(27, 164, 255, 0.8);
    --color-blue-500: rgba(27, 164, 255, 0.5);
    --color-blue-400: rgba(27, 164, 255, 0.4);
    --color-blue-200: rgba(27, 164, 255, 0.35);
    --color-blue-100: rgba(27, 164, 255, 0.3);

    --color-green-800: rgba(19, 255, 128, 0.9);
    --color-green-700: rgba(19, 255, 128, 0.85);
    --color-green-600: rgba(19, 255, 128, 0.8);
    --color-green-500: rgba(19, 255, 128, 0.5);
    --color-green-400: rgba(19, 255, 128, 0.4);
    --color-green-200: rgba(19, 255, 128, 0.35);
    --color-green-100: rgba(19, 255, 128, 0.3);

    --color-red-800: rgba(255, 78, 78, 0.9);
    --color-red-700: rgba(255, 78, 78, 0.85);
    --color-red-600: rgba(255, 78, 78, 0.8);
    --color-red-500: rgba(255, 78, 78, 0.5);
    --color-red-400: rgba(255, 78, 78, 0.4);
    --color-red-200: rgba(255, 78, 78, 0.35);
    --color-red-100: rgba(255, 78, 78, 0.3);

    --color-yellow-800: rgba(255, 177, 24, 0.9);
    --color-yellow-700: rgba(255, 177, 24, 0.85);
    --color-yellow-600: rgba(255, 177, 24, 0.8);
    --color-yellow-500: rgba(255, 177, 24, 0.5);
    --color-yellow-400: rgba(255, 177, 24, 0.4);
    --color-yellow-200: rgba(255, 177, 24, 0.35);
    --color-yellow-100: rgba(255, 177, 24, 0.3);
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-gray-800);
  }
`;

export default GlobalStyles;

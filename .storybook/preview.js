import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/globalStyles';
import { defaultTheme } from '../src/styles/themes/default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: defaultTheme.colors.white,
      },
      {
        name: 'dark',
        value: defaultTheme.colors.primary,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];

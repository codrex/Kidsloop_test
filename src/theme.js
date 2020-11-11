import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import postal from 'postal';

import { messages } from './contants';

const colors = {
  primary: '#0e78d5',
  primaryLight: '#03A9F4',
  primaryDark: '#0c3680',
  black: '#121212',
  blackLight: '#00000042',
  white: '#fff',
  textColor: '#00000072'
};
const borderRadius = '12px';
const lightModeTheme = {
  color: {
    ...colors,
    bgColor: colors.white,
    textColor: colors.black,
    textColorPrimary: colors.primaryDark
  },
  borderRadius,
  boxShadow: '0px 0px 20px 5px rgba(0,0,0, .1)'
};
const darkModeTheme = {
  color: {
    ...colors,
    bgColor: colors.black,
    textColor: colors.white,
    textColorPrimary: colors.primary
  },
  borderRadius,
  boxShadow: '0px 0px 20px 5px rgba(255,255,255, .1)'
};
const channel = postal.channel(messages.channel);

export function ThemeProvider({ children }) {
  const [isDarkMode, setMode] = React.useState(false);
  const toggleDarkMode = () =>
    setMode((isDarkMode) => {
      return !isDarkMode;
    });

  React.useEffect(() => {
    const sub = channel.subscribe(
      messages.topics.toggleDarkMode,
      toggleDarkMode
    );

    return () => sub.unsubscribe();
  }, []);

  return (
    <EmotionThemeProvider theme={isDarkMode ? darkModeTheme : lightModeTheme}>
      {children}
    </EmotionThemeProvider>
  );
}

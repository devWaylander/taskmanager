import React, { useContext, useEffect, useMemo, useState } from "react";

type ThemeType = 'light' | 'dark' | 'rainbow'

type ThemeStyle = {
  foreground: string,
  pageBackground: string,
  elementsBackground: string
}

type ThemeContextState = {
  theme: ThemeType,
  style: ThemeStyle,
  toggleTheme: () => void
}

const stylePack = new Array<ThemeType>('light', 'dark', 'rainbow');

const loadFromLocalStorage = (key: string) => {
  let theme:ThemeType = 'light';
  if (localStorage.getItem(key))
    theme = JSON.parse(localStorage.getItem(key) ?? 'light');

  return theme
}

export const styles = {
  light: {
    foreground: '#11A9EC',
    pageBackground: '#11A9EC',
    elementsBackground: '#F7F7F7',
  },
  dark: {
    foreground: '',
    pageBackground: '',
    elementsBackground: '',
  },
  rainbow: {
    foreground: '',
    pageBackground: '',
    elementsBackground: '',
  },
}

export const ThemeContext = React.createContext<ThemeContextState>({} as ThemeContextState);

export const ThemeContextProvider = ({children}:React.PropsWithChildren<{}>) => {
  const dataKey:string = 'theme'

  const [ theme, setTheme ] = useState<ThemeType>(loadFromLocalStorage(dataKey));

  useEffect(() => {
    localStorage.setItem(dataKey, JSON.stringify(theme));
  }, [theme]);

  const value = useMemo(() => ({
    theme: theme,
    style: styles[theme],
    toggleTheme: () => {
      let newIndex = stylePack.indexOf(theme) + 1;
      setTheme(stylePack[newIndex >= stylePack.length ? 0 : newIndex]);
    }
  }), [theme]);

    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
}


export const useThemeContext = ():ThemeContextState => useContext(ThemeContext);
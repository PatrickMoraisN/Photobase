import { createContext, ReactNode, useContext, useState } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ISwitchThemeProviderProps {
  children: ReactNode;
}

type ThemeProps = {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
};

interface ISwitchThemeContextData {
  theme: ThemeProps;
  toggleTheme: () => void;
}

const SwitchThemeContext = createContext<ISwitchThemeContextData>(
  {} as ISwitchThemeContextData
);

export function SwitchThemeProvider({ children }: ISwitchThemeProviderProps) {
  const [theme, setTheme] = useState(() => {
    const localStorageTheme = localStorage.getItem('@photobase-theme');

    if (!localStorageTheme) {
      return light;
    }
    return JSON.parse(localStorageTheme);
  });

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    if (theme.title === 'light') {
      localStorage.setItem('@photobase-theme', JSON.stringify(dark));
      return;
    }
    localStorage.setItem('@photobase-theme', JSON.stringify(light));
  };

  return (
    <SwitchThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SwitchThemeContext.Provider>
  );
}

export function useSwitchTheme(): ISwitchThemeContextData {
  const context = useContext(SwitchThemeContext);
  return context;
}

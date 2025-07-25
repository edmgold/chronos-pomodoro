import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type availableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme = localStorage.getItem('theme');
    return (storageTheme as availableThemes) || 'dark';
  });

  function handleThemeChange() {
    event?.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextThemeIcon = theme === 'dark' ? <SunIcon /> : <MoonIcon />;

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a página inicial'
        title='Página Inicial'
      >
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href='#' title='Histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href='#' title='Configurações'>
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon}
      </a>
    </nav>
  );
}

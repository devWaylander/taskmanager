import React from "react";
import styles from './ToggleThemeButton.module.css';
import { useThemeContext } from "../../../wrappers/ThemeContext";

export const ToggleThemeButton = () => {
  const {style, toggleTheme} = useThemeContext();

  return (
    <div>
      <button className={styles.toggleThemeButton}
      onClick={() => {
        toggleTheme()
      }}
      style={ {"background": style.elementsBackground, color: style.foreground} }>
        Theme
      </button>
    </div>
  )
}

export default ToggleThemeButton
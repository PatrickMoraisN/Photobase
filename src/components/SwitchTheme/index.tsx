import React from 'react';
import Switch from 'react-switch';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import * as S from './style';
import { useSwitchTheme } from '../../hooks/useSwitchTheme';

export function SwitchTheme() {
  const { theme, toggleTheme } = useSwitchTheme();
  return (
    <S.container>
      <BsFillSunFill size={30} />
      <Switch
        onChange={toggleTheme}
        checked={theme.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        onHandleColor="#eedb2c"
        onColor="#111"
        offHandleColor="#999"
        offColor="#d6d6d6"
      />
      <FaMoon size={25} />
    </S.container>
  );
}

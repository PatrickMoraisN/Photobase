import React from 'react';
import Switch from 'react-switch';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import * as S from './style';

export function SwitchTheme() {
  return (
    <S.container>
      <BsFillSunFill size={30} />
      <Switch
        onChange={() => {}}
        checked
        checkedIcon={false}
        uncheckedIcon={false}
      />
      <FaMoon size={25} />
    </S.container>
  );
}

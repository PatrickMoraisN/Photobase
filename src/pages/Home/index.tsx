import React from 'react';
import { SwitchTheme } from '../../components/SwitchTheme';
import * as S from './style';

export default function Home() {
  return (
    <S.HomeSection>
      <h1>Photobase</h1>
      <p>Save your photos beautifully in Firebase</p>
      <SwitchTheme />
    </S.HomeSection>
  );
}

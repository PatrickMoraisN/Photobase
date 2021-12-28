import React from 'react';
import { useGoogleAuthInfo } from '../../hooks/useGoogleAuthInfo';
import * as S from './style';

export function Header() {
  const { email, profilePic } = useGoogleAuthInfo();
  return (
    <S.Header>
      <S.HeadingLogo>Photobase</S.HeadingLogo>

      <S.UserInfoContainer>
        <img src={profilePic} alt="Profile" />
        <p>{email}</p>
        <button type="button">Logout</button>
      </S.UserInfoContainer>
    </S.Header>
  );
}

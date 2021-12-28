import React from 'react';
import { useGoogleAuthInfo } from '../../hooks/useGoogleAuthInfo';
import * as S from './style';

export function Photo() {
  const { email, profilePic } = useGoogleAuthInfo();

  return (
    <div>
      <S.heading>Photobase</S.heading>
      <h3>Hello!!</h3>
      <h4>{email}</h4>
      <img src={profilePic} alt="Profile" />
    </div>
  );
}

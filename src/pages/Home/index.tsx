import React from 'react';
import GoogleLogin from 'react-google-login';
import { SwitchTheme } from '../../components/SwitchTheme';
import * as S from './style';

export default function Home() {
  const client_id = String(process.env.CLIENT_ID);

  const successResponseGoogle = () => {};

  const failureResponseGoogle = () => {};

  return (
    <S.HomeSection>
      <h1>Photobase</h1>
      <p>Save your photos beautifully in Firebase</p>
      <GoogleLogin
        clientId={client_id}
        buttonText="Login with Google"
        onSuccess={successResponseGoogle}
        onFailure={failureResponseGoogle}
      />
      <SwitchTheme />
    </S.HomeSection>
  );
}

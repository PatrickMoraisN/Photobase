import React from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useNavigate } from 'react-router';
import { SwitchTheme } from '../../components/SwitchTheme';
import * as S from './style';

interface ResponseGoogle extends GoogleLoginResponse {
  profileObj: {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
  };
}

export default function Home() {
  const client_id = String(process.env.REACT_APP_CLIENT_ID);
  const navigate = useNavigate();

  const successResponseGoogle = (
    response: ResponseGoogle | GoogleLoginResponseOffline
  ) => {
    const {
      profileObj: { email, imageUrl },
    } = response as ResponseGoogle;
    // navigate('/photo');
  };

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

import React from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { SwitchTheme } from '../../components/SwitchTheme';
import { useGoogleAuthInfo } from '../../hooks/useGoogleAuthInfo';
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
  const { setInfo } = useGoogleAuthInfo();

  const successResponseGoogle = (
    response: ResponseGoogle | GoogleLoginResponseOffline
  ) => {
    const {
      profileObj: { email, imageUrl },
    } = response as ResponseGoogle;
    const obj = { emailParam: email, profilePicParam: imageUrl };
    setInfo(obj);
    navigate('/photo');
  };

  const failureResponseGoogle = () => {
    toast.error('Something went wrong!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

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
      <ToastContainer />
    </S.HomeSection>
  );
}

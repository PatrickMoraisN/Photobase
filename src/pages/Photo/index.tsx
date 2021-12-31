import React from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Gallery } from '../../components/Gallery';
import { Header } from '../../components/Header';
import { UploadPhoto } from '../../components/UploadPhoto';
import * as S from './style';

export function Photo() {
  const navigate = useNavigate();
  React.useEffect(() => {
    const localStorageUserInfo = localStorage.getItem('@photobase-user');

    if (!localStorageUserInfo) {
      toast.error('You must be logged in!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      navigate('/');
    }
  }, []);

  return (
    <>
      <Header />
      <S.container>
        <UploadPhoto />
        <h2>Gallery</h2>
        <Gallery />
      </S.container>
      <ToastContainer />
    </>
  );
}

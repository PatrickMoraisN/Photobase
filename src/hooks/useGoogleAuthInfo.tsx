import React, { createContext, ReactNode } from 'react';

interface IGoogleAuthInfoProviderProps {
  children: ReactNode;
}

interface ISetInfoProps {
  emailParam: string;
  profilePicParam: string;
}

interface IGoogleAuthInfoContextProps {
  email: string;
  profilePic: string;
  setInfo: ({ emailParam, profilePicParam }: ISetInfoProps) => void;
}

const GoogleAuthInfoContext = createContext<IGoogleAuthInfoContextProps>(
  {} as IGoogleAuthInfoContextProps
);

export function GoogleAuthInfoProvider({
  children,
}: IGoogleAuthInfoProviderProps) {
  const [email, setEmail] = React.useState(() => {
    const localStorageUserInfo = localStorage.getItem('@photobase-user');
    if (!localStorageUserInfo) {
      return '';
    }
    const { email: emailUser } = JSON.parse(localStorageUserInfo);
    return emailUser;
  });
  const [profilePic, setProfilePic] = React.useState(() => {
    const localStorageUserInfo = localStorage.getItem('@photobase-user');
    if (!localStorageUserInfo) {
      return '';
    }
    const { profilePic: picUser } = JSON.parse(localStorageUserInfo);
    return picUser;
  });

  const setInfo = ({ emailParam, profilePicParam }: ISetInfoProps) => {
    const obj = { email: emailParam, profilePic: profilePicParam };
    localStorage.setItem('@photobase-user', JSON.stringify(obj));
    setEmail(emailParam);
    setProfilePic(profilePicParam);
  };

  return (
    <GoogleAuthInfoContext.Provider value={{ email, profilePic, setInfo }}>
      {children}
    </GoogleAuthInfoContext.Provider>
  );
}

export function useGoogleAuthInfo(): IGoogleAuthInfoContextProps {
  const context = React.useContext(GoogleAuthInfoContext);
  return context;
}

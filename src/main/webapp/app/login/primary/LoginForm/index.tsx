import { Button } from '@nextui-org/react';
import React, { createContext, useEffect, useState } from 'react';

import LoginModal from '@/login/primary/LoginModal';
import { getLocalStorage } from '@/common/Services/storage';

export const UserInfoContext = createContext<UserInfoContextType | Record<string, never>>({});

const LoginForm = () => {
  const [isOpen, setOpen] = useState(false);
  const [username, setUsername] = useState<any>('');
  const [token, setToken] = useState<any>('');

  const userInfoContextValues = {
    setUsername,
    setToken,
  };

  const onClickLoginButton = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button auto shadow onClick={onClickLoginButton}>
        Se connecter
      </Button>
      {token && (
        <p>
          Bienvenue <strong>{username}</strong> !
        </p>
      )}
      <UserInfoContext.Provider value={userInfoContextValues}>
        <LoginModal open={isOpen} onClose={onCloseModal} />
      </UserInfoContext.Provider>
    </div>
  );
};

export default LoginForm;

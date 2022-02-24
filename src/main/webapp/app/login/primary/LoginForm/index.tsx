import LoginModal from '@/login/primary/LoginModal';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { LoginModalDataInterface } from '../LoginModal/interface';

const LoginForm = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState<LoginModalDataInterface>();

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
      <LoginModal open={isOpen} onClose={onCloseModal} setData={setData} />
      {JSON.stringify(data)}
    </div>
  );
};

export default LoginForm;

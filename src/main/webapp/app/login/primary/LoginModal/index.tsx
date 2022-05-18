import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Password, User } from 'react-iconly';
import { Button, Input, Modal, Spacer, Text } from '@nextui-org/react';

import { login } from '@/login/services/login';

import './LoginModal.scss';

const LoginModal = ({ open, onClose }: LoginModalType) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState<boolean>(false);

  const onSubmit = (loginData: any) => {
    if (loginData.username && loginData.password) {
      login(loginData);
      setError(false);
      onClose();
    } else setError(true);
  };

  const handleClose = () => {
    setError(false);
    onClose();
  };

  return (
    <Modal blur open={open} onClose={handleClose} aria-labelledby="modal-login">
      <Modal.Header>
        <Text size={18}>
          Se connecter à
          <Text size={18} b>
            {' '}
            Jhipster Lite
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            clearable
            bordered
            fullWidth
            aria-label="modal-login-username"
            data-testid="modal-login-username"
            color="primary"
            size="lg"
            placeholder="Nom d'utilisateur"
            contentLeft={<User />}
            {...register('username')}
          />
          <Spacer y={0.3} />
          <Input.Password
            clearable
            bordered
            fullWidth
            aria-label="modal-login-password"
            data-testid="modal-login-password"
            color="primary"
            size="lg"
            placeholder="Mot de passe"
            contentLeft={<Password />}
            {...register('password')}
          />
          <Spacer y={0.3} />
          {error && (
            <Text data-testid="error-message" size={13} color="error">
              Veuillez remplir les champs ci dessus
            </Text>
          )}
          <Spacer y={1} />
          <input type="checkbox" {...register('rememberMe')} />
          <label>Se souvenir de moi</label>
          <Spacer y={1} />
          <Button data-testid="submit-button" className="submit-button" type="submit" shadow auto>
            Se connecter
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

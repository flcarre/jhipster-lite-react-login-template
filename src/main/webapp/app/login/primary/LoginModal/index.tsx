import React from 'react';
import { useForm } from 'react-hook-form';
import { Password, User } from 'react-iconly';
import { Button, Checkbox, Input, Modal, Spacer, Text } from '@nextui-org/react';

import './LoginModal.scss';
import { login } from '@/login/services/login';

const LoginModal = ({ open, onClose }: LoginModalType) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (loginData: any) => {
    login(loginData);
    onClose();
  };

  return (
    <Modal blur open={open} onClose={onClose} aria-labelledby="modal-login">
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

import { useForm } from 'react-hook-form';
import { Password, User } from 'react-iconly';
import { Button, Input, Modal, Spacer, Text } from '@nextui-org/react';

import { LoginModalDataInterface, LoginModalInferface } from './interface';

import './LoginModal.scss';

const LoginModal = ({ open, onClose, setData }: LoginModalInferface) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    setData(data);
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

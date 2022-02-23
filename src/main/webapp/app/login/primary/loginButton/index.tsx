import { Button } from '@nextui-org/react';

interface LoginButtonInferface {
  onClick: React.MouseEventHandler;
}

const LoginButton = ({ onClick }: LoginButtonInferface) => {
  return <Button onClick={onClick}>login</Button>;
};

export default LoginButton;

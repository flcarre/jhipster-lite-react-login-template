export interface LoginModalInferface {
  open: boolean;
  onClose: () => void;
  setData: (data: LoginModalDataInterface) => void;
}

export interface LoginModalDataInterface {
  username: string;
  password: string;
}

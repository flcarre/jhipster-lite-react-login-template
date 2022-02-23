import LoginForm from '@/login/primary/LoginForm/index';
import { act, fireEvent, render } from '@testing-library/react';

describe('loginForm', () => {
  it('should render the login button without crashing', () => {
    render(<LoginForm />);
  });

  it('render button should contain "Se connecter"', () => {
    const { getByText } = render(<LoginForm />);
    const loginButton = getByText('Se connecter');
    expect(loginButton).toBeTruthy();
  });

  it('render the modal on login button click and close it', async () => {
    const { getByText, getByTestId } = render(<LoginForm />);
    const loginButton = getByText('Se connecter');
    fireEvent.click(loginButton);
    expect(getByText('Se connecter à')).toBeTruthy();
    const submitButton = getByTestId('submit-button');
    await act(async () => {
      fireEvent.click(submitButton);
    });
  });
});

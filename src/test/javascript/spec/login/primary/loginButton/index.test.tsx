import { render } from '@testing-library/react';
import LoginButton from '@/login/primary/loginButton/index';

describe('loginButton', () => {
  it('should render the login button without crashing', () => {
    render(<LoginButton onClick={() => {}} />);
  });

  it('render button should contain "login"', () => {
    const { getByText } = render(<LoginButton onClick={() => {}} />);
    const linkElement = getByText('login');
    expect(linkElement).toBeTruthy();
  });

  it('shoud emit click on click', () => {
    const mockOnClick = jest.fn();

    const { getByText } = render(<LoginButton onClick={mockOnClick} />);
    const linkElement = getByText('login');
    linkElement.click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});

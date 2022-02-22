import { render, screen } from '@testing-library/react';
import App from '../../../../../../main/webapp/app/common/primary/app/App';

describe('App tests', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeTruthy();
  });
});

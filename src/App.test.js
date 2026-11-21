import { render, screen } from '@testing-library/react';
import App from './App';
test('muestra el portafolio personal', () => {
  window.history.pushState({}, '', '/');
  render(<App />);
  expect(screen.getByRole('heading', { name: /Sebastian Marquina/i })).toBeInTheDocument();
});

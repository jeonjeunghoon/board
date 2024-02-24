import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

test('Renders the main page', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(true).toBeTruthy();
});

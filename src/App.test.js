import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'

test('it renders without crashing', function() {
    const { getByText } = render(
    <MemoryRouter>
        <App />
      </MemoryRouter>)

    const title = getByText("Welcome to the color factory!")
    expect(title).toBeInTheDocument();
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>)
  expect(asFragment).toMatchSnapshot()
})
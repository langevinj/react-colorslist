import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders without crashing', function() {
    const { getByText } = render(<App />)

    const title = getByText("Welcome to the color factory!")
    expect(title).toBeInTheDocument();
});

it('matches snapshot', function() {
  const { asFragment } = render(<App />)
  expect(asFragment).toMatchSnapshot()
})
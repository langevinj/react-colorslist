import { render, screen } from '@testing-library/react';
import Routes from './Routes';
import { MemoryRouter } from 'react-router-dom'

test('it renders without crashing', function () {
    const { getByText } = render(
    <MemoryRouter>
            <Routes />
    </MemoryRouter>)

    const title = getByText("Welcome to the color factory!")
    expect(title).toBeInTheDocument();
});

it('matches snapshot', function () {
    const { asFragment } = render(
        <MemoryRouter>
            <Routes />
        </MemoryRouter>)
    expect(asFragment).toMatchSnapshot()
})
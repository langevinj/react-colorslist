import { render, screen, fireEvent } from '@testing-library/react';
import ColorsList from './ColorsList';
import { MemoryRouter } from 'react-router-dom'
import { renderWithRouter } from './testutilities'

const colors = [{ name: "red", code: "#fc0f03" }]

it("mounts without crashing", function () {
    const { getByText } = render(
        <MemoryRouter>
            <ColorsList colors={colors} />
        </MemoryRouter>
    )

    const prompt = getByText("Please select a color.");
    expect(prompt).toBeInTheDocument();
});

it("matches the snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <ColorsList colors={colors} />
        </MemoryRouter>
    )

    expect(asFragment).toMatchSnapshot();
});

it("displays the correct link and color qualities", function () {
    const { getByTestId } = render(
        <MemoryRouter>
            <ColorsList colors={colors} />
        </MemoryRouter>
    )
    
    //expect link to the correct color
    const link = getByTestId('color-link')
    expect(link).toContainHTML('<a href="/colors/red">red</a>')
});
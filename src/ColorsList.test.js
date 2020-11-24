import { render, screen } from '@testing-library/react';
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
})
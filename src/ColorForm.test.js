import { render, screen } from '@testing-library/react';
import ColorForm from './ColorForm';
import { MemoryRouter} from 'react-router-dom'
import { renderWithRouter } from './testutilities'

//fake function to pass
function addColor() {
    return ""
}

it("mounts without crashing", function() {
    const { getByText } = render(
        <MemoryRouter>
            <ColorForm addColor={addColor} />
        </MemoryRouter>
    )

    const button = getByText("Add this color");
    expect(button).toBeInTheDocument();
});

it("matches the snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <ColorForm addColor={addColor} />
        </MemoryRouter>
    )

    expect(asFragment).toMatchSnapshot();
})
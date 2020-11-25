import { getByText, render, screen } from '@testing-library/react';
import Color from './Color';
import App from './App'
import { MemoryRouter, createMemoryHistory } from 'react-router-dom'
import { renderWithRouter } from './testutilities'

const route = '/colors/red'
const colors = [{ name: "red", code: "#fc0f03" }]

it('renders without crashing', () => {
    renderWithRouter(<Color colors={colors}/>, {route})
})

it('matches snapshot', function () {
    const  { asFragment} = renderWithRouter(<Color colors={colors} />, { route })
    expect(asFragment).toMatchSnapshot()
});

// it('has a background color that is correct', function () {
//     const { getByTestId, getByText } = renderWithRouter(<Color colors={colors} />, { route })
    
//     // expect(getByTestId("Color-container")).toHaveAttribute('style','backgroundColor: #fc0f03')
//     expect(getByText('THIS IS red')).toBeInTheDocument();
// });

// it("should have the correct background color", function() {
//     const { getByTestId, getByText } = render (<MemoryRouter initialEntries={['/colors/red']}>
//         <Color colors={colors} />
//     </MemoryRouter>)

//     // expect(getByTestId('Color-container')).toBeInTheDocument()
//     expect(getByText("THIS IS RED")).toBeInTheDocument();
// })
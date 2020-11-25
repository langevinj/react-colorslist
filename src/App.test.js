import { render, screen, fireEvent } from '@testing-library/react';
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

it("navigates to a color page correctly", function() {
  const { getByText, getByTestId } = render(
    <MemoryRouter initialEntries={["/colors"]}>
      <App />
    </MemoryRouter>);

    expect(getByText("Please select a color.")).toBeInTheDocument();
    expect(getByText("red")).toBeInTheDocument()

    const link = getByText('red')
    fireEvent.click(link)
    expect(getByText('THIS IS red')).toBeInTheDocument()

    //check for correct background color
    expect(getByTestId('Color-container')).toHaveAttribute('style', 'background-color: rgb(252, 15, 3);')
})

it('handles the color form correctly', function() {
  const { getByText, getByTestId, getByLabelText } = render(
    <MemoryRouter initialEntries={["/colors"]}>
      <App />
    </MemoryRouter>);

  expect(getByText("Please select a color.")).toBeInTheDocument();
  expect(getByText("Add a color")).toBeInTheDocument()

  const link = getByText("Add a color");
  fireEvent.click(link)

  expect(getByText('Add this color')).toBeInTheDocument()

  const nameInput = getByLabelText("Color name:")
  const codeInput = getByLabelText("Color value:")
  const submitButton = getByText("Add this color")

  fireEvent.change(nameInput, { target: {value: 'pink'}});
  fireEvent.change(codeInput, { target: { value: "#ffc0cb" }})
  fireEvent.click(submitButton)
  
  //expect the new color to have been added to the color list
  expect(getByText('pink')).toBeInTheDocument();
  //expect to be back on the home page
  expect(getByText("Please select a color.")).toBeInTheDocument();
})
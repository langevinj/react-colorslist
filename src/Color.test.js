import { render, screen } from '@testing-library/react';
import Color from './Color';
import { MemoryRouter, createMemoryHistory } from 'react-router-dom'
import { renderWithRouter } from './testutilities'

test('renders without crashing', () => {
    const route = '/colors/red'
    const colors = [{ name: "red", code: "#fc0f03" }]
    renderWithRouter(<Color colors={colors}/>, {route})
})

test('matches snapshot', function () {
    const route = '/colors/red'
    const colors = [{ name: "red", code: "#fc0f03" }]
    const  { asFragment} = renderWithRouter(<Color colors={colors} />, { route })
    expect(asFragment).toMatchSnapshot()
})
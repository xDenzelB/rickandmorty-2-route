import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './src/App';

describe('App', () => {
  it('Should render a list of characters and navigate based on gender', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await waitForElementToBeRemoved(screen.getByText(/loading/i));
    userEvent.selectOptions(screen.getByRole('combobox'), 'Male');
    expect(screen.getByRole('option', { name: 'Male' }).selected).toBe(true);

    const result = await screen.findAllByText(/male/i);
    expect(result[0].textContent).toEqual('Male');


  })
})
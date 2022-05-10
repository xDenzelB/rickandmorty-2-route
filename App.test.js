import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './src/App';
import { wait } from '@testing-library/user-event/dist/utils';

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

  it('Should render the details route', async () => {
    render(
      <MemoryRouter initialEntries={['/1', '/2', '/3']}
        initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const character = await screen.findByText('Rick Sanchez');
    expect(character).toBeInTheDocument();
  })
})
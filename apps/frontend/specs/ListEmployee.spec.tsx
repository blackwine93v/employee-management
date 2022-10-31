
import { screen } from '@testing-library/react';
import ListEmployee from 'apps/frontend/pages/employee/list';
import { renderWithProviders } from '../helpers/testUtils';

describe('ListEmployee', () => {
  it('renders the "Add employees" button', () => {
    renderWithProviders(<ListEmployee />);

    const addEmployeeButton = screen.getByText('Add employees');
    expect(addEmployeeButton).toBeInTheDocument()
  });

  it('renders the switch view mode button (Grid & Table mode)', () => {
    renderWithProviders(<ListEmployee />);

    const switchModeBtn = screen.getByTestId('switch-viewmode');
    expect(switchModeBtn).toBeInTheDocument()
  });
});

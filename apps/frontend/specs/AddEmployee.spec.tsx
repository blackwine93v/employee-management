
import { screen } from '@testing-library/react';
import AddEmployee from '../components/employee/AddEmployee';
import { renderWithProviders } from '../helpers/testUtils';

describe('AddEmployee', () => {
  it('renders the "List View" button', () => {
    renderWithProviders(<AddEmployee />);

    const element = screen.getByTestId('AddEmployee-viewlist-btn');
    expect(element).toBeInTheDocument()
  });

  it('renders the employee form', () => {
    renderWithProviders(<AddEmployee />);

    const element = screen.getByTestId('EmployeeForm');
    expect(element).toBeInTheDocument()
  });
});

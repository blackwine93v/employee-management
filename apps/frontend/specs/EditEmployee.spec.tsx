
import { screen } from '@testing-library/react';
import EditEmployee from '../components/employee/EditEmployee';
import { renderWithProviders } from '../helpers/testUtils';

describe('EditEmployee', () => {
  it('renders the "List View" button', () => {
    renderWithProviders(<EditEmployee employee={{} as any} />);

    const element = screen.getByTestId('EditEmployee-viewlist-btn');
    expect(element).toBeInTheDocument()
  });

  it('renders the employee form', () => {
    renderWithProviders(<EditEmployee employee={{} as any} />);

    const element = screen.getByTestId('EmployeeForm');
    expect(element).toBeInTheDocument()
  });
});

import { screen } from '@testing-library/react';
import EmployeeForm from '../components/employee/EmployeeForm';
import { renderWithProviders } from '../helpers/testUtils';

describe('FormEmployee', () => {
  it('renders Firstname field', () => {
    renderWithProviders(
      <EmployeeForm buttonText="Save" onSubmit={() => null} />
    );

    const field = screen.getByTestId('EmployeeForm-firstname');
    expect(field).toBeInTheDocument();
  });

  it('renders Lastname field', () => {
    renderWithProviders(
      <EmployeeForm buttonText="Save" onSubmit={() => null} />
    );

    const field = screen.getByTestId('EmployeeForm-lastname');
    expect(field).toBeInTheDocument();
  });

  it('renders Phone field', () => {
    renderWithProviders(
      <EmployeeForm buttonText="Save" onSubmit={() => null} />
    );

    const field = screen.getByTestId('EmployeeForm-phone');
    expect(field).toBeInTheDocument();
  });

  it('renders Email field', () => {
    renderWithProviders(
      <EmployeeForm buttonText="Save" onSubmit={() => null} />
    );

    const field = screen.getByTestId('EmployeeForm-email');
    expect(field).toBeInTheDocument();
  });

  it('renders Gender field', () => {
    renderWithProviders(
      <EmployeeForm buttonText="Save" onSubmit={() => null} />
    );

    const field = screen.getByTestId('EmployeeForm-gender');
    expect(field).toBeInTheDocument();
  });

  it('renders correct submit button text', () => {
    renderWithProviders(
      <EmployeeForm buttonText="Save" onSubmit={() => null} />
    );

    const element = screen.getByTestId('EmployeeForm-submit-button');
    expect(element.innerHTML).toContain('Save');
  });
});

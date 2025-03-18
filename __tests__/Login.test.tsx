import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../src/un-authorised/screens/Login'; // Adjust the import path as needed

// Mock the necessary dependencies
jest.mock('@react-navigation/stack', () => ({
  StackNavigationProp: jest.fn()
}));

describe('Login Component', () => {
  // Mock navigation prop
  const mockNavigation:any = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  // Render Component Test Cases
  describe('Rendering', () => {
    it('renders login screen correctly', () => {
      const { getByText, getByTestId } = render(<Login navigation={mockNavigation} />);
      
      // Check key elements are present
      expect(getByText('Login')).toBeTruthy();
      expect(getByTestId('email')).toBeTruthy();
      expect(getByTestId('password')).toBeTruthy();
      expect(getByTestId('login-button')).toBeTruthy();
    });
  });

  // Input Validation Test Cases
  describe('Input Validation', () => {
    it('allows typing email', () => {
      const { getByTestId } = render(<Login navigation={mockNavigation} />);
      const emailInput = getByTestId('email');
      
      fireEvent.changeText(emailInput, 'test@example.com');
      expect(emailInput.props.value).toBe('test@example.com');
    });

    it('allows typing password', () => {
      const { getByTestId } = render(<Login navigation={mockNavigation} />);
      const passwordInput = getByTestId('password');
      
      fireEvent.changeText(passwordInput, 'password123');
      expect(passwordInput.props.value).toBe('password123');
    });
  });

  // Button Interaction Test Cases
  describe('Button Interactions', () => {
    it('shows loading state when login button is pressed', async () => {
      const { getByTestId } = render(<Login navigation={mockNavigation} />);
      const loginButton = getByTestId('login-button');
      
      fireEvent.press(loginButton);
      
      // Wait for loading to complete (5 seconds)
      await waitFor(() => {
        expect(loginButton.props.loading).toBe(true);
      }, { timeout: 5000 });
    });

    it('completes loading after 5 seconds', async () => {
      const { getByTestId } = render(<Login navigation={mockNavigation} />);
      const loginButton = getByTestId('login-button');
      
      fireEvent.press(loginButton);
      
      // Wait for loading to complete and then stop
      await waitFor(() => {
        expect(loginButton.props.loading).toBe(false);
      }, { timeout: 6000 });
    });
  });

  // Accessibility Test Cases
  describe('Accessibility', () => {
    it('has correct keyboard types for inputs', () => {
      const { getByTestId } = render(<Login navigation={mockNavigation} />);
      const emailInput = getByTestId('email');
      const passwordInput = getByTestId('password');
      
      expect(emailInput.props.keyboardType).toBe('email-address');
      expect(passwordInput.props.keyboardType).toBe('default');
    });

    it('password input is secure', () => {
      const { getByTestId } = render(<Login navigation={mockNavigation} />);
      const passwordInput = getByTestId('password');
      
      expect(passwordInput.props.secureTextEntry).toBe(true);
    });
  });

  // UI Element Test Cases
  describe('UI Elements', () => {
    it('displays "Don\'t have an account? Sign up" text', () => {
      const { getByText } = render(<Login navigation={mockNavigation} />);
      
      expect(getByText("Don't have an account?")).toBeTruthy();
      expect(getByText('Sign up')).toBeTruthy();
    });
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';

describe('DarkModeToggle Component', () => {
  test('renders toggle button', () => {
    render(<DarkModeToggle />);
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  test('toggles dark mode when clicked', () => {
    render(<DarkModeToggle />);
    const toggleButton = screen.getByRole('button');
    
    // Initial state should be light mode
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    // Click to toggle to dark mode
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Click again to toggle back to light mode
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
}); 
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
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
}); 
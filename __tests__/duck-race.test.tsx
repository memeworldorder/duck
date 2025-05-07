/**
 * @file DuckRacePage component tests
 * @description Ensures DuckRacePage renders, starts a race, and shows the winner modal.
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DuckRacePage from '../pages/duck-race';

// Mock next/router for useRouter
jest.mock('next/router', () => ({
  useRouter: () => ({ query: {} })
}));

describe('DuckRacePage', () => {
  it('renders and starts a race, showing the winner modal', async (): Promise<void> => {
    render(<DuckRacePage />);
    expect(screen.getByText(/Duck Race/i)).toBeInTheDocument();
    const startButton = screen.getByRole('button', { name: /start race/i });
    fireEvent.click(startButton);
    // Wait for countdown and race to finish
    await waitFor(() => {
      expect(screen.getByText(/wins!/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
}); 
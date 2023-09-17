import { render, screen } from '@testing-library/react';
import PathFinder from './PathFinder';

test('renders learn react link', () => {
  render(<PathFinder />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

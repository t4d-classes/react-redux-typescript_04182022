import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { ToolHeader } from './ToolHeader';

test('snapshot ToolHeader component', () => {
  expect(
    renderer.create(<ToolHeader headerText="The Tool" />).toJSON(),
  ).toMatchSnapshot();
});

describe('ToolHeader component', () => {
  test('renders ToolHeader component', () => {
    render(
      <ToolHeader headerText="The Tool" />,
    );

    // expect(getByText('The Tool').textContent).toBe('The Tool');
    expect(screen.getByText('The Tool')).toBeInTheDocument();

    expect(screen.getByRole('heading').textContent).toBe('The Tool');
  });
});

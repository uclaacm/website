import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Officers from '../../components/LeadershipOfficers';
import data from '../../data';

expect.extend(toHaveNoViolations);

// TODO: consider lifting this mock globally
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={props.alt} {...props} />;
  },
}));

it('has no axe violations', async () => {
  const { leadership } = data;

  // this let / async construct is required since next/image rendering
  // is a side effect that needs to be captured with async act
  // see https://reactjs.org/docs/test-utils.html#act
  let results;
  await act(async () => {
    const { container } = render(<Officers officers={leadership} />);
    results = await axe(container);
  });

  expect(results).toHaveNoViolations();
});

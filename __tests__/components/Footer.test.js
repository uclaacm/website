import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { act } from 'react';
import Footer from '../../components/Footer';

expect.extend(toHaveNoViolations);

it('has no axe violations', async () => {
  // this let / async construct is required since next/image rendering
  // is a side effect that needs to be captured with async act
  // see https://reactjs.org/docs/test-utils.html#act
  let results;
  await act(async () => {
    const { container } = render(<Footer />);
    results = await axe(container);
  });

  expect(results).toHaveNoViolations();
});

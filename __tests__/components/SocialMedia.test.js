import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { act } from 'react-dom/test-utils';
import SocialMedia from '../../components/SocialMedia';

expect.extend(toHaveNoViolations);

describe('SocialMedia, dark text (default)', () => {
  it('has no axe violations', async () => {
    // this let / async construct is required since next/image rendering
    // is a side effect that needs to be captured with async act
    // see https://reactjs.org/docs/test-utils.html#act
    let results;
    await act(async () => {
      const { container } = render(<SocialMedia />);
      results = await axe(container);
    });
    expect(results).toHaveNoViolations();
  });
});

describe('SocialMedia, light text', () => {
  it('has no axe violations', async () => {
    // this let / async construct is required since next/image rendering
    // is a side effect that needs to be captured with async act
    // see https://reactjs.org/docs/test-utils.html#act
    let results;
    await act(async () => {
      const { container } = render(<SocialMedia type="light" />);
      results = await axe(container);
    });
    expect(results).toHaveNoViolations();
  });
});

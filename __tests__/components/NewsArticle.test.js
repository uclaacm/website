import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { act } from 'react';
import NewsArticle from '../../components/NewsArticle';
import news from '../newsoutput.json';

expect.extend(toHaveNoViolations);

it('has no axe violations', async () => {
  const article = news[0];
  // this let / async construct is required since next/image rendering
  // is a side effect that needs to be captured with async act
  // see https://reactjs.org/docs/test-utils.html#act
  let results;
  await act(async () => {
    const { container } = render(<NewsArticle article={article} />);
    results = await axe(container);
  });

  expect(results).toHaveNoViolations();
});

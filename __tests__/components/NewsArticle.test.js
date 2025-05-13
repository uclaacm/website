// __tests__/components/NewsArticle.test.js

// Mock the dynamically generated newsoutput.json file
jest.mock('../../data/newsoutput.json', () => [
  {
    date: '2025-01-01',
    headline: 'Mock headline',
    image: "https://www.uclaacm.com/images/2017-acm-excellence-award.png",
    alt: "Mock alt",
    link: "https://www.cs.ucla.edu/ucla-acm-receives-student-chapter-excellence-award/"
  },
]);

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { act } from 'react';
import NewsArticle from '../../components/NewsArticle';
import news from '../../data/newsoutput.json';

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

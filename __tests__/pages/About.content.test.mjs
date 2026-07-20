import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const aboutPage = await readFile(new URL('../../pages/about.js', import.meta.url), 'utf8');
const aboutStyles = await readFile(new URL('../../styles/pages/About.module.scss', import.meta.url), 'utf8');

test('the About page links visitors to its related resources', () => {
  const expectedLinks = [
    ['event calendar', '/events'],
    ['our officers', '/officers'],
    ['our history', '/history'],
    ['Friends of ACM', '/friends'],
    ['Dev Team', '/dev'],
    ['JEDI', '/jedi'],
    ['Impact', '/impact'],
    ['Quantum', '/quantum'],
  ];

  for (const [label, path] of expectedLinks) {
    assert.match(
      aboutPage,
      new RegExp(`<Link href="${path}">${label}</Link>`),
      `About page must link ${label} to ${path}`,
    );
  }
});

test('the About page uses full-size body text', () => {
  assert.match(
    aboutStyles,
    /p \{\n\s+font-size: 1em;/,
    'About page body text must use a font size of at least 1em',
  );
});

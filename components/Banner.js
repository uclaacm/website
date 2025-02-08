import { useState, useEffect } from 'react';

// this can get refactored into something better
const mapUpToSum = (num, fn) => {
  const res = [];
  for (let i = 0; i < num; i++) res.push(fn(i, res));
  return res;
};

const generateCols = (n, m, classPattern = [''], randomize = false) => {
  return mapUpToSum(n, (i) => (
    <div className="square-col" key={i}>
      {mapUpToSum(m, (j) => {
        const classNames = ['square'];
        const name = classPattern[j % classPattern.length];
        if (name !== '') {
          classNames.push(classPattern[j % classPattern.length]);
        } else {
          // note: this Math.random() is the source of [Warning: Prop `className` did not match. Server: x Client: y]
          // https://stackoverflow.com/questions/69866771/nextjs-prop-style-did-not-match
          if (randomize) {
            const r = Math.random();
            if (r < 0.08) classNames.push('white');
            else if (r < 0.4) classNames.push('light');
          }
        }
        return <div className={classNames.join(' ')} key={j} />;
      })}
    </div>
  ));
};

const Banner = (props) => {
  const [randomize, setRandomize] = useState(false);
  const [color, setColor] = useState(0);
  let timer;

  useEffect(() => {
    setRandomize(true);

    const committees = ['acm'];
    if (!props.decorative) {
      committees.push(
        'studio',
        'icpc',
        'design',
        'cyber',
        'teachla',
        'w',
        'ai',
        'hack',
      );
    }

    const el = document.querySelector('.banner');
    timer = setInterval(() => {
      el.classList.remove(committees[color]);
      setColor((prevColor) => (prevColor + 1) % committees.length);
      el.classList.add(committees[color]);
    }, 4000);

    return () => {
      clearInterval(timer); // Cleanup on unmount
    };
  }, [color, props.decorative]); // Re-run when color or decorative props change

  const decorative = props.decorative || false;
  const sideCols = props.sideCols || (decorative ? 12 : 7);
  const height = props.height || (decorative ? 2 : 7);
  const width = props.width || 5;

  return (
    <div className={`banner ${decorative ? 'decorative' : ''}`}>
      <div className="square-col-container">
        {!decorative &&
          generateCols(1, height, [
            '',
            '',
            '',
            '',
            'white',
            'white',
            'white',
          ])}
        {!decorative &&
          generateCols(1, height, ['', '', '', '', '', 'white', 'white'])}
        {generateCols(1, height, ['', '', '', '', '', '', 'white'])}
        {generateCols(sideCols, height, undefined, randomize)}
        {!decorative &&
          generateCols(1, height, ['', '', 'white', 'white', '', '', ''])}
        {!decorative &&
          generateCols(width, height, [
            '',
            '',
            'white',
            'white',
            'white',
            '',
            '',
          ])}
        {!decorative &&
          generateCols(1, height, ['', '', '', 'white', 'white', '', ''])}
        {generateCols(sideCols, height, undefined, randomize)}
        {generateCols(1, height, ['white', '', '', '', '', '', ''])}
        {!decorative &&
          generateCols(1, height, ['white', 'white', '', '', '', '', ''])}
        {!decorative &&
          generateCols(1, height, [
            'white',
            'white',
            'white',
            '',
            '',
            '',
            '',
          ])}
      </div>
      {!decorative && (
        <div className="title">
          <h1>code the future.</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;

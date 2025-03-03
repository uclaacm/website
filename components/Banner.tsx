import { useState, useEffect } from "react";

interface Banner {
  decorative?: boolean;
  sideCols?: number;
  height?: number;
  width?: number;
}

// this can get refactored into something better
const mapUpToSum = <T,>(num: number, fn: (i: number, res: T[]) => T): T[] => {
  const res: T[] = [];
  for (let i = 0; i < num; i++) res.push(fn(i, res));
  return res;
};

const generateCols = (
  n: number,
  m: number,
  classPattern: string[] = [""],
  randomize: boolean = false
) => {
  return mapUpToSum(n, (i) => (
    <div className="square-col" key={i}>
      {mapUpToSum(m, (j) => {
        const classNames = ["square"];
        const name = classPattern[j % classPattern.length];
        if (name !== "") {
          classNames.push(classPattern[j % classPattern.length]);
        } else {
          // note: this Math.random() is the source of [Warning: Prop `className` did not match. Server: x Client: y]
          // https://stackoverflow.com/questions/69866771/nextjs-prop-style-did-not-match
          if (randomize) {
            const r = Math.random();
            if (r < 0.08) classNames.push("white");
            else if (r < 0.4) classNames.push("light");
          }
        }
        return <div className={classNames.join(" ")} key={j} />;
      })}
    </div>
  ));
};

const Banner: React.FC<Banner> = (props) => {
  const [randomize, setRandomize] = useState<boolean>(false);
  const [color, setColor] = useState<number>(0);

  useEffect(() => {
    setRandomize(true);

    const committees = ["acm"];
    if (!props.decorative) {
      committees.push(
        "studio",
        "icpc",
        "design",
        "cyber",
        "teachla",
        "w",
        "ai",
        "hack"
      );
    }

    const el = document.querySelector(".banner");
    let timer = setInterval(() => {
      el?.classList.remove(committees[color]);
      setColor((prevColor) => (prevColor + 1) % committees.length);
      el?.classList.add(committees[color]);
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
    <div className={`banner ${decorative ? "decorative" : ""}`}>
      <div className="square-col-container">
        {!decorative &&
          generateCols(1, height, ["", "", "", "", "white", "white", "white"])}
        {!decorative &&
          generateCols(1, height, ["", "", "", "", "", "white", "white"])}
        {generateCols(1, height, ["", "", "", "", "", "", "white"])}
        {generateCols(sideCols, height, undefined, randomize)}
        {!decorative &&
          generateCols(1, height, ["", "", "white", "white", "", "", ""])}
        {!decorative &&
          generateCols(width, height, [
            "",
            "",
            "white",
            "white",
            "white",
            "",
            "",
          ])}
        {!decorative &&
          generateCols(1, height, ["", "", "", "white", "white", "", ""])}
        {generateCols(sideCols, height, undefined, randomize)}
        {generateCols(1, height, ["white", "", "", "", "", "", ""])}
        {!decorative &&
          generateCols(1, height, ["white", "white", "", "", "", "", ""])}
        {!decorative &&
          generateCols(1, height, ["white", "white", "white", "", "", "", ""])}
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

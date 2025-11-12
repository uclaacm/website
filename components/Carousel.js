// import Image from 'next/legacy/image';
import { useState, useEffect } from 'react';

// width of each frame in px
// needs to be updated if style.scss changes
const FRAME_WIDTH = 450;
// const FRAME_HEIGHT = 240;
const ITEMS_PER_SECTION = 4;

const Carousel = ({ images }) => {
  const [sections, setSections] = useState([]);
  const sectionWidth = (FRAME_WIDTH * ITEMS_PER_SECTION) / 2;

  useEffect(() => {
    const numItems = images.length;
    const sectionsData = [];

    for (let i = 0; i < numItems; i += ITEMS_PER_SECTION) {
      sectionsData.push({
        left: (i / ITEMS_PER_SECTION) * sectionWidth,
        width: sectionWidth,
        items: images.slice(i, i + ITEMS_PER_SECTION).map((item, index) => (
          <div className="image-frame" key={index}>
            <a
              href={item}
              target="_blank"
              rel="noreferrer noopener"
              tabIndex="-1"
              className="image-link"
            >
              <img src={item} alt="" className="framed-image" />
            </a>
          </div>
        )),
      });
    }

    setSections(sectionsData);

    const timer = setInterval(() => {
      setSections((prevSections) => {
        return prevSections.map((section) => {
          section.left -= 1;
          if (section.left < -sectionWidth) {
            section.left =
              (prevSections.length - 1) * sectionWidth - 1;
          }
          return section;
        });
      });
    }, 30);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div id="carousel">
      <div id="carousel-inner">
        {sections.map((section, i) => {
          const carouselStyle = {
            left: section.left + 'px',
            width: section.width + 'px',
          };
          return (
            <div className="carousel-sect" style={carouselStyle} key={i}>
              {section.items}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

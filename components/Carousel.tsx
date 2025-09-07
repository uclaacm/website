import { ItemListElements } from 'next-seo/lib/types';
import Image from 'next/legacy/image';
import { useState, useEffect, JSX } from 'react';

// width of each img in px
// needs to be updated if style.scss changes
const IMAGE_WIDTH = 360;
const ITEMS_PER_SECTION = 4;

interface CarouselProps{
  images: string[];
}

interface Section{
  left: number;
  width: number;
  items: JSX.Element[];
}

const Carousel = ({images} : CarouselProps) => {
  const [sections, setSections] = useState<Section[]>([]);
  const sectionWidth = (IMAGE_WIDTH * ITEMS_PER_SECTION) / 2;

  useEffect(() => {
    const numItems = images.length;
    
    const sectionsData: Section[] = [];

    for (let i = 0; i < numItems; i += ITEMS_PER_SECTION) {
      sectionsData.push({
        left: (i / ITEMS_PER_SECTION) * sectionWidth,
        width: sectionWidth,
        items: images.slice(i, i + ITEMS_PER_SECTION).map((item, index) => (
          <a
            href={item}
            target="_blank"
            rel="noreferrer noopener"
            key={index}
            tabIndex={-1}
          >
            <Image src={item} width={IMAGE_WIDTH} height={IMAGE_WIDTH} alt="" />
          </a>
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
          const carouselStyle: React.CSSProperties = {
            left: `${section.left}px`,
            width: `${section.width}px`,
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

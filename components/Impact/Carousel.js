import React, { useState, useEffect } from 'react';

import { blogs } from '../../data/impact';
import styles from '../../styles/pages/impact.module.scss';

import BlogCard from './BlogCard';

function Carousel() {
    const [ activeItem, changeActiveItem ] = useState(0); // keeps track of blog index (0, 1, or 2) that is currently active
    const blogInfo = blogs[activeItem]; // stores blog info for the blog number that is currently active

    const handleNext = () => {
        if (activeItem >= (blogs.length - 1))
            changeActiveItem(0);
        else
            changeActiveItem(activeItem+1);
    };

    // changes currently active blog every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000);
        return () => clearInterval(interval);
      }, [activeItem]);

    return (
        <div className="carousel-container">
            <BlogCard
                        title={blogInfo.title}
                        author={blogInfo.author}
                        date={blogInfo.date}
                        length={blogInfo.length}
                        img={blogInfo.img}
                        href={blogInfo.href}
                        authorImg={blogInfo.authorImg}
                        authorAlt={blogInfo.authorAlt}
                        backgroundStyle={blogInfo.backgroundStyle}
                    />
            <div className={styles['button-container']}>
                {blogs.map((blog, index) =>
                    <button key={index} onClick={() => changeActiveItem(index)}
                            className={activeItem === index ? styles['btn-selected'] : styles['btn-unselected']}>
                    </button>)
                }
            </div>
        </div>
    );
}

export default Carousel;

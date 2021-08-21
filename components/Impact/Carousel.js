import React, { useState, useEffect } from 'react';

import { blogs } from '../../data/impact';
import styles from '../../styles/pages/impact.module.scss';

import BlogCard from './BlogCard';

function Carousel() {
    const [ blog, changeBlog ] = useState(0);
    const blogInfo = blogs[blog];

    const handleNext = () => {
        if (blog >= (blogs.length - 1))
            changeBlog(0);
        else
            changeBlog(blog+1);
    };

    const handlePrev = () => {
        if (blog <= 0)
            changeBlog(blogs.length-1);
        else
            changeBlog(blog-1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000);
        return () => clearInterval(interval);
      }, [blog]);

    return (
        <div >
            <button onClick={handleNext} className={styles['carousel-button-prev']}>Previous</button>
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
            <button onClick={handlePrev} className={styles['carousel-button-next']}>Next</button>
        </div>
    );
}

export default Carousel;

import React, { useState, useEffect } from 'react';

import { blogs } from '../../data/impact';
import styles from '../../styles/pages/impact.module.scss';

import BlogCard from './BlogCard';

function Carousel() {
    const [ blog, changeBlog ] = useState(0); // keeps track of blog index (0, 1, or 2) that is currently active
    const blogInfo = blogs[blog]; // stores blog info for the blog number that is currently active

    const handleChange = (blogIndex) => {
        // change active blog to the one specified by the blogIndex
        changeBlog(blogIndex);
    };

    const handleNext = () => {
        if (blog >= (blogs.length - 1))
            changeBlog(0);
        else
            changeBlog(blog+1);
    };

    // changes currently active blog every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000);
        return () => clearInterval(interval);
      }, [blog]);

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
                <button onClick={() => handleChange(0)} className={blog === 0 ? styles['btn-selected'] : styles['btn-unselected']}></button>
                <button onClick={() => handleChange(1)} className={blog === 1 ? styles['btn-selected'] : styles['btn-unselected']}></button>
                <button onClick={() => handleChange(2)} className={blog === 2 ? styles['btn-selected'] : styles['btn-unselected']}></button>
            </div>
        </div>
    );
}

export default Carousel;

// blog === 0 ? styles['btn-selected'] : styles['btn-unselected']

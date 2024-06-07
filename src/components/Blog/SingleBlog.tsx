import React from 'react';
import Image from 'next/image';

interface Blog {
  link: string;
  videoSrc: string;
  title: string;
  description: string;
  category: string;
}

interface SingleBlogProps {
  blog: Blog;
}

const styles = {
  singleBlog: {
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glassmorphic effect
    backdropFilter: 'blur(10px)', // Glassmorphic effect
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    border: '1px solid rgba(255, 255, 255, 0.18)', // Glassmorphic effect
  },
  videoContainer: {
    marginBottom: '10px',
  },
  blogContent: {
    padding: '10px 0',
    color: '#fff', // Applied color
  },
  title: {
    color: '#fff', // Applied color
  },
  description: {
    color: '#fff', // Applied color
  },
  designLabel: {
    backgroundColor: '#293977', // Applied color
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
    marginTop: '10px',
  },
};

const SingleBlog: React.FC<SingleBlogProps> = ({ blog }) => {
  return (
    <a target='_blank' href={blog?.link}>
      <div style={styles.singleBlog}>
        <div style={styles.videoContainer}>
          <Image
            src={blog.videoSrc}
            width={400}
            height={300}
            alt="Picture related to the blog"
          />
        </div>
        <div style={styles.blogContent}>
          <h3 style={styles.title}>{blog.title}</h3>
          <p style={styles.description}>{blog.description}</p>
          <div style={styles.designLabel}>{blog.category}</div>
        </div>
      </div>
    </a>
  );
};

export default SingleBlog;

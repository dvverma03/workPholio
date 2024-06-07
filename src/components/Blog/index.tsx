"use client";
import React, { useRef, CSSProperties, RefObject } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import { blogData1, blogData2, blogData3 } from "@/components/Blog/blogData";
import { SectionTitleBlog, SectionTitleService } from "@/components/Common/SectionTitle";

const Blog: React.FC = () => {
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  const carouselRef3 = useRef<HTMLDivElement>(null);

  const scrollLeft = (carouselRef: RefObject<HTMLDivElement>) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: -450,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (carouselRef: RefObject<HTMLDivElement>) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: 450,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitleBlog
          title="Our Works"
          paragraph="We create seamless, intuitive interfaces that not only delight users but also elevate their overall experience. Our UI/UX designs ensure every interaction feels natural and engaging, keeping users satisfied and connected with your brand."
          center
        />
        {/* Section 1: Website Development */}
        <div style={styles.carouselSection}>
          <h2 style={styles.sectionTitle}>Web Development</h2>
          <div style={styles.carouselContainer}>
            <div ref={carouselRef1} style={styles.carousel}>
              {blogData1.map((blog) => (
                <div key={blog.id} style={styles.carouselItem}>
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div>
          </div>
          <div style={styles.scrollButtonsContainer}>
            <button onClick={() => scrollLeft(carouselRef1)} style={styles.scrollButton}></button>
            <button onClick={() => scrollRight(carouselRef1)} style={styles.scrollButton}></button>
          </div>
        </div>
        {/* Section 2: App Development */}
        <div style={styles.carouselSection}>
          <h2 style={styles.sectionTitle}>App Development</h2>
          <div style={styles.carouselContainer}>
            <div ref={carouselRef3} style={styles.carousel}>
              {blogData3.map((blog) => (
                <div key={blog.id} style={styles.carouselItemVertical}>
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div>
          </div>
          <div style={styles.scrollButtonsContainer}>
            <button onClick={() => scrollLeft(carouselRef3)} style={styles.scrollButton}></button>
            <button onClick={() => scrollRight(carouselRef3)} style={styles.scrollButton}></button>
          </div>
        </div>
        {/* Section 3: UI/UX Development */}
        <div style={styles.carouselSection}>
          <h2 style={styles.sectionTitle}>UI/UX Development</h2>
          <div style={styles.carouselContainer}>
            <div ref={carouselRef2} style={styles.carousel}>
              {blogData2.map((blog) => (
                <div key={blog.id} style={styles.carouselItemVertical}>
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div>
          </div>
          <div style={styles.scrollButtonsContainer}>
            <button onClick={() => scrollLeft(carouselRef2)} style={styles.scrollButton}></button>
            <button onClick={() => scrollRight(carouselRef2)} style={styles.scrollButton}></button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: CSSProperties } = {
  carouselSection: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'left' as 'left',
    color: '#fff',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none',  /* IE and Edge */
  },
  carouselItem: {
    minWidth: 'calc(33.33% - 20px)', // Adjust width to fit three items on the screen with some margin
    flex: '0 0 auto',
    marginRight: '10px',
  },
  carouselItemVertical: {
    minWidth: 'calc(33.33% - 20px)', // Adjust width to fit three items on the screen with some margin
    height: '400px', // Increase height for more vertical cards
    flex: '0 0 auto',
    marginRight: '10px',
  },
  scrollButtonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  scrollButton: {
    backgroundColor: '#293977',
    border: 'none',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    margin: '0 10px',
  },
};

export default Blog;

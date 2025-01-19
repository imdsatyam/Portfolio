import React, { useState } from "react";
import "./Blog.css";
import Image1 from "../../Assets/blog-1.svg";
import Image2 from "../../Assets/blog-2.svg";
import Image3 from "../../Assets/blog-3.svg";

const blogData = [
  {
    id: 1,
    image: Image1,
    category: "Tech Insights",
    title: "5 Best App Development Tools for Your Projects",
    date: "26 February 2023",
    author: "Satyam",
    content: (
      <div>
        <p>Discover the best app development tools to speed up your process and enhance productivity:</p>
        <ul>
          <li><strong>React Native:</strong> Cross-platform mobile development with a single codebase.</li>
          <li><strong>Flutter:</strong> Google's toolkit for high-performance, beautiful apps.</li>
          <li><strong>Xcode:</strong> IDE for iOS/macOS development.</li>
        </ul>
        <p>These tools help deliver high-quality apps quickly and efficiently.</p>
        <img src={Image1} alt="App Development Tools" className="blog__content-image" />
      </div>
    ),
  },
  {
    id: 2,
    image: Image2,
    category: "Design Trends",
    title: "Common Misconceptions About Payment",
    date: "15 March 2023",
    author: "Satyam",
    content: (
      <div>
        <p>Let’s bust some common misconceptions about payment terms:</p>
        <ul>
          <li><strong>Myth: 'Net 30' means 30 days after the service.</strong> It’s usually from the invoice date.</li>
          <li><strong>Myth: Full upfront payment is required.</strong> Partial payments or installments are common.</li>
        </ul>
        <p>Clarifying payment terms avoids misunderstandings and smooths transactions.</p>
        <img src={Image2} alt="Payment Misconceptions" className="blog__content-image" />
      </div>
    ),
  },
  {
    id: 3,
    image: Image3,
    category: "Business",
    title: "3 Things to Know About Startup Business",
    date: "3 April 2023",
    author: "Satyam",
    content: (
      <div>
        <p>Key tips for startup success:</p>
        <ul>
          <li><strong>Plan:</strong> A clear business plan sets the foundation.</li>
          <li><strong>Research:</strong> Know your market and audience.</li>
          <li><strong>Team:</strong> Surround yourself with a strong, committed team.</li>
        </ul>
        <p>These steps will guide you in building a solid and successful startup.</p>
        <img src={Image3} alt="Startup Business" className="blog__content-image" />
      </div>
    ),
  },
];

const Blog = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (blog) => {
    setModalData(blog);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleCardClick = (blog) => {
    openModal(blog);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        {blogData.map((blog) => (
          <div className="blog__card" key={blog.id} onClick={() => handleCardClick(blog)}>
            <div className="blog__thumb">
              <a href="/#" onClick={handleLinkClick}>
                <span className="blog__category">{blog.category}</span>
              </a>
              <a href="/#" onClick={handleLinkClick}>
                <img src={blog.image} alt="" className="blog__img" />
              </a>
            </div>
            <div className="blog__details">
              <h3 className="blog__title">{blog.title}</h3>
              <div className="blog__meta">
                <span>{blog.date}</span>
                <span className="blog__dot"></span>
                <span>{blog.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>X</button>
            <div className="modal-header">
              <span className="modal-category">{modalData.category}</span>
              <h2 className="modal-title">{modalData.title}</h2>
            </div>
            <div className="modal-body">
              <p>{modalData.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;

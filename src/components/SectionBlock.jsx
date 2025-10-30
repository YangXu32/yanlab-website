import React from 'react';
import './SectionBlock.css';

const SectionBlock = ({ image, title, description, reverse, imageStyle }) => {
  return (
    <section className={`section-block${reverse ? ' reverse' : ''}`}>
      <div className="section-block-image">
        <img src={image} alt={title} style={imageStyle} />
      </div>
      <div className="section-block-text">
        <h3 style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.76rem',
          fontWeight: 700,
          color: '#22223b',
          lineHeight: 1.1,
          marginBottom: '1.2rem',
        }}>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default SectionBlock;

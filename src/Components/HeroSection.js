import React from 'react';
import '../Styles/style.css';

const HeroSection = () => {
  return (
    <div className="hero-section" id="hero-section">
        <div className="intro">
            <p>Hi, There</p>
            <h4>I'm Winnifred Ogele</h4>
            <h1>A Data Analyst</h1>
            <p className="ins">"Clean data makes for better service."</p>
        </div>

        <div className="image-Container">
          <div className="cover"></div>
          <img src= "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?cs=srgb&dl=pexels-orione-concei%C3%A7%C3%A3o-2983464.jpg&fm=jpg"  alt=""/>
        
        </div>


      
    </div>
  );
}

export default HeroSection;

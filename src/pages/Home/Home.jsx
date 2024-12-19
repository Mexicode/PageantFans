import './Home.css';
import ReactPlayer from 'react-player';
import React, { useEffect } from 'react';

// ---- IMPORTS RESOURCES ---- //
import Video1 from '../../assets/Videos/opening_video.webm';
import Video2 from '../../assets/Videos/opening_video2.webm';

import Image1 from '../../assets/Images/homepage_photo1.webp';
import Image2 from '../../assets/Images/homepage_photo2.webp';
import Image3 from '../../assets/Images/homepage_photo4.webp';
import Image4 from '../../assets/Images/homepage_photo5.webp';

import LogoHeader from '../../assets/Images/pageantfans_logo.webp';
import VideoMobile from '../../assets/Videos/VideoMobileOpening.webm';
import VideoLarge from '../../assets/Videos/HomePage.webm';

import backgroundStarts from '../../assets/Videos/backgroundStar.webm';

function Home() {
  const repetitionInterval = 1;

  function animationHeader(video) {
    video.volume = 0;
    if (video.paused) {
      video.play();
    }
  }

  function logoAnimation(logoHeader) {
    logoHeader.classList.add("container-logo--animation");
    logoHeader.style.display = "block";
  }

  function textsAnimation(subtitle, paragraph) {
    [subtitle, paragraph].forEach(el => {
      el.style.display = "block";
      el.classList.add(`container-text__${el === subtitle ? "subtitle" : "paragraph"}--animation`);
    });
  }

  useEffect(() => {
    const video = document.getElementById("bg-header-video-mobile");
    const elements = {
      logo: document.getElementById("logo-header"),
      subtitle: document.getElementById("subtitle-header"),
      paragraph: document.getElementById("paragraph-header"),
    };
  
    const startAnimation = () => {
      logoAnimation(elements.logo);
      textsAnimation(elements.subtitle, elements.paragraph);
      setTimeout(() => Object.values(elements).forEach(el => (el.style.display = "none")), 4700);
    };
  
    const checkAnimationTrigger = () => {
      animationHeader(video);
      if (video.currentTime >= 3.4 && video.currentTime <= 3.7 && !video.paused) {
        startAnimation();
      }
    };
  
    const intervalId = setInterval(checkAnimationTrigger, repetitionInterval);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <nav className='opening'>
        <div className="opening__container-video">
          <video src={VideoMobile} autoPlay loop muted playsInline className="container-video__video container-video__video--mobile" id="bg-header-video-mobile"></video>
          <video src={VideoLarge} autoPlay loop muted playsInline className="container-video__video container-video__video--large" id="bg-header-video-large"></video>
        </div>
        <div className="opening__container-logo">
          <img src={LogoHeader} className="container-logo__logo" id="logo-header" alt="" />
        </div>
        <div className="opening__container-text">
          <h2 className="container-text__subtitle" id="subtitle-header">#1 Creator Community for Beauty Queens in the World.</h2>
          <p className="container-text__paragraph" id="paragraph-header">Own, and earn from your name, image, and likeness™.</p>
        </div>
      </nav>

      <div className='opening--separator'></div>

      <section className="cards">
        <video src={backgroundStarts} autoPlay loop muted playsInline preload="auto" className="cards__video" ></video>
        <div className='cards--grid'>
          <div className="cards--grid__content--img1">
            <img className="cards--collage--img" src={Image2} alt="" />
          </div>
          <div className="cards--grid__content--video1">
            <ReactPlayer playing={true} loop={true} playsinline muted preload='auto' url={Video2} height={'auto'} width={'100%'} className="cards--collage--img"></ReactPlayer>
          </div>
          <div className="cards--grid__content--img2">
            <img className="cards--collage--img" src={Image1} alt="" />
          </div>
          <div className="cards--grid__content--text">
            <h3 className='cards--text'>PageantFans creators give their fans access to red carpet events, VIP experiences, and exclusive brand partnership journeys they can't experience anywhere else!</h3>
          </div>
          <div className="cards--grid__content--img3">
            <img className="cards--collage--img" src={Image3} alt="" />
          </div>
          <div className="cards--grid__content--video2">
            <ReactPlayer playing={true} loop={true} playsinline muted preload='auto' url={Video1} height={'auto'} width={'100%'} className="cards--collage--img"></ReactPlayer>
          </div>
          <div className="cards--grid__content--img4">
            <img className="cards--collage--img" src={Image4} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;

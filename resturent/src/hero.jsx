import React from "react";
import { useRef, useEffect } from "react";
import HeroVid from './assets/hero _animation1.mp4'

function Hero(){

  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
   const section = sectionRef.current;
    const video = videoRef.current;

    let ticking = false;

    const updateAnimation = () => {
      const rect = section.getBoundingClientRect();

      const scrollDistance = section.offsetHeight - window.innerHeight;

      let progress = -rect.top / scrollDistance;

      progress = Math.max(0, Math.min(1, progress));

       // Control video with scroll
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }

      // Update CSS variable for text animations
      section.style.setProperty("--progress", progress);

      ticking = false;
    };

   const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateAnimation);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    video.addEventListener("loadedmetadata", updateAnimation);

    updateAnimation();

  }, []);
  
  return (
    <section ref={sectionRef} className="scroll-video-section">
      <div className="video-sticky">
        <video ref={videoRef} className="hero-video" src={HeroVid} playsInline preload="auto"/>
        <div className="video-overlay" />
        <div className="text-container">
          <div className="hero-text text-1">
            <span></span>
            <h1>Velvet Spoon</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
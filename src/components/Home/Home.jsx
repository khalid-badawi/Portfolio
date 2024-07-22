import React, { useEffect, useRef } from "react";
import "./home.css";
import Lottie from "lottie-react";
import programming from "../../../public/animations/header.json";
export default function Home() {
  const lottieRef = useRef();
  // useEffect(() => {
  //   if (lottieRef.current) {
  //     lottieRef.current.setSpeed(0.5);
  //   }
  // }, []);
  return (
    <section className="flex">
      <div className="left-section">
        <div className="flex intro">
          <div className="image-cont">
            <img
              src="/images/my-image.png"
              alt="Profile Image"
              className="profile-image"
            />
          </div>
          <p className="description">
            My name is Khalid Badawi, a Computer Engineering graduate from
            An-Najah University. I specialize in software development with a
            strong focus on Front End development. Passionate about creating
            efficient and visually appealing applications, I am dedicated to
            advancing my skills and staying abreast of the latest industry
            trends.
          </p>
        </div>
        <h1 className="outlined-text">Computer Engineer</h1>
        <h1 className="filled-text">Software Developer</h1>
      </div>
      <div className="right-section">
        <Lottie
          lottieRef={lottieRef}
          animationData={programming}
          onDOMLoaded={() => {
            lottieRef.current.setSpeed(0.7);
          }}
          style={{ height: 650 }}
        />
      </div>
    </section>
  );
}

import React from "react";
import "./About.css";

export const About = () => {
  return (
    <>
      <h2 className="about-header">About the Devlopers... </h2>
      <div className="developers-info">
        <h4 className="developers-header">Aundale Walker</h4>

        <p>
          I am a software developer from Brooklyn, NY. My coding journey began
          in December 2022 when I started learning programing through a
          non-profit organization named Pursuit, located in Queens, Ny. With
          dedication and passion, I am progressing steadily and expected to
          graduate in December 2023.
        </p>
        <ul>
          I have experience with the following programming languages:
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>React</li>
          <li>Node.js</li>
          <p>
            I am a quick learner and I am eager to take on new challenges. I am
            passionate about using technology to solve problems and I am excited
            to start my career as a software developer.
          </p>
        </ul>
      </div>
      <div className="developers-info">
        <h4 className="developers-header">Chantal Gomez</h4>

        <p></p>
      </div>
      <br />
      <h2 className="about-header"> About the Project</h2>
      <p>
        We created a YouTube application using the React framework in
        JavaScript. The application is fully functional and allows users to
        search for videos. The search results are displayed on a video page,
        where users can view snippets of the search input. When a user clicks on
        a video, a new page is rendered with the selected video. On this page,
        there is also a comment section where users can type their name and
        leave a comment on the page. Once submitted, the comments are rendered
        on the page.
      </p>
    </>
  );
};

export default About;

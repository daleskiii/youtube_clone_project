import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="container">
      <h1 className="about-header">About the Developers </h1>
      <div className="developers-info">
        <h4 className="developers-header">Aundale Walker</h4>
        <p>
          I am a software developer from Brooklyn, NY. My coding journey began
          in December 2022 when I started learning programing through a
          non-profit organization named Pursuit, located in Queens, NY. With
          dedication and passion, I am progressing steadily and expected to
          finish Pursuit's Core Program in December 2023.
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
            to start my career as a software developer. You can follow me along
            my journey by checking out my work on{" "}
            <a href="https://github.com/daleskiii"> GitHub </a>
          </p>
        </ul>
      </div>
      <br />
      <div className="developers-info">
        <h4 className="developers-header">Chantal Gomez</h4>

        <p>
          I am a software developer and a graphic designer from Brooklyn. I was
          first introduced to coding in my web design 101 class when I attended
          New York City College of Technology. I am currently enrolled at
          Pursuit and am learning more on how to become a better programmer one
          day at a time.
        </p>
        <ul>
          I have experience with the following programming languages:
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <p>
          I am detailed orianted individual with a versatile approach. My love
          for art and problem solving pushes me to create easy to use and
          beautiful web apps. You can view some of my work at my{" "}
          <a href="https://github.com/chanGomez">GitHub</a>. And if you're
          interested some of my art is up on my{" "}
          <a href="https://www.behance.net/nicolemartes1">Behance</a>.
        </p>
      </div>
      <br />
      <div className="about-project">
        <h1 className="about-header"> About the Project</h1>
        <p>
          We created a YouTube application using the React framework in
          JavaScript. The application is fully functional and allows users to
          search for videos. The search results are displayed on a video page,
          where users can view snippets of the search input. When a user clicks
          on a video, a new page is rendered with the selected video. On this
          page, there is also a comment section where users can type their name
          and leave a comment on the page. Once submitted, the comments are
          rendered on the page.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import '../index.css';

function Resume() {
  return (
    <div className="resume">
      <section>
        <div>
          <p>
            Download my <a href="/Untitled%20document.pdf" download>resume</a>
          </p>
        </div>
      </section>

      <section>
        <h2>Front-End</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li><br></br>
        </ul>
      </section>

      <section>
        <h2>Back-End</h2>
        <ul>
          <li>API</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;

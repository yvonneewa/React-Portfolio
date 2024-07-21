import React from 'react';
import '../index.css'

function Resume() {
  return (
    <div className="resume">
      <section>
        <h1>Yvonne Wantings</h1>
        <p>Denver, CO 80014</p>
        <p>yowantings@gmail.com</p><br></br>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Highly motivated professional with a strong work ethic, adaptability,
          and exceptional interpersonal skills. Experienced in pharmacy operations
          with a focus on precision, quality assurance, and customer satisfaction.
          Eager to leverage technical skills and attention to detail in a Quality
          Assurance Engineer role.
        </p><br></br>
      </section>

      <section>
        <h2>Work Experience</h2><br></br>

        {/* Job 1: Pharmacy Customer Account and Fill Technician */}
        <div className="job">
          <h4>Heartland Pharmacy</h4>
          <p>Pharmacy Customer Account and Fill Technician</p>
          <p>April 2019 - Present</p>
          <ul>
            <li>
              Ensured accuracy and patient safety by managing customer inquiries
              and medication orders through phone and email communications.
            </li>
            <li>
              Utilized pharmaceutical software for prescription processing and
              maintained meticulous documentation.
            </li>
            <li>
              Operated and maintained automated packaging machinery, meeting
              strict quality standards and ensuring on-time deliveries.
            </li>
          </ul>
        </div>

        {/* Job 2: Pharmacy Technician */}
        <div className="job">
          <h4>Amerita</h4>
          <p>Pharmacy Technician</p>
          <p>December 2021 - December 2022</p>
          <ul>
            <li>
              Coordinated with patients and healthcare providers to facilitate
              timely medication deliveries and resolve issues promptly.
            </li>
          </ul>
        </div>

        {/* Job 3: Qualified Medication Administration Personnel */}
        <div className="job">
          <h4>MorningStar - Jordan</h4>
          <p>Qualified Medication Administration Personnel</p>
          <p>August 2017 - April 2019</p>
          <ul>
            <li>
              Administered medications with precision and empathy, adhering to
              stringent medical protocols and enhancing resident care.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <p>Pickens Technical College Certification in Pharmacy</p>
        <p>Denver University Certification in Coding</p><br></br>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Quality Assurance Testing</li>
          <li>Software Testing Methods</li>
          <li>Test Plan Development</li>
          <li>Issue Tracking and Resolution</li>
          <li>Technical Support</li>
          <li>Database Management</li>
          <li>Customer Service Excellence</li>
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
          <li>Time Management</li>
          <li>Adaptability to New Technology</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;

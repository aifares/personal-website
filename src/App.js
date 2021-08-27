import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";
import { Button } from "@material-ui/core";
import pdf from "./Resume_Ali_Fares.pdf";
import FadeIn from "react-fade-in";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="type-writer">
          <Typewriter
            options={{
              strings: ["Hello! I'm Ali", "An aspiring Software Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </header>

      <div className="container">
        <a name="aboutme"></a>
        <div className="divder">
          <h2 href="#aboutme">
            <span>About Me</span>
          </h2>
        </div>

        <div className="about-me-info">
          <FadeIn>
            <p></p>
            <p>Hi! My name is Ali Fares</p>
            <p>I am a aspiring Software Engineer</p>
            <p>with a natural affinty for building products!</p>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="about-me-info2">
            <p>I am currently a senior at the Univeristy at Buffalo</p>
            <p>I love sports,sneakers and coding</p>
            <p>I currently just finished a internship</p>
            <p>with American Express</p>
          </div>
        </FadeIn>
        <a name="resume"></a>
        <div className="divder">
          <h2>
            <span>Resume</span>
          </h2>
        </div>
        <div className="section-header">
          {" "}
          <u>Education</u>{" "}
        </div>
        <FadeIn>
          <div className="education-info">
            <p>
              <b>
                University at Buffalo, State University of New York | Buffalo,
                NY
              </b>
            </p>
            <p>
              {" "}
              <b>Graduation Date:</b> May 2022
            </p>
            <p>Bachelor of Science in Computer Science</p>

            <p>
              <b>Relevant Coursework:</b> Introduction to Computer Science 1,
              Introduction to Computer Science 2, Systems Programming, Computer
              Organization, Introduction to Artificial Intelligence, Discrete
              Structures, Data Structures, Algorithms and Complexity,
              Introduction to Software Practice, Software Engineering
            </p>
          </div>
        </FadeIn>
        <div className="section-header">
          {" "}
          <u>Skills</u>{" "}
        </div>
        <div className="skills">
          <ul className="bullet">
            <li>
              Experienced in Python, JavaScript, Scala, MySQL, C, Django, React,
              Node.js, CSS, Web Sockets HTML, Pandas, NumPy, MongoDB, Express,
              GitHub, Zen-Hub, Fastify, Electron, PostgreSQL.
            </li>
            <li>
              Solution-oriented and a problem solver, with a high level of
              attention to detail and follow-through.
            </li>
            <li>
              Self-motivated with the ability to work both independently and
              collaboratively.
            </li>
            <li>
              Experience with object-oriented design, algorithm design, data
              structures, and complexity analysis.
            </li>
            <li>
              Ability to prioritize and juggle numerous projects and deadlines.
            </li>
          </ul>
        </div>
        <div className="section-header">
          {" "}
          <u> Technical Work Experience</u>{" "}
        </div>
        <div className="tech-projects">
          <div className="tech-projects">
            <b>Software Engineering Intern, American Express</b>{" "}
            <ul>
              <li>
                Created a dashboard using React.js to display data regarding the
                use of each component of an internal library.
              </li>
              <li>
                Using Fastify.js, Node.js and PostgreSQL created an API to send
                and receive data from the PostgreSQL Database.
              </li>
              <li>
                Developed and designed a full system architecture plan for the
                project.
              </li>
              <li>
                Using Electron and SQLite3, migrated the existing web
                application to a local native desktop application.
              </li>
              <li>
                Held daily stand-ups with the team and mentors to provide
                updates on the project and ensure all deadlines are met.
              </li>
            </ul>
          </div>
        </div>

        <div className="section-header">
          {" "}
          <u> Technical Projects</u>{" "}
        </div>
        <div className="tech-projects">
          <div className="tech-projects">
            <b>Raul Avila Inc. E-Commerce Website</b>{" "}
            <ul>
              <li>
                Utilizing Python’s Django framework created a backend that
                included a user authentication system, inventory management, and
                integrated payment processor through Stripe.
              </li>
              <li>
                Effectively communicated with the client and team members to
                deliver the product and meet deadlines.
              </li>
              <li>
                Using HTML and CSS created a dynamic frontend to allow employees
                to make changes to the website.
              </li>
            </ul>
          </div>
        </div>
        <div className="tech-projects">
          <b>UB Switch Project Cost of Living Analyzer</b>
          <ul>
            <li>
              Using Node.js, Express and MongoDB created an API with multiple
              endpoints to retrieve a variety of data from the MongoDB database.
            </li>
            <li>
              Created a fully functional authentication system that used
              Google's Firebase and Node.js.
            </li>
            <li>
              Using React.js created a dynamic frontend to visualize data in
              several ways.
            </li>
          </ul>
        </div>
        <div className="section-header">
          {" "}
          <u>Leadership Experience and Activites</u>{" "}
        </div>
        <div className="tech-projects">
          <li>
            {" "}
            <p>
              <b>Member</b>,Society of Hispanic Engineers (SHPE), September 2019
              - present
            </p>
          </li>
        </div>
      </div>
      <div className="button-download">
        <Button
          style={{
            backgroundColor: "#3066BE",
          }}
          href={pdf}
          target="_blank"
          variant="contained"
          color="primary"
        >
          {" "}
          <h3>Download Resume</h3>
        </Button>
      </div>
      <a name="contact"></a>

      <div className="divder">
        <h2>
          <span>Contact</span>
        </h2>
      </div>
      <div className="section-header-contact">
        {" "}
        Connect with me on Social Media{" "}
      </div>

      <Button
        href="https://www.linkedin.com/in/alifaresalifares/"
        style={{
          backgroundColor: "#3066BE",
        }}
        variant="contained"
        color="primary"
      >
        LinkedIn
      </Button>
      <div class="button-divide" />
      <Button
        href="https://www.github.com/aifares"
        style={{
          backgroundColor: "#3066BE",
        }}
        variant="contained"
        color="primary"
      >
        GitHub
      </Button>
      <div class="button-divide" />
      <Button
        href="mailto:aifares@icloud.com"
        style={{
          backgroundColor: "#3066BE",
        }}
        variant="contained"
        color="primary"
      >
        Email
      </Button>
      <div className="spacer"></div>
      <div className="section-header-contact"> </div>
    </div>
  );
}

export default App;

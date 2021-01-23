import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";
import { Button } from "@material-ui/core";
import pdf from "./Resume.pdf";
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
            <p>Hi! My name is Ali Fares</p>
            <p>I am a aspring Software Engineer</p>
            <p>with a natural affinty for building products!</p>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="about-me-info2">
            <p>I am currently a junior at the Univeristy at Buffalo</p>
            <p>I love sports,sneakers and coding</p>
            <p>I currently have a Software Engineering Internship</p>
            <p>with American Express for Summer 2021.</p>
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
              University at Buffalo, State University of New York | Buffalo, NY
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
              Experienced in Python, Javascript, Scala, MySQL, C, Django, React,
              Node.js, CSS, Web Sockets, and  HTML, Pandas, NumPy, MongoDB,
              Express.
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
          <u> Technical Projects</u>{" "}
        </div>
        <div className="tech-projects">
          <div className="tech-projects">
            <b>Raul Avila Inc. E-Commerce Website</b>
            <ul>
              <li>
                Using Python’s Django framework created a backend which included
                a user authentication system, inventory management and payment
                processor though Stripe’s API.
              </li>
              <li>
                Effectively communicated with the client and team members to
                deliver the product and meet deadlines.
              </li>
              <li>
                Using HTML and CSS created a dynamic fronted to allow employees
                to make changes to website.
              </li>
            </ul>
          </div>
          <div className="tech-projects">
            <b>Trie Dictionary</b>
            <ul>
              <li>
                Created a user dictionary in Scala using a trie graph data
                structure where a user can analyze words and associate each word
                with a value or information.
              </li>
              <li>
                Using the slightly modified breadth-first search algorithm, was
                able to achieve O(k) where k is the length of the word runtime
                when finding words and their values.
              </li>
              <li>Was able to parse thorough text and analyze each word.</li>
            </ul>
          </div>
          <div className="tech-projects">
            <b>UB Switch Project Cost of Living Analyzer</b>
            <ul>
              <li>
                Using React, Node.js, Express and MongoDB created a full stack
                website to retrieve data from a MongoDB database and analyze the
                data.
              </li>
              <li>
                Using Canvas I was able to create visualizations of the data to
                show users.
              </li>
              <li>
                Created a fully functional authentication system which using
                Firebase and Node.js.
              </li>
            </ul>
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
    </div>
  );
}

export default App;

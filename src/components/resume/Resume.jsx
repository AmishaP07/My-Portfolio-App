import React from 'react';
import './resume.css';
import Card from '../education/Card';
import Data from '../education/Data';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Resume</h2>
      <div className="resume__container grid">
    
      <div className="timeline grid">
      <div className="project__description">
    
        <p>
          <h2 >Project 1 - Hospital Management System</h2>
          <br />
          <h3>Features:</h3>
          User Authentication: Secure user registration and login.<br/>
          Signup Page: Allows users to create new accounts.<br/>
          Doctor Page: Displays information about doctors, their schedules, and patient appointments.<br/>
          Patients Page: Provides patients with access to their appointment details and medical history.<br/>
          Patient Booking: Allows patients to schedule appointments with doctors.<br/><br/>

          
          <h4>Front-End:</h4>
          HTML: Markup for creating web pages.<br/>
          CSS: Styling and layout.<br/>
          Bootstrap: Responsive design and pre-designed UI components.<br/><br/>

          <h4>Back-End:</h4>
          Python Flask: A Python web framework for building the server-side application.<br/><br/>

          <h4>MySQL: A relational database system.</h4>
          SQLAlchemy: A SQL toolkit and Object-Relational Mapping (ORM) library for Python.<br/>
        </p><br/>
        

        
        <p>
          <h2>Project 2 - Responsive CV</h2>
          <br/>
          <h3>Fuctionalities:</h3>
          Professionally designed and structured layout for presenting resume information.<br/>
          Responsive design for compatibility with various screen sizes and devices.<br/>
          Utilizes CSS for styling and layout.<br/>
          Organized sections for personal information, summary, experience, education, skills, and more. <br/>
          Interactive buttons or links to download the CV as a PDF or print it.<br/>
          Option to download the CV as a PDF for offline use or sharing. <br/>
          Option to print the CV directly from the web page.<br/>
        </p><br/>
      

        <p>
          <h2>Project 3 - Nurse Booking Webiste</h2>
          <br/>
          <h3>Functionalities:</h3>

            Login Page: Secure user authentication for registered users.<br/>
            Signup Page: Allows new users to create accounts.<br/>
            Home Page: Overview of the service and easy navigation.<br/>
            Nurse Details Page: Displays information about available nurses, their qualifications, and availability.<br/>
            Booking Page: Enables users to schedule nursing services with their preferred nurse.<br/>
          <br/>

          <h4>Front-End:</h4>

            React: JavaScript library for building user interfaces.<br/>
            HTML and CSS for markup and styling.<br/>
            React Router for handling navigation between pages.<br/>
            <br/>

          <h4>Back-End:</h4>

            PHP: Server-side scripting language for processing user requests.<br/>
            MySQL: A relational database system for storing and managing data.<br/>
            Backend APIs for handling user registration, authentication, and nurse booking.
            <br/><br/>
        </p>

        <p>
          <h2>Project 4 - Country Guide</h2>
          <br/>
          <h3>Fuctionalities:</h3>
          Country Search: Allows users to enter the name of a country.<br/>
          Country Details: Displays detailed information about the specified country.<br/>
          Flag Display: Shows the national flag of the selected country.<br/>
          Information Panels: Presents data such as population, capital, languages, currency, and more.<br/>
          Geographical Data: Includes geographic details like area and location on the map.<br/>
          <br/>
          <h4>Front-End:</h4>
          HTML, CSS, and JavaScript for building the user interface.<br/>
          JavaScript fetch API to make requests to the Rest Countries API.<br/>
          Responsive design for a pleasant user experience on various devices.<br/>
          <br/>
        </p>

        <p>
          <h2>Project 5 - My Portfolio App</h2>
          <br/>
          <h3>Key Sections</h3>
          Home Page: The initial landing page offering a warm welcome and an introduction to my portfolio.<br/>
          About Me: A section providing a concise introduction to myself, my background, and career objectives.<br/>
          Education: Presentation of my academic credentials, including degrees, institutions, and graduation years.<br/>
          Skills: A categorized list of your skills and competencies, including both technical and soft skills.<br/>
          Projects: A portfolio featuring your notable projects, with detailed descriptions and links to view more information.<br/>
          Resume: An option for users to download my full resume in a printable format.<br/>
          Contact Information: How users can connect with me, which may include an email address and links to social profiles.<br/>
          <br/>
          <h4>Front-End:</h4>

          Developed with React, a JavaScript library for building user interfaces.<br/>
          Utilizes HTML, CSS, and React components for creating the user interface.<br/>
        <br/>
        </p>

        <p>
          <h2>Certificate 1 - SQL and MySQl (Udemy)</h2><br/>
          A comprehensive online course that covered SQL (Structured Query Language) and MySQL database management from the basics to advanced topics.<br/>
          Provided in-depth knowledge and hands-on experience in working with databases, writing SQL queries, and database design.<br/><br/>
          <h3>Key Topics Covered:</h3>

          Introduction to SQL and databases.<br/>
          Basic SQL commands, including SELECT, INSERT, UPDATE, and DELETE.<br/>
          Retrieving data with advanced queries.<br/>
          Database design principles.<br/>
          Normalization and data integrity.<br/>
          Practical exercises and projects for real-world application.<br/>
          <br/>
          <h3>Skills and Knowledge Gained:</h3>

          Proficiency in SQL query writing and database management.<br/>
          Understanding of database design and optimization.<br/>
          Ability to work with MySQL, a popular open-source relational database management system.<br/>
          <br/>
          <h3>Achievements:</h3>

          Successfully completed all course modules and exercises.<br/>
          Applied the acquired knowledge to create and manage databases for personal projects.<br/>
          <br/>
        </p>

        <p>
          <h2>Certificate 2 - Web Development Training (Internshala)</h2><br/>
          A hands-on training program provided by Internshala, focusing on web development skills.
          Covering a range of web development technologies and concepts, including HTML, CSS, JavaScript, and more.
          Practical projects and exercises to apply the learned skills.<br/><br/>
          <h3>Key Topics Covered:</h3>

          HTML: Building the structure and content of web pages.
          CSS: Styling and layout for web pages.
          JavaScript: Adding interactivity and dynamic features.
          Responsive Design: Creating websites that work well on various devices.
          Version Control: Managing code using Git and GitHub.
          Practical web development projects.<br/><br/>
          
          <h3>Skills and Knowledge Gained:</h3>

          Proficiency in front-end web development, including HTML, CSS, and JavaScript.<br/>
          Experience in creating responsive and user-friendly websites.<br/>
          Version control and collaborative development using Git and GitHub.<br/>
          Practical web development skills that can be applied to real projects.<br/><br/>

          <h3>Achievements:</h3>

          Successfully completed the training program, including all projects and assessments.<br/>
          Demonstrated practical knowledge and skills in web development.<br/><br/>
        </p>

        <p>
          <h2>Certificate 3 - Python for Everybody (Coursera)</h2><br/>
          An online course offered on Coursera, focusing on teaching Python programming from the ground up.<br/>
          Designed for individuals with no prior programming experience.<br/>
          Covers fundamental Python concepts, data structures, and application development.<br/><br/>

          <h3>Key Topics Covered:</h3>

          Introduction to Python and its applications.<br/>
          Variables, expressions, and data types.<br/>
          Conditional statements and loops.<br/>
          Functions and error handling.<br/>
          Data structures like lists, dictionaries, and tuples.<br/>
          File handling and data retrieval from the web.<br/>
          Practical Python projects and exercises.<br/><br/>

          <h3>Skills and Knowledge Gained:</h3>

          Proficiency in Python programming, from basic concepts to more advanced topics.<br/>
          The ability to write Python code to solve real-world problems.<br/>
          Understanding of data structures and how to work with them in Python.<br/>
          Experience in web scraping and data retrieval using Python.<br/><br/>

          <h3>Achievements:</h3>

          Successfully completed all course modules, assignments, and projects.<br/>
          Demonstrated practical knowledge and coding skills in Python.<br/><br/>
        </p>

        <p>
          <h2>Certificate 4 - Web Animation Using Advance JS and CSS</h2><br/>
            A 7-day web animation bootcamp was typically a short, intensive program designed to provide a quick but comprehensive introduction to web animation using advanced JS and CSS techniques.<br/>
            Learnt about core animation principles, including timing, easing, and keyframes.<br/>
            Explored CSS properties and keyframes for creating animations and transitions.<br/>
            Learn how to use JavaScript to create complex animations and interactivity on web pages.<br/>
            Explore HTML5 Canvas for more complex and interactive animations.<br/><br/>
        </p>
      </div>

          {Data.map((val,index) => {
            if(val.category === "experience"){
              return (
                <Card 
                key={index} 
                icon={val.icon} 
                title={val.title} 
                year={val.year} 
                placeofstudy={val.placeofstudy}
                board={val.board}
                link={val.link}
                />
              );
            }
          })}
          <br />
          <p className="resume__details">
          <ul>
          <li>I am currently pursuing a comprehensive Java and Data Structures course at Apna College, focusing on building a strong foundation in computer science and programming.
          </li><br></br>
          <li>With a passion for problem-solving and coding, I have successfully solved over 150 challenging coding questions on platforms like CodeChef and HackerRank. This experience has honed my problem-solving skills and deepened my understanding of algorithmic complexities.</li>
          <br></br>
          <li>In addition to my formal education, I am a proactive learner who has completed several free online courses on platforms like Coursera and Udemy. These courses have allowed me to explore a wide range of topics, expand my knowledge, and stay up-to-date with the latest developments in technology.
          </li><br/>
        </ul>
        </p>
      <a href="https://drive.google.com/file/d/1vzvRGQoLyj2H5neA6eJVluBBvqsDCTV2/view?usp=sharing" target='_blank' className="btn">Download CV</a>
        </div>
        
      </div>

    </section>
  )
}

export default Resume
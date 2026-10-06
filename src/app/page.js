const skills = [
  "C",
  "C++",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "SQL",
];

const projects = [
  {
    icon: "⚡",
    title: "EV ChargeHub",
    description:
      "An EV charging station finder and booking application designed to help users find charging stations and manage bookings.",
    technologies: "HTML • CSS • JavaScript • Express.js • SQLite",
  },
  {
    icon: "🌱",
    title: "EcoBiz",
    description:
      "A machine learning based project for small restaurants that predicts food demand and helps reduce unnecessary food preparation.",
    technologies:
      "Python • Machine Learning • Flask • HTML • CSS • JavaScript",
  },
  {
    icon: "🚆",
    title: "Dynamic Train ETA",
    description:
      "A project focused on predicting expected train arrival times using dynamic data and machine learning concepts.",
    technologies: "Python • Machine Learning • Web Technologies",
  },
  {
    icon: "🎓",
    title: "Student Management Portal",
    description:
      "A React-based student management application for displaying and organizing student information.",
    technologies: "React • JavaScript • React Router • CSS",
  },
];

const achievements = [
  {
    icon: "📄",
    title: "Research Paper Publication",
    description:
      "Published a research paper and gained experience in technical writing, research and presenting innovative ideas.",
  },
  {
    icon: "🚀",
    title: "Hackathon Participation",
    description:
      "Participated in hackathons and worked with teams to develop technology-based solutions to real-world problems.",
  },
  {
    icon: "🏆",
    title: "Academic Achievement",
    description:
      "Maintained a strong interest in Computer Science, programming and continuous technical learning.",
  },
  {
    icon: "♟️",
    title: "Chess",
    description:
      "Interested in chess, which helps develop logical thinking, concentration and problem-solving skills.",
  },
];

const events = [
  {
    icon: "🤝",
    title: "Synergia College Event",
    description:
      "Volunteered in Synergia and contributed to organizing and supporting different college event activities.",
  },
  {
    icon: "💻",
    title: "Technical Workshops",
    description:
      "Participated in technical workshops and learning activities to improve programming and technical skills.",
  },
  {
    icon: "🎯",
    title: "College Activities",
    description:
      "Actively participated in college programs and activities, gaining experience in teamwork and communication.",
  },
  {
    icon: "🌱",
    title: "Project Activities",
    description:
      "Worked on academic and real-world projects to gain practical experience with modern technologies.",
  },
];

export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Amulya<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>


      {/* ================= HOME ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I&apos;m <span>Amulya</span>
          </h1>

          <h2>
            Computer Science Engineering Student
          </h2>

          <p className="hero-description">
            I am passionate about programming, web development and
            emerging technologies. I enjoy building useful applications
            and solving real-world problems through technology.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="btn secondary-btn"
            >
              Contact Me
            </a>

          </div>

          <div className="quick-info">
            <span>💻 Developer</span>
            <span>🚀 Learner</span>
            <span>🔬 Research Enthusiast</span>
          </div>

        </div>


        {/* ================= PROFILE PHOTO ================= */}

        <div className="hero-image">

          <div className="profile-circle">

            <img
              src="/myphoto.jpg"
              alt="Amulya"
              className="profile-photo"
            />

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <div className="section-heading">

          <p className="section-label">
            GET TO KNOW ME
          </p>

          <h2>
            About <span>Me</span>
          </h2>

        </div>


        <div className="about-grid">

          <div className="about-card">

            <h3>
              Who I Am
            </h3>

            <p>
              I am a Computer Science Engineering student with
              a strong interest in software development,
              programming and technology.
            </p>

            <p>
              I enjoy learning new technologies and applying
              my knowledge to practical projects. My goal is
              to continuously improve my technical and
              problem-solving skills.
            </p>

            <p>
              I am especially interested in web development,
              artificial intelligence, machine learning and
              building solutions for real-world problems.
            </p>

          </div>


          <div className="about-details">

            <div className="detail-box">

              <span>🎓</span>

              <div>
                <h4>Education</h4>
                <p>Computer Science Engineering</p>
              </div>

            </div>


            <div className="detail-box">

              <span>💡</span>

              <div>
                <h4>Interests</h4>
                <p>Web Development, AI, ML & Technology</p>
              </div>

            </div>


            <div className="detail-box">

              <span>🎨</span>

              <div>
                <h4>Creative Side</h4>
                <p>Drawing, Painting & Creative Design</p>
              </div>

            </div>


            <div className="detail-box">

              <span>♟️</span>

              <div>
                <h4>Hobby</h4>
                <p>Chess & Problem Solving</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section dark-section">

        <div className="section-heading">

          <p className="section-label">
            MY TOOLKIT
          </p>

          <h2>
            Technical <span>Skills</span>
          </h2>

        </div>


        <div className="skills-container">

          {skills.map((skill) => (

            <div
              className="skill-card"
              key={skill}
            >
              <span>◆</span>
              {skill}
            </div>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="section-heading">

          <p className="section-label">
            WHAT I HAVE BUILT
          </p>

          <h2>
            My <span>Projects</span>
          </h2>

        </div>


        <div className="cards-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="card-icon">
                {project.icon}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tech">
                {project.technologies}
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= ACHIEVEMENTS ================= */}

      <section
        id="achievements"
        className="section dark-section"
      >

        <div className="section-heading">

          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>
            Achievements & <span>Milestones</span>
          </h2>

        </div>


        <div className="cards-grid">

          {achievements.map((achievement) => (

            <article
              className="achievement-card"
              key={achievement.title}
            >

              <div className="card-icon">
                {achievement.icon}
              </div>

              <h3>
                {achievement.title}
              </h3>

              <p>
                {achievement.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* ================= EVENTS ================= */}

      <section id="events" className="section">

        <div className="section-heading">

          <p className="section-label">
            BEYOND THE CLASSROOM
          </p>

          <h2>
            Events & <span>Activities</span>
          </h2>

        </div>


        <div className="timeline">

          {events.map((event, index) => (

            <div
              className="timeline-item"
              key={event.title}
            >

              <div className="timeline-number">
                0{index + 1}
              </div>


              <div className="timeline-content">

                <div className="card-icon">
                  {event.icon}
                </div>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="section-heading">

          <p className="section-label">
            LET&apos;S CONNECT
          </p>

          <h2>
            Get In <span>Touch</span>
          </h2>

        </div>


        <div className="contact-card">

          <div>

            <h3>
              Have a project or opportunity?
            </h3>

            <p>
              I am always interested in learning,
              collaborating and exploring new opportunities
              in technology.
            </p>

          </div>


          <div className="contact-details">

            <a href="mailto:kamulyashet@gmail.com">
              📧 kamulyashet@gmail.com
            </a>

            <a
              href="https://github.com/kamulyashet-coder"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amulya-shet-b32140384"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Amulya. Built with Next.js.
        </p>

      </footer>

    </main>
  );
}

import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <main>
      <Navbar />

      <section className="page">

        <h1>
          About <span>Me</span>
        </h1>

        <div className="about-content">

          <p>
            I am a Computer Science Engineering student
            interested in programming, software development
            and emerging technologies.
          </p>

          <p>
            I enjoy learning new technologies and applying
            my knowledge to practical projects. I am always
            interested in improving my technical and
            problem-solving skills.
          </p>

          <p>
            My interests include web development, artificial
            intelligence, machine learning and technology.
          </p>

        </div>


        <div className="about-boxes">

          <div>
            <h3>Education</h3>
            <p>Computer Science Engineering</p>
          </div>

          <div>
            <h3>Interests</h3>
            <p>Programming & Technology</p>
          </div>

          <div>
            <h3>Hobbies</h3>
            <p>Drawing, Painting & Chess</p>
          </div>

        </div>

      </section>

    </main>
  );
}
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="home">

        <div className="home-content">
          <h1>
            Hi, I&apos;m <span>Amulya</span>
          </h1>

          <h2>
            Computer Science Engineering Student
          </h2>

          <p>
            Welcome to my personal portfolio. I am passionate
            about programming, technology and building useful
            solutions to real-world problems.
          </p>

          <div className="buttons">
            <a href="/about" className="button">
              About Me
            </a>

            <a href="/contact" className="button outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-image">
          <img
            src="/myphoto.jpg"
            alt="Amulya"
          />
        </div>

      </section>

    </main>
  );
}
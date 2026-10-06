import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="page">

        <h1>
          Contact <span>Me</span>
        </h1>


        <div className="contact-card">

          <h2>Let&apos;s Connect</h2>

          <p>
            I am interested in learning, collaborating and
            exploring new opportunities in technology.
          </p>


          <div className="contact-links">

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

    </main>
  );
}
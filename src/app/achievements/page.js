import Navbar from "../../components/Navbar";

export default function Achievements() {
  return (
    <main>
      <Navbar />

      <section className="page">

        <h1>
          My <span>Achievements</span>
        </h1>


        <div className="cards">

          <div className="card">

            <h2>📄 Research Paper Publication</h2>

            <p>
              Published a research paper and gained experience
              in technical writing, research and presenting
              innovative ideas.
            </p>

          </div>


          <div className="card">

            <h2>🚀 Hackathon Participation</h2>

            <p>
              Participated in hackathons and worked with teams
              to develop technology-based solutions for
              real-world problems.
            </p>

          </div>


          <div className="card">

            <h2>🏆 Academic Achievement</h2>

            <p>
              Developed a strong interest in Computer Science,
              programming and continuous learning.
            </p>

          </div>


          <div className="card">

            <h2>♟️ Chess</h2>

            <p>
              Chess has helped me improve my logical thinking,
              concentration and problem-solving abilities.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
import Navbar from "../../components/Navbar";

export default function Events() {
  return (
    <main>
      <Navbar />

      <section className="page">

        <h1>
          Events & <span>Activities</span>
        </h1>


        <div className="cards">

          <div className="card">

            <h2>🤝 Synergia College Event</h2>

            <p>
              Volunteered in Synergia and contributed to
              organizing and supporting college event activities.
            </p>

          </div>


          <div className="card">

            <h2>💻 Technical Workshops</h2>

            <p>
              Participated in technical workshops to improve
              programming and technical knowledge.
            </p>

          </div>


          <div className="card">

            <h2>🎯 College Activities</h2>

            <p>
              Participated in college programs and activities,
              gaining experience in teamwork and communication.
            </p>

          </div>

          <div className="card">

            <h2>🌱 Project Activities</h2>

            <p>
              Worked on academic projects and explored
              practical applications of technology.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
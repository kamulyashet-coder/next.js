export default function ProjectCard({
  icon,
  title,
  description,
  technologies,
}) {
  return (
    <article className="project-card">

      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech">
        {technologies}
      </div>

    </article>
  );
}
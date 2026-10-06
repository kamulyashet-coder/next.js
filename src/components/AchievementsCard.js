export default function AchievementCard({
  icon,
  title,
  description,
}) {
  return (
    <article className="achievement-card">

      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </article>
  );
}
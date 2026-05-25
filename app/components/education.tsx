export default function Education() {
  const entries = [
    {
      degree: "Bachelor of Technology — Data Science",
      institution: "Jiet University, Rajasthan",
      date: "2024– 2028",
      points: [
        "CGPA: 7.8 / 10",
        "Specialised in Web Technologies and Data Structures & Algorithms.",
      ],
    },
    {
      degree: "Higher Secondary Certificate (12th Grade) — Science",
      institution: "Central Board of Secondary Education, Rajasthan",
      points: [
        "Percentage: 73%",
        "Majored in Physics, Chemistry & Mathematics.",
      ],
    },
  ];

  return (
    <section className="section-shell" id="education">
      <div className="section-label">Education</div>
      <h2 className="section-title">Academic Background</h2>

      {entries.map((entry) => (
        <div className="card" key={entry.degree}>
          <div className="card-header">
            <span className="card-title">{entry.degree}</span>
            <span className="card-date">{entry.date}</span>
          </div>
          <div className="card-sub">{entry.institution}</div>
          <div className="card-body">
            <ul>
              {entry.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

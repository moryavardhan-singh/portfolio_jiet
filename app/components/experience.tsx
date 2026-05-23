export default function Experience() {
  const roles = [
    {
      title: "Frontend Developer Intern",
      company: "TechNova Solutions Pvt. Ltd.",
      location: "Remote",
      date: "Jan 2024 – Jun 2024",
      points: [
        "Built and maintained responsive UI components using React and TypeScript.",
        "Integrated REST APIs and implemented client-side data caching with React Query.",
        "Translated Figma mockups into pixel-perfect pages.",
        "Reduced page load time by 35% through code-splitting and lazy loading.",
      ],
    },
    {
      title: "Web Development Trainee",
      company: "DigiLearn Institute",
      location: "Jaipur, Rajasthan",
      date: "Jun 2023 – Dec 2023",
      points: [
        "Completed hands-on training in HTML, CSS, JavaScript and Node.js.",
        "Developed a full-stack task management app as the capstone project.",
        "Mentored 15 junior trainees during the final month of the programme.",
      ],
    },
  ];

  return (
    <section className="section-shell" id="experience">
      <div className="section-label">Experience</div>
      <h2 className="section-title">Where I&rsquo;ve Worked</h2>

      {roles.map((role) => (
        <div className="card" key={role.title}>
          <div className="card-header">
            <span className="card-title">{role.title}</span>
            <span className="card-date">{role.date}</span>
          </div>
          <div className="card-sub">
            {role.company} &mdash; {role.location}
          </div>
          <div className="card-body">
            <ul>
              {role.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

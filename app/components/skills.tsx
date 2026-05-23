export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Next.js", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST API", "Socket.io"],
    },
    {
      category: "Database & DevOps",
      skills: ["MongoDB", "PostgreSQL", "Git", "GitHub", "Vercel", "Railway"],
    },
    {
      category: "Tools",
      skills: ["Figma", "Postman", "VS Code", "Agile / Scrum"],
    },
  ];

  return (
    <section className="section-shell" id="skills">
      <div className="section-label">Skills</div>
      <h2 className="section-title">Tech Stack</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.category}>
            <div className="skill-category">{group.category}</div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

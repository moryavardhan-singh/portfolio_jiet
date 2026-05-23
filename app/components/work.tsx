export default function Work() {
  const projects = [
    {
      num: "01",
      title: "E-Commerce Platform",
      stack: "Next.js · Node.js · MongoDB · Stripe",
      year: "2024",
      points: [
        "Full-featured store with admin dashboard and JWT authentication.",
        "Stripe Checkout integration and role-based access control.",
        "Next.js SSR for improved SEO and performance.",
      ],
    },
    {
      num: "02",
      title: "School SaaS Platform",
      stack: "Next.js · NextAuth · PostgreSQL · Prisma",
      year: "2024",
      points: [
        "Multi-role SaaS with Admin, Teacher and Student dashboards.",
        "Attendance management, course tracking and fee payment status.",
      ],
    },
    {
      num: "03",
      title: "Real-Time Collaborative Code Editor",
      stack: "Socket.io · CodeMirror 6 · React · Node.js",
      year: "2024",
      points: [
        "Browser-based editor supporting real-time collaboration for up to 10 users.",
        "Socket.io for real-time sync and CodeMirror 6 for syntax highlighting.",
      ],
    },
  ];

  return (
    <section className="section-shell" id="projects">
      <div className="section-label">Projects</div>
      <h2 className="section-title">Things I&rsquo;ve Built</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.num}>
            <div className="project-number"># {p.num}</div>
            <div className="project-title">{p.title}</div>
            <div className="project-stack">{p.stack}</div>
            <div className="project-body">
              <ul>
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

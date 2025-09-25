import Section from "./Section";

const groups = [
  { title: "Programming Languages", icon: "💻", items: ["C++", "C", "Python", "Java", "C#", "Kotlin", "JavaScript"] },
  { title: "Systems & Tools", icon: "🛠️", items: ["Linux", "Git", "Docker", "AWS (EC2, S3)"] },
  { title: "Frameworks & Libraries", icon: "📚", items: ["ASP.NET Core", "React", "OpenMP", "Pytorch"] }
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map(g => (
          <article
            key={g.title}
            className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 via-white to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 text-blue-700">
              <span className="text-2xl" aria-hidden>{g.icon}</span>
              <h3 className="text-lg font-semibold text-blue-900">{g.title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-blue-900">
              {g.items.map(item => (
                <li
                  key={item}
                  className="rounded-full border border-blue-200 bg-white/80 px-3 py-1 shadow-sm transition group-hover:border-blue-300 group-hover:bg-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

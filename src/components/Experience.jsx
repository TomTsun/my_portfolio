import Section from "./Section";
import data from "../data/experiences.json";

export default function Experience() {
  const experiences = [...data]
    .map(exp => ({
      ...exp,
      startDate: new Date(exp.start || exp.period?.split("–")[0] || ""),
      endDate: new Date(exp.end || exp.period?.split("–")[1] || "")
    }))
    .sort((a, b) => b.startDate - a.startDate);

  if (!experiences.length) {
    return (
      <Section id="experience" title="Work Experience">
        <p className="text-center text-gray-500">目前沒有經驗資料。</p>
      </Section>
    );
  }

  return (
    <Section id="experience" title="Work Experience">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="grid gap-6 md:hidden">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} />
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <ExperienceCard exp={exp} isDesktop />
            </div>
          ))}
        </div>
      </div>
    </Section>

  );
}

function ExperienceCard({ exp, isDesktop }) {
  return (
    <article
      className={`w-full max-w-lg rounded-2xl border border-blue-200 bg-blue-50 p-6 text-left shadow-sm ${
        isDesktop ? "md:w-[90%]" : ""
      }`}
    >
      <div className="text-sm font-medium text-gray-600">{exp.period}</div>
      <h3 className="mt-1 text-lg font-semibold text-blue-900">{exp.title}</h3>
      <div className="text-base font-medium text-blue-600">{exp.company}</div>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

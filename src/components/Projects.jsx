import Section from "./Section";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 text-left">
        {projects.map((p, idx) => (
          <article key={idx} className="flex h-full flex-col rounded-2xl border p-6 transition hover:shadow-lg">
            <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
              {p.tags.map(t => (
                <span key={t} className="rounded-full border px-3 py-1">{t}</span>
              ))}
            </div>
            {(p.links?.live || p.links?.source) && (
              <div className="mt-auto flex gap-4 pt-4 text-sm text-blue-600">
                {p.links?.live && <a href={p.links.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                {p.links?.source && <a href={p.links.source} target="_blank" rel="noopener noreferrer">Source ↗</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

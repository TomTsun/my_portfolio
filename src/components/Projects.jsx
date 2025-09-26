import { useEffect, useMemo, useState } from "react";
import Section from "./Section";
import projects from "../data/projects.json";

const BREAKPOINTS = [
  { width: 1280, slides: 3 },
  { width: 768, slides: 2 },
];

export default function Projects() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const resolveSlides = () => {
      if (typeof window === "undefined") return 1;
      for (const bp of BREAKPOINTS) {
        if (window.innerWidth >= bp.width) return bp.slides;
      }
      return 1;
    };

    const handleResize = () => {
      setSlidesPerView(prev => {
        const next = resolveSlides();
        return prev === next ? prev : next;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(prev => Math.min(prev, Math.max(0, projects.length - slidesPerView)));
  }, [slidesPerView, projects.length]);

  const maxIndex = Math.max(0, projects.length - slidesPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;
  const translatePercent = useMemo(() => (100 / slidesPerView) * currentIndex, [currentIndex, slidesPerView]);
  const totalPages = Math.max(1, Math.ceil(projects.length / slidesPerView));

  const jumpToPage = pageNumber => {
    const candidate = Math.min(pageNumber * slidesPerView, maxIndex);
    setCurrentIndex(candidate);
  };

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (canGoNext) setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <Section id="projects" title="Projects">
      <div className="relative py-4 sm:py-6">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:cursor-default disabled:opacity-40 sm:-left-5"
          aria-label="Previous project"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canGoNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:cursor-default disabled:opacity-40 sm:-right-5"
          aria-label="Next project"
        >
          ›
        </button>

        <div className="overflow-x-hidden overflow-y-visible px-2 py-4 sm:px-6">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="box-border w-full flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <article className="flex h-full flex-col rounded-2xl border bg-white/95 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
                    {p.tags.map(t => (
                      <span key={t} className="rounded-full border px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  {(p.links?.live || p.links?.source) && (
                    <div className="mt-auto flex gap-4 pt-4 text-sm text-blue-600">
                      {p.links?.live && (
                        <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="font-medium">
                          Live ↗
                        </a>
                      )}
                      {p.links?.source && (
                        <a href={p.links.source} target="_blank" rel="noopener noreferrer" className="font-medium">
                          Source ↗
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {(() => {
            const activePage = maxIndex === 0 ? 0 : Math.ceil((currentIndex / maxIndex) * (totalPages - 1));
            return Array.from({ length: totalPages }, (_, page) => (
              <button
                key={page}
                type="button"
                onClick={() => jumpToPage(page)}
                className={`h-2.5 rounded-full transition ${page === activePage ? "w-8 bg-blue-500" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to projects page ${page + 1}`}
              />
            ));
          })()}
        </div>
      </div>
    </Section>
  );
}

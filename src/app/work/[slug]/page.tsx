import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "bloom-house",
    title: "Bloom House",
    category: "Branding / Digital Product",
    year: "2026",
    statement: "A calm wellness brand experience built with editorial detail and product clarity.",
    services: ["Brand Identity", "Web Design", "Development"],
    challenge:
      "Bloom House needed a website and brand expression that felt premium, grounded and inviting while communicating wellness rituals and product storytelling.",
    approach:
      "We built a quiet, structured identity system and a digital interface that balances warmth with modern precision. Soft motion, deliberate spacing and restrained typography were essential.",
    design:
      "The visual language is guided by a pared-back palette, tactile imagery and a modular system suited to storytelling and product curation.",
    experience:
      "Interactions are subtle: hover reveals, soft card motion, and a clean navigation flow that feels calm and refined.",
    development:
      "The site was implemented with performance-first techniques, responsive layout, accessible structure and optimized imagery for rich editorial presentation.",
  },
  {
    slug: "aether-studio",
    title: "Aether Studio",
    category: "Web / 3D / Experience",
    year: "2026",
    statement: "A product launch environment built around dynamic composition, subtle motion and immersive storytelling.",
    services: ["3D Experiences", "UX Design", "Interactive Development"],
    challenge:
      "Aether Studio required a launch destination with premium visual staging that felt dimensional without relying on gimmicks.",
    approach:
      "We created a layered hero, refined scroll cues and a restrained color palette that let the work feel tactile and modern.",
    design:
      "Typography is bold yet calm, imagery is precisely cropped, and the interface uses strong grids to emphasize hierarchy.",
    experience:
      "Scroll-led transitions move content with feeling, and layered elements create depth through motion and scale.",
    development:
      "The experience was delivered on a responsive platform with smooth frame-rate transitions, accessible markup, and thoughtful asset loading.",
  },
  {
    slug: "atelier-collective",
    title: "Atelier Collective",
    category: "E-commerce / Visual System",
    year: "2026",
    statement: "A premium retail experience that balances commerce clarity with editorial styling.",
    services: ["E-commerce", "Visual Design", "Brand Systems"],
    challenge:
      "Atelier Collective needed a refined online store that felt editorial, personal and easy to navigate.",
    approach:
      "We designed a welcoming commerce framework with elevated product layout, clear calls to action, and expressive imagery.",
    design:
      "The system uses soft grids, generous spacing, and calm typography paired with minimal visual flourishes.",
    experience:
      "Interactions are understated: product reveals, hover scale, and content transitions that support a premium shopping journey.",
    development:
      "Built to adapt gracefully across devices, the site focused on fast loading, accessible forms, and consistent performance.",
  },
];

function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const nextIndex = (projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <main className="bg-white text-devera-dark">
      <section className="relative overflow-hidden bg-offwhite px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-16 lg:grid-cols-[0.45fr_0.55fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-devera-dark/50">Case study</p>
              <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">{project.title}</h1>
              <p className="max-w-3xl text-base leading-8 text-devera-dark/70 sm:text-lg">{project.statement}</p>
              <div className="grid gap-3 text-sm uppercase tracking-[0.28em] text-devera-dark/60 sm:grid-cols-3">
                <span>{project.category}</span>
                <span>{project.year}</span>
                <span>{project.services.join(" • ")}</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/75 bg-slate-100 p-8 shadow-sm">
              <div className="h-[420px] rounded-[1.75rem] bg-slate-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1480px] gap-20">
          <article className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
            <div className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">01 — The Challenge</div>
            <p className="text-base leading-8 text-devera-dark/75">{project.challenge}</p>
          </article>
          <article className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
            <div className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">02 — The Approach</div>
            <p className="text-base leading-8 text-devera-dark/75">{project.approach}</p>
          </article>
          <article className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
            <div className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">03 — Design</div>
            <p className="text-base leading-8 text-devera-dark/75">{project.design}</p>
          </article>
          <article className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
            <div className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">04 — Experience</div>
            <p className="text-base leading-8 text-devera-dark/75">{project.experience}</p>
          </article>
          <article className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
            <div className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">05 — Development</div>
            <p className="text-base leading-8 text-devera-dark/75">{project.development}</p>
          </article>
          <div className="rounded-[2rem] border border-slate-200/70 bg-slate-100 p-8 shadow-sm">
            <div className="h-[440px] rounded-[1.75rem] bg-slate-300" />
          </div>
          <div className="border-t border-slate-200/80 pt-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-devera-dark/50">Next project</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-devera-dark">{nextProject.title}</h2>
              </div>
              <Link
                href={`/work/${nextProject.slug}`}
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-devera-teal"
              >
                {nextProject.title}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

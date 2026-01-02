export default function Home() {
  const titleOptions = [
    {
      title: "Black's Woods Ledger",
      subtitle: "A cold case journal reopened three decades later",
      rationale:
        "Recalls the meticulous documentation of a noir investigation while anchoring the story to the hallowed ground of Black's Woods.",
    },
    {
      title: "Allagash Echoes",
      subtitle: "Clues reverberating through frozen pines",
      rationale:
        "Evokes how unanswered questions carry across time and terrain, inviting viewers to listen for what was missed.",
    },
    {
      title: "Mist Over Blackwood",
      subtitle: "Unraveling what the fog tried to hide",
      rationale:
        "Pairs the chilling visual atmosphere with the sensation of peeling back layers of obscured truth.",
    },
    {
      title: "Cold Pines Casefiles",
      subtitle: "Meticulous evidence, one needle at a time",
      rationale:
        "Highlights the procedural cadence of the series while spotlighting the tactile artifacts of the investigation.",
    },
    {
      title: "The Allagash Archive",
      subtitle: "Recovered fragments from a missing past",
      rationale:
        "Suggests a curated trove of analog discoveries that empower armchair detectives to pore over every detail.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-16 px-6 py-16 sm:px-12">
        <header className="flex flex-col gap-6 border-l-4 border-cyan-500/70 pl-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Black&apos;s Woods Case | Series Naming Exploration
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
            Noir-forward title directions for a cold case deep in the Allagash.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Curated for an immersive, evidence-driven YouTube docu-series that
            pairs analog artifacts with blue-hour cinematography and invites
            viewers to investigate alongside the protagonist.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {titleOptions.map((option) => (
            <article
              key={option.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-[inset_0_1px_0_rgba(148,163,184,0.1)] transition hover:border-cyan-400/60 hover:bg-slate-900/80"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-slate-50/40 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h2 className="text-2xl font-semibold text-cyan-100">
                {option.title}
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
                {option.subtitle}
              </p>
              <p className="mt-6 text-sm leading-6 text-slate-300">
                {option.rationale}
              </p>
            </article>
          ))}
        </section>

        <footer className="border-t border-slate-800/60 pt-8 text-sm text-slate-400">
          Five distinct directions that balance procedural intrigue with the
          haunting mystique of rural Maine—ready to headline your Black&apos;s
          Woods series.
        </footer>
      </main>
    </div>
  );
}

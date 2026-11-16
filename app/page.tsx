import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { Roach, RoachMark } from "@/components/Roach";
import { SpeciesExplorer } from "@/components/SpeciesExplorer";

const NAV = [
  { label: "Dossier", href: "#dossier" },
  { label: "Anatomy", href: "#anatomy" },
  { label: "Species", href: "#species" },
  { label: "Myths", href: "#myths" },
  { label: "Deep time", href: "#timeline" },
];

const TICKER = [
  "4,600 species",
  "320 million years",
  "1.5 metres per second",
  "6 legs, 18 knees",
  "Breathes through its sides",
  "Survives a week without its head",
  "Nocturnal, thigmotactic, omnivorous",
  "Older than the dinosaurs",
];

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="label text-amber">{index}</span>
      <span className="h-px w-10 bg-ink/20" aria-hidden="true" />
      <span className="label text-ash">{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <AmbientBackdrop />

      {/* ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(60%_60%_at_70%_10%,rgba(169,186,124,0.13),transparent_70%)]"
      />

      <header className="relative z-40">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8"
        >
          <a href="#top" className="group flex items-center gap-3">
            <RoachMark className="h-7 w-7 text-lichen transition-transform duration-500 group-hover:-rotate-12" />
            <span className="font-display text-2xl tracking-tight">cockroach</span>
            <span className="label mt-1 hidden text-ash/60 sm:inline">field guide</span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="label text-ash transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#anatomy"
            className="label rounded-full border border-ink/15 px-4 py-2 text-ink/90 transition-colors hover:border-amber/60 hover:text-amber"
          >
            Open the guide
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10 flex-1">
        {/* HERO */}
        <section className="mx-auto w-full max-w-[1180px] px-5 pb-16 pt-8 sm:px-8 sm:pt-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8">
            <div className="animate-rise">
              <p className="label flex flex-wrap items-center gap-x-3 gap-y-2 text-ash">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
                <span>Order Blattodea</span>
                <span className="text-ash/30" aria-hidden="true">
                  —
                </span>
                <span>320 million years in business</span>
              </p>

              <h1 className="display mt-7 text-[clamp(3.4rem,9vw,6.6rem)]">
                Older than the
                <br />
                dinosaurs.
                <br />
                <span className="italic text-lichen">Still in your</span>{" "}
                <span className="relative whitespace-nowrap">
                  kitchen
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-amber/70"
                  />
                </span>
                .
              </h1>

              <p className="mt-8 max-w-md text-[1.05rem] leading-relaxed text-ash">
                There are roughly{" "}
                <span className="text-ink">4,600 species</span> of cockroach on
                Earth. About thirty share our buildings. Only a handful are
                pests. The rest have spent 320 million years quietly recycling
                forests — and they are very good at it.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#species"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-void transition-colors hover:bg-lichen"
                >
                  Meet the family
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#dossier"
                  className="inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-3.5 text-sm text-ink/90 transition-colors hover:border-ink/40"
                >
                  Read the dossier
                </a>
              </div>
            </div>

            {/* Specimen plate */}
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="relative aspect-square rounded-full border border-ink/15 bg-[radial-gradient(circle_at_50%_38%,#1e2418_0%,#0c0e09_72%)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-4 animate-[spin_90s_linear_infinite] rounded-full border border-dashed border-ink/15"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-10 rounded-full border border-ink/[0.07]"
                />
                <span className="label absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap text-[0.625rem] text-ash/70">
                  Blattodea · specimen 001
                </span>
                <span className="label absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.625rem] text-ash/70">
                  Actual size · 18×
                </span>
                <span className="label absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-90 text-[0.625rem] text-ash/50 sm:block">
                  1 : 1
                </span>

                <Roach className="absolute inset-0 m-auto h-[82%] w-[82%] animate-drift" />
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
                <p className="label text-ash/60">Periplaneta americana</p>
                <p className="label text-amber">Fig. 01</p>
              </div>
            </div>
          </div>

          {/* stats */}
          <dl className="mt-16 grid grid-cols-2 gap-8 border-y border-ink/10 py-8 sm:mt-20 md:grid-cols-4 md:gap-0">
            {[
              ["4,600", "known species"],
              ["320M", "years on the planet"],
              ["~1%", "are pests of humans"],
              ["1.5 m/s", "top recorded sprint"],
            ].map(([value, label], i) => (
              <div
                key={label}
                className={`md:px-8 ${i > 0 ? "md:border-l md:border-ink/10" : ""} ${
                  i === 0 ? "md:pl-0" : ""
                }`}
              >
                <dt className="display tabular text-4xl text-ink sm:text-5xl">
                  {value}
                </dt>
                <dd className="label mt-2 text-ash/70">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* TICKER */}
        <section
          aria-label="Cockroach facts"
          className="relative border-y border-ink/10 py-4"
        >
          <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
                {TICKER.map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-8">
                    <span className="label text-ash">{item}</span>
                    <span className="text-amber/70" aria-hidden="true">
                      ✳
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* DOSSIER */}
        <section id="dossier" className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">
          <SectionLabel index="01">The dossier</SectionLabel>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <h2 className="display text-[clamp(2.6rem,5vw,4.2rem)]">
                A 320-million-year-old
                <br />
                <span className="italic text-lichen">design classic.</span>
              </h2>
              <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-ash">
                <p>
                  Cockroaches first appear in the fossil record in the
                  Carboniferous period, around 320 million years ago — before
                  the first dinosaurs, before the first mammals, when the great
                  coal forests were still standing. Their body plan has barely
                  needed revision since.
                </p>
                <p>
                  They are not a single animal but an entire order:{" "}
                  <span className="text-ink">Blattodea</span>, which also
                  contains the termites. Most species live in leaf litter and
                  rotting wood in the tropics, where they shred dead plant
                  matter and return its nutrients to the soil. A few — fewer
                  than thirty — moved in with humans, and only four or five of
                  those are considered pests.
                </p>
                <p>
                  The one at your skirting board is an outlier, not the rule.
                  It is also, by almost any measure, one of the most successful
                  animals that has ever lived.
                </p>
              </div>
            </div>

            <div className="self-start rounded-2xl border border-ink/10 bg-bark p-7 sm:p-9">
              <p className="label text-ash/60">Taxonomy &amp; vital statistics</p>
              <dl className="mt-6 divide-y divide-ink/10">
                {[
                  ["Order", "Blattodea"],
                  ["Class", "Insecta"],
                  ["First appeared", "Carboniferous, ~320 Ma"],
                  ["Species described", "≈ 4,600"],
                  ["Synanthropic species", "≈ 30"],
                  ["Body segments", "Head, thorax, abdomen"],
                  ["Wings", "Two pairs (some species wingless)"],
                  ["Lifespan", "6 months – 10 years"],
                  ["Diet", "Omnivorous detritivore"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-3.5">
                    <dt className="label shrink-0 text-ash/60">{k}</dt>
                    <dd className="text-right text-sm text-ink/90">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 border-t border-ink/10 pt-5 font-display text-xl italic leading-snug text-lichen/90">
                “The cockroach is not a pest. It is a whole order of insects,
                four of which happen to like our crumbs.”
              </p>
            </div>
          </div>
        </section>

        {/* ANATOMY / WHY THEY WIN */}
        <section id="anatomy" className="border-y border-ink/10">
          <div className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel index="02">Anatomy of a survivor</SectionLabel>
                <h2 className="display mt-8 max-w-2xl text-[clamp(2.4rem,4.6vw,3.8rem)]">
                  Everything about it is
                  <br />
                  a solution to <span className="italic text-amber">something.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ash">
                Strip away the reputation and you find a compact set of
                engineering decisions that have outlasted four mass extinctions.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Armour with a wax coat",
                  body: "A chitin exoskeleton reinforced with sclerotin, sealed under a lipid layer that stops water escaping. It is light, jointed and sheds the whole package when it outgrows it.",
                  tag: "Exoskeleton",
                },
                {
                  n: "02",
                  title: "Sensors that feel the air move",
                  body: "Two rear appendages — cerci — carry hundreds of hair-like sensilla tuned to pressure waves. A gust from a predator is detected in milliseconds, and the escape run starts before the strike lands.",
                  tag: "Cerci",
                },
                {
                  n: "03",
                  title: "A body that folds flat",
                  body: "No rigid ribcage, no lungs, no bones. An adult can compress into a gap a quarter of its standing height, which is why a sealed kitchen still isn't sealed.",
                  tag: "Compressibility",
                },
                {
                  n: "04",
                  title: "An immune system with a memory",
                  body: "Cockroaches produce antimicrobial peptides and, unusually for insects, show immune priming: a first exposure makes the next response faster. They are studied as a source of new antibiotics.",
                  tag: "Immunity",
                },
                {
                  n: "05",
                  title: "Eat first, ask later",
                  body: "Detritivores by trade. Gut microbes let them digest cellulose, and a hungry roach will take glue, paper, hair, soap and dead leaves. Protein is a bonus, not a requirement.",
                  tag: "Diet",
                },
                {
                  n: "06",
                  title: "The egg case",
                  body: "Eggs travel in a hardened ootheca — a purse of 15 to 40 embryos. German females carry theirs until hatching. Some species can reproduce without a mate at all.",
                  tag: "Reproduction",
                },
              ].map((card) => (
                <article
                  key={card.n}
                  className="group relative bg-bark p-7 transition-colors duration-500 hover:bg-husk sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="label tabular text-amber/80">{card.n}</span>
                    <span className="label text-ash/40">{card.tag}</span>
                  </div>
                  <h3 className="mt-8 text-lg leading-snug text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{card.body}</p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-amber/60 transition-transform duration-500 group-hover:scale-x-100"
                  />
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="bg-soil p-8 sm:p-12">
                <p className="label text-amber">Behaviour</p>
                <p className="display mt-5 text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05]">
                  They don't outrun us.
                  <br />
                  <span className="italic text-lichen">They out-adapt us.</span>
                </p>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-ash">
                  Cockroaches are nocturnal, thigmotactic (they prefer to be
                  touched on all sides) and negatively phototactic — they run
                  from light. They taste with their feet, groom constantly, and
                  aggregate using pheromones, which is why an infestation is
                  rarely one insect. A German cockroach nymph can mature in
                  about six weeks; a single egg case can hold forty of them.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-ink/10">
                {[
                  ["6", "legs, each with sensors"],
                  ["18", "knees to coordinate"],
                  ["~40", "nymphs per egg case"],
                  ["7 days", "survives without a head"],
                ].map(([big, small]) => (
                  <div key={small} className="flex flex-col justify-between bg-soil p-6 sm:p-8">
                    <span className="display text-3xl text-ink sm:text-4xl">{big}</span>
                    <span className="mt-8 text-xs leading-snug text-ash">{small}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SPECIES */}
        <section id="species" className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="03">The family album</SectionLabel>
              <h2 className="display mt-8 text-[clamp(2.4rem,4.6vw,3.8rem)]">
                Six roaches,
                <br />
                <span className="italic text-lichen">six very different lives.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ash">
              Select a specimen. Almost none of them want anything to do with
              your kitchen.
            </p>
          </div>

          <div className="mt-12">
            <SpeciesExplorer />
          </div>
        </section>

        {/* MYTHS */}
        <section id="myths" className="border-y border-ink/10">
          <div className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <SectionLabel index="04">Myth control</SectionLabel>
                <h2 className="display mt-8 text-[clamp(2.4rem,4.6vw,3.8rem)]">
                  Four things
                  <br />
                  everybody
                  <br />
                  <span className="italic text-amber">gets wrong.</span>
                </h2>
                <p className="mt-7 max-w-xs text-sm leading-relaxed text-ash">
                  The cockroach has a PR problem, and most of it was written by
                  people who met one at 2 a.m.
                </p>
              </div>

              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {[
                  {
                    myth: "They would survive a nuclear blast.",
                    fact: "They tolerate roughly ten times more radiation than a human, and insects near the 1945 test sites did survive. But a blast is heat and pressure, not just fallout. They are tough, not invincible.",
                  },
                  {
                    myth: "They only live in filthy homes.",
                    fact: "They need warmth, moisture, food and somewhere to hide. A spotless building with a dripping pipe and a cardboard box is a five-star habitat. Clutter matters more than grime.",
                  },
                  {
                    myth: "They are aggressive and dirty.",
                    fact: "They flee light and contact, and they groom themselves constantly — often more than the animals that eat them. The health risk comes from where they have been, not from malice.",
                  },
                  {
                    myth: "One sighting means infestation.",
                    fact: "A single large roach may have wandered in from a drain or a garden. Repeated small nymphs, droppings along skirting boards or a sweet, musty smell are the signals that matter.",
                  },
                ].map((row, i) => (
                  <li key={row.myth} className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                    <span className="display tabular text-3xl text-ash/30">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="flex flex-wrap items-center gap-3">
                        <span className="label rounded-full border border-rust/40 px-2.5 py-1 text-[0.6rem] text-rust">
                          Myth
                        </span>
                        <span className="text-[1.05rem] text-ink/90 line-through decoration-ink/25">
                          {row.myth}
                        </span>
                      </p>
                      <p className="mt-4 flex gap-3 text-sm leading-relaxed text-ash">
                        <span className="label mt-1 shrink-0 text-[0.6rem] text-lichen">
                          Fact
                        </span>
                        <span>{row.fact}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">
          <SectionLabel index="05">Deep time</SectionLabel>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="display max-w-2xl text-[clamp(2.4rem,4.6vw,3.8rem)]">
              320 million years,
              <br />
              <span className="italic text-lichen">abridged.</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-ash">
              Five extinction events. One body plan. A short history of not
              going anywhere.
            </p>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {[
              {
                when: "320 Ma",
                title: "Carboniferous",
                body: "The first roach-like insects appear in the coal forests of the late Carboniferous, alongside the earliest winged insects.",
              },
              {
                when: "252 Ma",
                title: "The Great Dying",
                body: "Roughly 90% of marine species vanish. Cockroach lineages pass through the Permian–Triassic boundary largely intact.",
              },
              {
                when: "201 Ma",
                title: "Jurassic",
                body: "Blattodea diversifies while early dinosaurs are still finding their feet. The wing covers are already familiar.",
              },
              {
                when: "66 Ma",
                title: "K–Pg impact",
                body: "Non-avian dinosaurs go extinct. Cockroaches, termites and their relatives carry on through the debris.",
              },
              {
                when: "~10,000 ya",
                title: "The house guest",
                body: "As humans settle into permanent dwellings, a handful of species move in — a relationship that has lasted ever since.",
              },
              {
                when: "Today",
                title: "4,600 and counting",
                body: "New species are still described every year, most of them from tropical forest leaf litter rather than kitchen cupboards.",
              },
            ].map((item) => (
              <li key={item.when} className="group bg-bark p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="display tabular text-2xl text-amber">{item.when}</span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-ink/20 transition-colors group-hover:bg-lichen"
                  />
                </div>
                <h3 className="mt-6 text-base text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ash">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ECOLOGY / CLOSING */}
        <section className="border-t border-ink/10">
          <div className="mx-auto w-full max-w-[1180px] px-5 py-24 sm:px-8 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionLabel index="06">The other 99%</SectionLabel>
                <h2 className="display mt-8 text-[clamp(2.4rem,4.6vw,3.8rem)]">
                  The pest is
                  <br />
                  the <span className="italic text-lichen">exception.</span>
                </h2>
                <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-ash">
                  <p>
                    Most cockroaches are forest recyclers. They break down dead
                    leaves and wood that would otherwise pile up, and they are
                    food for birds, reptiles, amphibians and other insects. Some
                    are pollinators. A few — the hissing roaches — are kept as
                    pets, and one species gives birth to live young.
                  </p>
                  <p>
                    They are also becoming useful to us: cockroach antimicrobial
                    peptides are being investigated as templates for new
                    antibiotics, and their ability to regenerate nerve tissue is
                    studied by neuroscientists. The animal we spray behind the
                    fridge is, in another context, a research subject.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-soil p-8 sm:p-10">
                <p className="label text-amber">If they're in your kitchen</p>
                <h3 className="display mt-4 text-3xl">A short, sane protocol.</h3>
                <ol className="mt-7 space-y-5">
                  {[
                    ["Remove the water.", "Fix drips, dry sinks at night, cover pet bowls. Water is the real limiting factor in most homes."],
                    ["Seal the food.", "Glass or metal containers, tight bins, no overnight crumbs. Grease counts as food."],
                    ["Reduce the hiding places.", "Cardboard, newspaper and cluttered cupboards are roach real estate. So are warm motor housings."],
                    ["Escalate for German roaches.", "They breed too fast for traps alone. A professional using gel bait and growth regulators is the efficient answer."],
                  ].map(([title, body], i) => (
                    <li key={title} className="flex gap-4">
                      <span className="label mt-1 shrink-0 text-ash/50">
                        0{i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-ash">
                        <span className="text-ink">{title}</span> {body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-ink/10">
        <div className="mx-auto w-full max-w-[1180px] px-5 pb-10 pt-16 sm:px-8">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="label text-ash/60">A field guide to Blattodea</p>
              <p className="display mt-4 text-[clamp(3rem,8vw,6rem)] leading-none">
                cock<span className="italic text-lichen">roach</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-ash transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/shelwyn/cockroach"
                className="text-ash transition-colors hover:text-amber"
              >
                Source on GitHub ↗
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="label text-ash/50">
              © 2026 Cockroach — an exercise in good PR
            </p>
            <p className="label text-ash/50">Built with Next.js · No insects were harmed</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

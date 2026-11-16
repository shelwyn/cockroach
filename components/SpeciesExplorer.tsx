"use client";

import { useState } from "react";

type Species = {
  name: string;
  latin: string;
  length: string;
  range: string;
  diet: string;
  superpower: string;
  note: string;
};

const SPECIES: Species[] = [
  {
    name: "American cockroach",
    latin: "Periplaneta americana",
    length: "30–40 mm",
    range: "Worldwide, indoors & sewers",
    diet: "Almost anything organic",
    superpower: "1.5 m/s sprint — roughly 50 body lengths per second",
    note: "Despite the name it likely arrived from Africa or the Middle East, travelling in the holds of 17th-century ships. Warm, damp buildings suit it perfectly, which is why it turns up in basements, boiler rooms and drains.",
  },
  {
    name: "German cockroach",
    latin: "Blattella germanica",
    length: "12–16 mm",
    range: "Every human settlement on Earth",
    diet: "Starches, grease, soap, hair",
    superpower: "One female can seed a population of hundreds within a year",
    note: "The world's most common indoor cockroach and the only one that is almost never found in the wild. It lives exclusively alongside people — a 4,000-year-old houseguest that has evolved with our kitchens.",
  },
  {
    name: "Madagascar hissing cockroach",
    latin: "Gromphadorhina portentosa",
    length: "50–70 mm",
    range: "Madagascar — endemic",
    diet: "Fallen fruit and leaf litter",
    superpower: "Breathes a warning hiss through its own spiracles",
    note: "Wingless, slow, and entirely harmless. It forces air out of its breathing pores to hiss — used in courtship and in disputes over territory. It is now one of the most widely kept insect pets in the world.",
  },
  {
    name: "Oriental cockroach",
    latin: "Blatta orientalis",
    length: "20–27 mm",
    range: "Cooler, damp regions worldwide",
    diet: "Decaying plant and animal matter",
    superpower: "Thrives where it is cold and wet — even in winter",
    note: "Often called a waterbug. It prefers cool, damp places such as cellars, drains and outbuildings, and is less agile than its relatives. Females carry their egg case for a day or so before hiding it.",
  },
  {
    name: "Smokybrown cockroach",
    latin: "Periplaneta fuliginosa",
    length: "30–35 mm",
    range: "Humid subtropics, esp. SE United States",
    diet: "Leaf litter, mulch, algae",
    superpower: "A strong flier that is drawn to light",
    note: "A creature of gardens and gutters rather than kitchens. It is a competent flier — one of the few cockroaches you are likely to see airborne — and needs high humidity to survive indoors.",
  },
  {
    name: "Giant burrowing cockroach",
    latin: "Macropanesthia rhinoceros",
    length: "up to 80 mm, ~35 g",
    range: "Queensland, Australia",
    diet: "Dry eucalyptus leaves",
    superpower: "Lives up to 10 years and gives birth to live young",
    note: "The heaviest cockroach on Earth. It digs permanent burrows up to a metre deep, dragging leaves underground to feed on, and recycles nutrients back into some of the poorest soils in Australia.",
  },
];

export function SpeciesExplorer() {
  const [active, setActive] = useState(0);
  const sp = SPECIES[active];

  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="flex flex-col bg-bark p-2 sm:p-3">
        <ul className="flex flex-col">
          {SPECIES.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.latin}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-colors duration-300 ${
                    isActive
                      ? "bg-husk text-ink"
                      : "text-ash hover:bg-husk/50 hover:text-ink"
                  }`}
                >
                  <span
                    className={`label tabular w-6 shrink-0 text-[0.625rem] ${
                      isActive ? "text-amber" : "text-ash/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.95rem] leading-tight">
                      {s.name}
                    </span>
                    <span className="mt-0.5 block truncate font-display text-[0.95rem] italic text-ash">
                      {s.latin}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                      isActive ? "bg-amber" : "bg-transparent"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <p className="label mt-auto hidden px-4 pb-2 pt-8 leading-relaxed text-ash/35 sm:block">
          4,600 described species
          <br />
          only ~30 live with us
        </p>
      </div>

      <div className="relative overflow-hidden bg-soil p-7 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-lichen/5 blur-3xl"
        />
        <div key={sp.latin} className="animate-rise">
          <p className="label text-amber">Specimen {String(active + 1).padStart(2, "0")} / 06</p>
          <h3 className="display mt-4 text-5xl text-ink sm:text-6xl">{sp.name}</h3>
          <p className="mt-2 font-display text-2xl italic text-lichen">{sp.latin}</p>
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-ash">{sp.note}</p>

          <dl className="mt-9 grid gap-x-6 gap-y-5 border-t border-ink/10 pt-6 sm:grid-cols-2">
            {[
              ["Length", sp.length],
              ["Range", sp.range],
              ["Diet", sp.diet],
              ["Superpower", sp.superpower],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label text-ash/70">{k}</dt>
                <dd className="mt-1.5 text-sm leading-snug text-ink/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

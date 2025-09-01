<template>
  <main v-bind="$attrs">
    <div class="grid grid-cols-[1fr_auto] gap-4">
      <div>
        <Headline1>
          Program k <time datetime="2025-09-06">6.&nbsp;9.&nbsp;2025</time>
          <span class="block text-base text-muted-foreground">Výstaviště Holešovice, Praha</span>
        </Headline1>
        <section>
          <ul class="mb-4">
            <li>
              <NuxtLink class="font-semibold underline mb-2" :to="'/orientacni_mapa.jpg'" target="_blank">
                Orientační plánek ke stažení
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="font-semibold underline mb-2" :to="'/program.jpg'" target="_blank">
                Program ke stažení
              </NuxtLink>
            </li>
          </ul>
        </section>

        <section aria-labelledby="hlavni-podium">
          <Headline2 id="hlavni-podium"> Hlavní podium </Headline2>
          <ul class="text-lg mb-3">
            <li v-for="item of hlavniPodium" class="mb-2">
              <span class="font-semibold" :datetime="item.start">
                {{ item.start + "-" + item.end }}
              </span>
              <span> – {{ item.event }}</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="kolbiste">
          <Headline2 id="kolbiste">Kolbiště</Headline2>
          <ul class="text-lg mb-3">
            <li v-for="item in kolbiste" class="mb-2">
              <span class="font-semibold" :datetime="item.start">
                {{ item.start + "-" + item.end }}
              </span>
              <span> – {{ item.event }}</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="kolbiste">
          <Headline2 id="kolbiste">Cimbál u vstupu</Headline2>
          <ul class="text-lg mb-3">
            <li v-for="item in cimbal" class="mb-2">
              <span class="font-semibold" :datetime="item.start">
                {{ item.start + "-" + item.end }}
              </span>
              <span> – {{ item.event }}</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="atrakce-pro-deti">
          <Headline2 id="atrakce-pro-deti"> Atrakce pro děti </Headline2>
          <ul class="list-disc pl-4 text-lg mb-3">
            <li v-for="item in atrakceProDeti" class="mb-2">
              {{ item }}
            </li>
          </ul>
        </section>

        <section aria-labelledby="regionfest">
          <Headline2 id="regionfest"> Regionfest </Headline2>
          <ul class="list-disc pl-4 text-lg mb-3">
            <li v-for="item in regionfest" class="mb-2">
              {{ item }}
            </li>
          </ul>
        </section>
      </div>
      <NuxtImg class="hidden md:block w-16" src="/graphic/stripe.o.svg" />
    </div>
  </main>
</template>

<script lang="ts" setup>
type ProgramItem = { start: string; end: string; event: string };

const hlavniPodium: ProgramItem[] = [
  { start: "10:10", end: "10:40", event: "Folklorní soubor Hadárek" },
  { start: "10:50", end: "11:05", event: "Předání dožínkových věnců" },
  {
    start: "11:10",
    end: "11:30",
    event: "Předání ocenění Středočeská Regionální potravina",
  },
  { start: "12:00", end: "13:00", event: "Cimbálová muzika Studánka Praha" },
  { start: "14:30", end: "15:00", event: "Folklorní soubor Hadárek" },
  { start: "15:30", end: "16:30", event: "Cimbálová muzika Studánka Praha" },
  { start: "17:30", end: "18:00", event: "Cimbálová muzika Studánka Praha" },
];

const kolbiste: ProgramItem[] = [
  { start: "11:30", end: "12:00", event: "Pohádka na koních" },
  { start: "12:30", end: "13:00", event: "Ukázka nahánění ovcí" },
  { start: "13:30", end: "14:00", event: "Show minikoní" },
  { start: "14:20", end: "14:30", event: "Čtverylka starokladrubských koní" },
  { start: "14:30", end: "15:00", event: "Ukázka nahánění ovcí" },
  {
    start: "15:00",
    end: "15:10",
    event: "Ukázka jízdy v dámském sedle se starokladrubskými koňmi",
  },
  { start: "15:40", end: "16:00", event: "Pohádka na koních" },
  { start: "16:30", end: "17:00", event: "Ukázka nahánění ovcí" },
  { start: "17:00", end: "17:30", event: "Pohádka na koních" },
];

// If “Cimbál u vstupu” is separate, adjust these times;
// for now I used the cimbál slots from the poster.
const cimbal: ProgramItem[] = [
  { start: "12:00", end: "13:00", event: "Cimbálová muzika Studánka Praha (u vstupu)" },
  { start: "15:30", end: "16:30", event: "Cimbálová muzika Studánka Praha (u vstupu)" },
  { start: "17:30", end: "18:00", event: "Cimbálová muzika Studánka Praha (u vstupu)" },
];

const atrakceProDeti: string[] = [
  "Workshopy",
  "Skákací kombajn",
  "Ražení odznáčků",
  "Dětská stanoviště",
  "Výroba dožínkových věnců",
  "Dětské kvízy",
  "Malování na obličej",
  "Projížďky na koních",
  "Práce se dřevem",
  "Fotokoutek",
];

const regionfest: string[] = [
  "Farmářský trh za účasti více než 40 výrobců z regionů",
  "Klasáčkova miniakademie – aktivity pro děti",
];

const potravinyKNezaplaceni: string[] = [
  "Interaktivní program odhalí úsilí, čas a tvrdou práci, která stojí za výrobou kvalitních potravin",
  "Setkání s výrobci",
  "Soutěže o oceněné potraviny",
];

const EVENT_DATE = "2025-09-06";
const TZ = "+02:00"; // CEST
const toISO = (t: string) => `${EVENT_DATE}T${t}:00${TZ}`;

const venue = {
  "@type": "Place",
  name: "Výstaviště Holešovice",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prague 7",
    addressCountry: "CZ",
    streetAddress: "Výstaviště 67",
    postalCode: "17000"
  }
};

const subEvents = [
  ...hlavniPodium.map(i => ({
    "@type": "Event",
    name: `Hlavní pódium: ${i.event}`,
    startDate: toISO(i.start),
    endDate: toISO(i.end),
    location: venue
  })),
  ...kolbiste.map(i => ({
    "@type": "Event",
    name: `Kolbiště: ${i.event}`,
    startDate: toISO(i.start),
    endDate: toISO(i.end),
    location: venue
  })),
  ...cimbal.map(i => ({
    "@type": "MusicEvent",
    name: i.event,
    startDate: toISO(i.start),
    endDate: toISO(i.end),
    location: venue
  }))
];

const url = useRequestURL();

// @ts-ignore
useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "Festival",
  name: "Dožínkové slavnosti",
  description:
    "Program Dožínkových slavností 6. 9. 2025 na Výstavišti Holešovice: hlavní pódium, kolbiště, cimbál u vstupu, atrakce pro děti, Regionfest a Potraviny k nezaplacení.",
  inLanguage: "cs",
  isAccessibleForFree: true,
  eventStatus: "EventScheduled",
  eventAttendanceMode: "OfflineEventAttendanceMode",
  startDate: toISO("10:10"),
  endDate: toISO("18:00"),
  url: url.href,
  image: ["/og/program.jpg"], // případně uprav
  location: venue,
  subEvent: subEvents,
}));



useSeoMeta({
  title: "Program | Dožínkové slavnosti – Výstaviště Holešovice",
  ogTitle: "Program – Dožínkové slavnosti (6. 9. 2025, Výstaviště Holešovice)",
  description:
    "Program Dožínkových slavností 6. 9. 2025 na Výstavišti Holešovice: hlavní pódium, kolbiště, cimbál u vstupu, atrakce pro děti, Regionfest a Potraviny k nezaplacení.",
  ogDescription:
    "Folklór, cimbálová muzika, dětské dílny, fotokoutek, práce se dřevem a farmářský trh 40+ výrobců. Kompletní časový plán dne na Výstavišti Holešovice.",
  ogType: "website",
  ogUrl: url.href,
  ogImage: "/og/program.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Program – Dožínkové slavnosti (Výstaviště Holešovice)",
  twitterDescription:
    "Program dne 6. 9. 2025: hlavní pódium, kolbiště, atrakce pro děti, Regionfest a více.",
  twitterImage: "/og/program.jpg",
  robots: "index,follow",
  keywords:
    "dožínky, program, Výstaviště Holešovice, Praha, folklór, cimbál, regionální potraviny, farmářský trh, atrakce pro děti"
});



</script>

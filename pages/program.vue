<template>
  <main v-bind="$attrs">
    <div class="grid grid-cols-[1fr_auto] gap-4">
      <div>
        <Headline1>
          Program k <time datetime="7.9.2024">7.9.2024</time> (připravujeme)
        </Headline1>
        <section aria-labelledby="hlavni-podium">
          <Headline2 id="hlavni-podium"> Hlavní podium </Headline2>
          <ul class="text-lg mb-3">
            <li v-for="item of hlavniPodium" class="mb-2">
              <time class="font-semibold" :datetime="item.start">{{
                item.start
              }}</time>
              <span class="font-semibold"> – </span>
              <time class="font-semibold" :datetime="item.end">{{
                item.end
              }}</time>
              <span> – {{ item.event }}</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="kolbiste">
          <Headline2 id="kolbiste">Kolbiště</Headline2>
          <ul class="text-lg mb-3">
            <li v-for="item in kolbiste" class="mb-2">
              <time class="font-semibold" :datetime="item.start">{{
                item.start
              }}</time>
              <span class="font-semibold"> – </span>
              <time class="font-semibold" :datetime="item.end">{{
                item.end
              }}</time>
              <span> – {{ item.event }}</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="kolbiste">
          <Headline2 id="kolbiste">Cimbál u vstupu</Headline2>
          <ul class="text-lg mb-3">
            <li v-for="item in cimbal" class="mb-2">
              <time class="font-semibold" :datetime="item.start">{{
                item.start
              }}</time>
              <span class="font-semibold"> – </span>
              <time class="font-semibold" :datetime="item.end">{{
                item.end
              }}</time>
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

        <section aria-labelledby="regionfest">
          <Headline2 id="regionfest">
            Vstup zdarma do Národního zemědělského muzea
          </Headline2>
          <p class="text-lg mb-3">
            Vstup do Národního technického muzea v době konání Dožínek bude 80
            Kč pro dospělého a 40 Kč pro děti ve věku 6-15 let.
          </p>
        </section>
      </div>
      <NuxtImg class="hidden md:block w-16" src="/graphic/stripe.o.svg" />
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Program",
  ogTitle: "Program",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

import { ref } from "vue";

const atrakceProDeti = ref([
  "Výroba dožínkových věnců",
  "Workshopy",
  "Ražení odznáčků",
  "Dětské kvízy",
  "Malování na obličej",
  "Bludiště",
  "Projížďky na koních",
  "Skákací kombajn",
  "Dětská stanoviště",
  "Práce se dřevem",
  "Fotokoutek–tematické rekvizity",
]);

const regionfest = ref([
  "Farmářský trh potravin oceněných značkou Regionální potravina",
  "Prezentace vítězů soutěže Regionální potravina",
  "Dětská stanoviště",
  "Zdobení perníčků",
  "Sázení semínek",
]);

// Define events for "Hlavní podium"
const hlavniPodium = ref([
  { start: "10:10", end: "10:40", event: "Folklorní soubor Hadářek" },
  { start: "10:50", end: "11:50", event: "Kapela Pospolu u stolu" },
  {
    start: "12:00",
    end: "13:00",
    event:
      "Předávání dožínkových věnců a ocenění Středočeská regionální potravina",
  },
  { start: "13:30", end: "15:30", event: "Cimbálová muzika Grajcar" },
  { start: "16:15", end: "17:45", event: "Cimbálová muzika Hudci z Kyjova" },
]);

// Define events for "Kolbiště"
const kolbiste = ref([
  { start: "10:30", end: "11:00", event: "Ukázka nahánění ovcí" },
  { start: "11:30", end: "12:00", event: "Pohádka s koňmi" },
  { start: "13:10", end: "13:30", event: "Historické sklízení obilí" },
  { start: "13:40", end: "14:10", event: "Pohádky s koňmi" },
  { start: "14:20", end: "14:30", event: "Čtverylka starokladrubských koní" },
  { start: "14:30", end: "15:00", event: "Ukázka nahánění ovcí" },
  {
    start: "15:00",
    end: "15:10",
    event: "Ukázka jednospřeží se starokladrubskými koňmi",
  },
  {
    start: "15:30",
    end: "15:40",
    event: "Ukázka jízdy v dámském sedle se starokladrubskými koňmi",
  },
  { start: "16:00", end: "16:30", event: "Ukázka nahánění ovcí" },
  { start: "17:00", end: "17:30", event: "Pohádka s koňmi" },
]);

const cimbal = ref([{ start: "10:00", end: "18:00", event: "Studánka Praha" }]);
</script>

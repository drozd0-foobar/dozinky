<template>
  <div class="grid grid-cols-[1fr_auto] gap-4">
    <div class="font-semibold">
      <Headline1> Přihláška </Headline1>
      <p class="text-secondary text-xl mb-4">
        Zde se můžete přihlásit jako prodejce na akci Dožínské slavnosti 2025
      </p>
      <ul class="list-disc text-lg pl-4 mb-8">
        <li>
          Bližší podmínky účasti budou zájemcům sděleny mailem na základě
          přihlášení.
        </li>
        <li>
          Konečný výběr prodejců účastnících se farmářského trhu je na
          organizátorovi.
        </li>
      </ul>
      <NuxtLink
        class="bg-secondary py-3 px-4 rounded text-surface font-extrabold hover:bg-primary transition"
        >Vyplnit formulář</NuxtLink
      >
    </div>
    <NuxtImg class="hidden md:block w-16" src="/stripe-half.svg" />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Přihláška",
  ogTitle: "Přihláška",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Head>
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Dožínky" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta
      name="description"
      content="Dožínky na Letné – tradice největšího farmářského trhu – se vracejí v sedmém ročníku. Pod novým názvem a na novém místě v Holešovicích vás čeká stejná bohatá atmosféra a očekávaná návštěvnost jako dříve."
    />
    <meta name="author" content="Jakub Drozd" />
    <meta name="copyright" content="Zařízení služeb MZe" />
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Dožínkové slavnosti 2025" />
    <meta property="og:url" content="https://www.dozinkove-slavnosti.cz" />
    <meta
      property="og:image"
      content="https://www.dozinkove-slavnosti.cz/twitter_card.png"
    />
    <meta
      property="og:description"
      content="Dožínky na Letné – tradice největšího farmářského trhu – se vracejí v sedmém ročníku. Pod novým názvem a na novém místě v Holešovicích vás čeká stejná bohatá atmosféra a očekávaná návštěvnost jako dříve."
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Dožínkové slavnosti 2025" />
    <meta name="twitter:site" content="https://www.dozinkove-slavnosti.cz" />
    <meta
      name="twitter:description"
      content="Dožínky na Letné – tradice největšího farmářského trhu – se vracejí v sedmém ročníku. Pod novým názvem a na novém místě v Holešovicích vás čeká spousta zábavy."
    />
    <meta
      name="twitter:image"
      content="https://www.dozinkove-slavnosti.cz/card-square.png"
    />
    <meta name="twitter:image:alt" content="Grafika - Dožínkové slavnosti" />
  </Head>
  <NuxtLayout>
    <template #default="defaultProps">
      <NuxtPage v-bind="defaultProps" />
    </template>
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Dožínkové slavnosti 2025`
      : "Dožínkové slavnosti 2025";
  },
});
</script>
<style lang="postcss">
:root {
  @apply text-primary;
}
</style>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Dožínkové slavnosti`
      : "Dožínkové slavnosti";
  },
});
</script>
<style lang="postcss">
:root {
  @apply text-primary;
}
</style>

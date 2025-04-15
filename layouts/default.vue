<template>
  <div class="relative grid grid-flow-row w-screen pt-11">
    <header
      class="fixed z-50 inset-x-0 top-0 grid grid-cols-[1fr_auto] items-center border-b border-primary leading-none px-3 py-1 bg-surface h-11 lg:h-14"
    >
      <h1
        class="uppercase w-fit text-2xl font-bold text-primary hover:text-secondary"
      >
        <NuxtLink to="/">Dožínkové slavnosti 2025</NuxtLink>
      </h1>
      <button
        @click="menu.isOpenned = !menu.isOpenned"
        id="menubutton"
        aria-label="Otevři menu"
        aria-haspopup="true"
        aria-controls="menu"
        class="lg:hidden"
      >
        <Icon
          :name="menu.isOpenned ? 'charm:cross' : 'charm:menu-hamburger'"
          class="size-8 p-2"
          :class="[menu.isOpenned ? 'text-secondary' : 'text-primary']"
        />
      </button>
      <nav class="contents">
        <ul
          class="fixed lg:static inset-x-0 bottom-0 top-11 z-50 bg-surface transition px-8 lg:px-0 gap-1 lg:gap-3 uppercase h-dvh lg:h-auto flex flex-col lg:flex-row items-end justify-center"
          :class="[
            menu.isOpenned
              ? 'opacity-100 visible'
              : 'opacity-0 lg:opacity-100 translate-x-full lg:translate-x-0',
          ]"
          id="menu"
          role="menu"
          aria-labelledby="menubutton"
          :inert="menu.isOpenned == false && $viewport.isLessThan('lg')"
        >
          <li class="lg:hidden">
            <NuxtLink
              to="/"
              class="text-secondary lg:text-primary lg:hover:text-secondary hover:text-primary font-bold flex justify-end items-center gap-2 text-3xl lg:text-xl p-3 lg:p-1"
              prefetch-on="interaction"
              active-class="!text-primary lg:!text-secondary"
            >
              Úvodní stránka
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/program"
              class="text-secondary lg:text-primary lg:hover:text-secondary hover:text-primary font-bold flex justify-end items-center gap-2 text-3xl lg:text-xl p-3 lg:p-1"
              prefetch-on="interaction"
              active-class="!text-primary lg:!text-secondary"
            >
              Program
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/prihlaska"
              class="text-secondary lg:text-primary lg:hover:text-secondary hover:text-primary font-bold flex justify-end items-center gap-2 text-3xl lg:text-xl p-3 lg:p-1"
              prefetch-on="interaction"
              active-class="!text-primary lg:!text-secondary"
            >
              Přihláška
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="https://www.facebook.com/dozinkynaletne"
              target="blank"
              class="text-secondary lg:text-primary lg:hover:text-secondary hover:text-primary font-bold flex justify-end items-center gap-2 text-3xl lg:text-xl p-3 lg:p-1"
              prefetch-on="interaction"
              active-class="!text-primary lg:!text-secondary"
            >
              Fotogalerie
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#kontakt"
              class="text-secondary lg:text-primary lg:hover:text-secondary hover:text-primary font-bold flex justify-end items-center gap-2 text-3xl lg:text-xl p-3 lg:p-1"
              prefetch-on="interaction"
              active-class="!text-primary lg:!text-secondary"
              @click="menu.isOpenned = false"
            >
              Kontakt
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="min-h-[calc(100vh-2.75rem)] overflow-x-hidden bg-surface">
      <slot class="p-4 pt-6 pb-12 lg:pt-12 mx-auto lg:w-[1024px]" />
    </div>
    <footer class="bg-primary text-surface font-semibold p-8">
      <ul class="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-center">
        <li>
          <div class="font-bold text-2xl mb-3">Projekt podporuje</div>
          <NuxtLink href="https://www.mze.gov.cz" target="_blank">
            <div class="font-bold text-base mb-3">www.mze.gov.cz</div>
            <NuxtImg
              class="max-w-[300px]"
              :width="390"
              src="/mz_logo.png"
              alt="Logo Ministerstava zemědělství"
            />
          </NuxtLink>
        </li>
        <li>
          <div class="font-bold text-2xl mb-3">Realizace projektu</div>
          <NuxtLink href="https://www.zsmze.cz" target="_blank">
            <div class="font-bold text-base mb-3">www.zsmze.cz</div>
            <NuxtImg
              class="max-w-[300px]"
              src="/zsmz_logo.png"
              alt="Logo Zařízení služeb ministerstava zemědělství"
              :width="390"
            />
          </NuxtLink>
        </li>

        <li id="kontakt">
          <div class="font-bold text-2xl mb-3">Kontakt</div>
          <address>
            <div class="font-bold text-lg">Vojtěch Horák</div>
            <div class="font-bold text-lg">
              <a
                href="tel:+420773758175"
                aria-label="+ 4 2 0. 7 7 3. 7 5 8. 1 7 5."
                >+420 773 758 175</a
              >
            </div>
            <div class="font-bold text-lg">
              <a href="mailto:vojtech.horak@zsmze.cz">vojtech.horak@zsmze.cz</a>
            </div>
          </address>
        </li>

        <li>
          <div class="font-bold text-2xl mb-3">Další projekty</div>
          <ul>
            <li class="text-lg">
              <NuxtLink href="https://poznejsvehofarmare.cz/" target="_blank">
                Poznej svého farmáře
              </NuxtLink>
            </li>

            <li class="text-lg">
              <NuxtLink href="https://www.mesicbiopotravin.cz/" target="_blank">
                Měsíc bio potravin
              </NuxtLink>
            </li>
            <li class="text-lg">
              <NuxtLink href="https://www.medovesnidane.cz/" target="_blank">
                Medové snídaně
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script setup lang="ts">
const menu = useMenu();
</script>

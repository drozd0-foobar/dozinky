import { defineStore } from "pinia";

export const useMenu = defineStore("menu", () => {
  const isOpenned = ref<boolean>(false);

  return { isOpenned };
});

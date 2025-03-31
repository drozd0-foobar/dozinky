export default defineNuxtRouteMiddleware(() => {
  const menu = useMenu();
  menu.isOpenned = false;
});

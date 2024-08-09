export const toggleHtmlScroll = (shouldDisableScroll: boolean) => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("no-scroll", shouldDisableScroll);
  }
};

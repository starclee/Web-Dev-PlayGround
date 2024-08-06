function scrollToSection(className) {
  document.querySelector("." + className).scrollIntoView({
    behavior: "smooth",
  });
}

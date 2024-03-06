function createPoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");

  new Typewriter("#poem", {
    strings: "I like to write poems",
    autoStart: true,
    delay: 1,
    cursos: "",
  });
}

let poemFormElement = document.querySelector("#poem-creator-form");
poemFormElement.addEventListener("submit", createPoem);

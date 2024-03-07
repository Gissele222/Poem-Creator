function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function displayMyPoem() {
  let poem = `
    Hi, my name is Ash<br />
    I like writing poems on the fly,<br />
    Type the first word that comes to mind<br />
    Come on don't be shy<br />
    `;

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function createPoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "1c608c83aofd04et93b4143f29525423";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write. Your mission is to generate a 5 line poem in basic HTML and separate each line. Do not include a title to the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let submitButton = document.querySelector("#submit-button");
  submitButton.setAttribute("disabled", "disabled");

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-creator-form");
poemFormElement.addEventListener("submit", createPoem);
displayMyPoem();

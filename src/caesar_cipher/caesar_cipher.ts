const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const inputText = document.querySelector("#inputText") as HTMLInputElement;
const inputNum = document.querySelector("#inputNum") as HTMLInputElement;
const encoderBtn = document.querySelector("#encoderBtn") as HTMLButtonElement;
const decoderBtn = document.querySelector("#decoderBtn") as HTMLButtonElement;
const outputText = document.querySelector("#outputText") as HTMLElement;

encoderBtn.addEventListener("click", () => {
  outputText.textContent = "";

  const textValue: string = inputText.value
    .toLowerCase()
    .trim()
    .replaceAll(" ", "");
  const numValue: number = Number(inputNum.value);

  if (textValue && numValue) {
    const textArr: string[] = textValue.split("");

    textArr.forEach((letter) => {
      const indexNum = alphabet.indexOf(letter);
      const encodedLetter = alphabet[(indexNum + numValue) % 26];
      outputText.textContent += `${encodedLetter}`;
    });
  }
});

decoderBtn.addEventListener("click", () => {
  outputText.textContent = "";

  const textValue: string = inputText.value
    .toLowerCase()
    .trim()
    .replaceAll(" ", "");

  const numValue: number = Number(inputNum.value);

  if (textValue && numValue) {
    const textArr: string[] = textValue.split("");

    textArr.forEach((letter) => {
      const indexNum = alphabet.indexOf(letter);
      const encodedLetter = alphabet[(indexNum - numValue + 26) % 26];
      outputText.textContent += `${encodedLetter}`;
    });
  }
});

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const inputText = document.querySelector("#inputText") as HTMLInputElement;
const inputNum = document.querySelector("#inputNum") as HTMLInputElement;
const encoderBtn = document.querySelector("#encoderBtn") as HTMLButtonElement;
const decoderBtn = document.querySelector("#decoderBtn") as HTMLButtonElement;
const outputText = document.querySelector("#outputText") as HTMLElement;

const changeText = (minus: number) => {
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
      const encodedLetter = alphabet[(indexNum + minus * numValue + 26) % 26];
      outputText.textContent += `${encodedLetter}`;
    });
  }
};

encoderBtn.addEventListener("click", () => {
  changeText(1);
});

decoderBtn.addEventListener("click", () => {
  changeText(-1);
});

function rollDice () {
  const numOfDice = Number(document.getElementById("user-input").value);
  const diceresult = document.getElementById("diceresult");
  const diceimages = document.getElementById("imagesresult");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="images/${value}.png" alt="Dice ${value}" />`);
  }

  diceresult.innerHTML = `The dice rolled are: ${values.join(", ")}`;
  diceimages.innerHTML = images.join(" ")
}

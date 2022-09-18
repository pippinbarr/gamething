let promo = new Audio(`assets/audio/now-thats-a-gamething.mp3`);

document.getElementById(`footer`)
  .addEventListener(`click`, () => {
    promo.play();
  });
let promo = new Audio(`/assets/audio/now-thats-a-gamething.mp3`);

document.getElementById(`footer`)
  .addEventListener(`click`, () => {
    promo.play();
  });

let lostSeasonsSuper = document.getElementById(`lost-seasons-tooltip`);
lostSeasonsSuper.addEventListener(`click`, showTip);
lostSeasonsSuper.addEventListener(`touchstart`, showTip);
lostSeasonsSuper.addEventListener(`mouseover`, showTip);

function showTip() {
  document.getElementById(`lost-seasons`).style.display = `block`;
}
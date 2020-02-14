import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: [ "Hey you !!!!!","BestCocktails, Brings Bartender skills to, reative people!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

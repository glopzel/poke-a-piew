const spanWords = document.querySelector('span');
const pokemonName = document.querySelector('h3');
const pokeImage = document.querySelector('#pokeImg1');

document.querySelector('input').addEventListener('change', cleanItUp);

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  spanWords.innerText = '';
  const poke1 = document.querySelector('#poke1').value.toLowerCase()

  const pokeFixed = poke1.split('').filter(item => item !== ' ').join(''); 
  
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeFixed}`;


  fetch(url)
    .then(res => res.json())
    .then(data => {

    let name = (data.name).toUpperCase();
    let typeOfPokemon = data.types[0].type.name;
    let abilityPokemon = data.abilities[0].ability.name;

    pokemonName.innerText = name;
    pokeImage.src = data.sprites.front_shiny;

    spanWords.innerText = `This pokemon's type is ${typeOfPokemon} and has the ${abilityPokemon} ability`;

    spanWords.classList.add('textAnimation');
  })
  
  .catch(error =>  console.log(`error ${err}`));
};

function cleanItUp() {
  pokemonName.innerText = '';
  spanWords.innerText = '';
  pokeImage.src = '';
  spanWords.classList.remove('textAnimation');
}
const pokeDescription = document.querySelector('span');
const pokemonName = document.querySelector('h3');
const pokeImage = document.querySelector('#pokeImg1');

document.querySelector('input').addEventListener('change', cleanItUp);

document.querySelector('button').addEventListener('click', fetchIt);

async function fetchIt() {
  pokeDescription.innerText = '';

  const poke1 = document.querySelector('#poke1').value.toLowerCase()

  const pokeFixed = poke1.split('').filter(item => item !== ' ').join('');

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeFixed}`);
  const data = await res.json();

  let name = (data.name).toUpperCase();
  let typeOfPokemon = data.types[0].type.name;
  let abilityPokemon = data.abilities[0].ability.name;

  pokemonName.innerText = name;
  pokeImage.src = data.sprites.front_shiny;

  pokeDescription.innerText = `This pokemon's type is ${typeOfPokemon} and has the ${abilityPokemon} ability`;
    
  pokeDescription.classList.add('textAnimation');

}

function cleanItUp() {
  pokemonName.innerText = '';
  pokeDescription.innerText = '';
  pokeImage.src = '';
  pokeDescription.classList.remove('textAnimation');
}
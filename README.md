# poke-a-piew

You put the name of the pokemon and you will get an adorable image, the name and some text, that's it, that's all. This was possible using the pokemon api (https://pokeapi.co/) . 

## Site
The live site can be found here: https://glopzel.github.io/poke-a-piew/ 

## Preview
![pokepoke](https://user-images.githubusercontent.com/74939915/172995480-e8ead696-c175-43b7-9ebe-8b485c5972fd.gif)

## How It's Made

This was made with HTML, CSS and JS. The text effect was used with an animation that takes the container of the text starting from 0% and increases the width till it gets to 100%. Since all variations of pokemon might result in a different container size for the text, the number of steps was set fixed to 22. The data from the API was obtained using fetch, passing the url with the name of the pokemon after the endpoint `/pokemon/{pokeName}` .
- pokemon endpoint: `https://pokeapi.co/api/v2/pokemon/{id or name}/` 
- documentation: https://pokeapi.co/docs/v2



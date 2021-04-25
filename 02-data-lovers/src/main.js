function findPçßokemon(){
  import data from './data/pokemon/pokemon.js';
  console.log(data);
  let input = document.getElementById("search").value;
  console.log(input);
  filterr = data.pokemon.filter((pokemon) => pokemon.name === input);
  console.log(filterr[0].img);
  let body = document.getElementById("searchpg");
  body.innerHTML = `<input class="Search1" type="text" id="search" placeholder="Type a Pokemon's name!">
  <input type="image" class="search3" src="seaeeaea.png" alt="Submit" width="50" height="50" onClick="findPokemon()">
  <figure>
      <img height = "200px" src=${filterr[0].img}>
      <figcaption class="spcap"> ${filterr[0].size.weight} </figcaption> 
      <figcaption > ${filterr[0].size.height} </figcaption> 

  </figure>


 <h1 class="pokename">${filterr[0].name}</h1>
 <h2 class="pokedes">${filterr[0].num}</h2> 
 <h2 class="abtt" class="pokedes">${filterr[0].about}</h2> 
 <h2 class="pokedes">Type: ${filterr[0].type} </h2> 
 <h2 class="pokedes">Strength: ${filterr[0].resistant}</h2> 
 <h2 class="pokedes">Weakness: ${filterr[0].weaknesses}</h2> 
 <h2 class="pokedes">Generation: ${filterr[0].generation.num}</h2>
 <h2 class="pokedes">Location: ${filterr[0].generation.name} region</h2> 
 <h2 class="pokedes">Spawn Chance: ${filterr[0].spawn_chance}%</h2> 
 <h2 class="pokedes">Rarity: ${filterr[0].pokemon_rarity}</h2> 
 <h2 class="pokedes">Base Attack: ${filterr[0].stats.base_attack}</h2> 
 <h2 class="pokedes">Base Defence: ${filterr[0].stats.base_defense}</h2> 
 <h2 class="pokedes">Base Stamina: ${filterr[0].stats.base_stamina}</h2> 
 <h2 class="pokedes">Max CP: ${filterr[0].stats.max_cp}</h2> 
 <h2 class="pokedes">Max HP: ${filterr[0].stats.max_hp}</h2> 

 `;
}
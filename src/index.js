const API = 'https://api.opendota.com/api/proPlayers/'
const API1 = ' https://api.opendota.com/api/players/'
const APIHero = 'https://api.opendota.com/api/heroes'

document.getElementById("filter").addEventListener("click", function() {
    getInfCharacter(API,API1)
    getCharacters(API)
    getHeros(APIHero)
  }, false);


const API = 'https://api.opendota.com/api/proPlayers/'
const API1 = ' https://api.opendota.com/api/players/'
const APIHero = 'https://api.opendota.com/api/heroes'

document.getElementById("filter").addEventListener("click", function() {
    var idUser = document.getElementById("IdUser").value;
    getInfCharacter(API,API1,idUser)
    getCharacters(API)
    getHeros(APIHero)
}, false);


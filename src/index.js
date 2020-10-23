const API = 'https://api.opendota.com/api/proPlayers/'
const API1 = ' https://api.opendota.com/api/players/'
const APIHero = 'https://api.opendota.com/api/heroes'
const APITeam = 'https://api.opendota.com/api/teams/'

document.getElementById("filter").addEventListener("click", function() {
    var idUser = document.getElementById("IdUser").value;
    getInfCharacter(API,API1,idUser)
    getCharacters(API,APITeam, idUser)
    getHeros(APIHero)
}, false);


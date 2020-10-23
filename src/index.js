const API = 'https://api.opendota.com/api/proPlayers/'
const API1 = ' https://api.opendota.com/api/players/'
const APIHero = 'https://api.opendota.com/api/heroes'
const APITeam = 'https://api.opendota.com/api/teams/'

document.getElementById("filter").addEventListener("click", function() {
    //Adquiring the id player
    var idUser = document.getElementById("IdUser").value;
    //Searching inf for the user main, avatar, name, Stadistics
    getInfCharacter(API,API1,idUser)
    //Searching player's team id, and its players
    getCharacters(API,APITeam, idUser)
    //Searching people for notifications in this case Heroes
    getHeros(APIHero)
}, false);


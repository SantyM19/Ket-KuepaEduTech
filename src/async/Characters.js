const fetchData = require('../utils/fetchData')
const API = 'https://api.opendota.com/api/proPlayers/'
const API1 = ' https://api.opendota.com/api/players/'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getCharacters = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        for(i=0;i<5;i++){
            x=getRandomInt(0, 2494);
        
            //const character = await fetchData(`${API1}${data[x].account_id}`)

            console.log(data[x].account_id)
            //console.log(character)
            /*console.log("name")
            console.log(character.profile.name)
            console.log("avatar")
            console.log(character.profile.avatarfull)
            console.log("estimado")
            console.log(character.mmr_estimate.estimate)
            console.log("nivel de rango")
            console.log(character.rank_tier)
            console.log("rango de clasificacion")
            console.log(character.leaderboard_rank)
            console.log("Rango competitivo")
            console.log(character.solo_competitive_rank)
            */
        }
    }
    catch(error){
        console.error(error)
    }
}

getCharacters(API)

const fetchData = require('../utils/fetchData')
const API = 'https://api.opendota.com/api/proPlayers/'
const API1 = ' https://api.opendota.com/api/players/'

const getInfCharacter = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        const character = await fetchData(`${API1}${data[0].account_id}`)
        
        console.log(data.length)
        console.log(data[0].account_id)
        //console.log(character)
        console.log("name")
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

        // rutas de las peticiones en orden
        console.log(url_api);
        console.log(API1 + data[0].account_id); 

    }
    catch(error){
        console.error(error)
    }
}

getInfCharacter(API)
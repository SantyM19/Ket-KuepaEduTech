const getInfCharacter = async (url_api, url_api2) => {
    this.dataAPI = { loading: true, error: null }
    try{
        const response = await fetch(url_api)
        const data = await response.json()
        const respons = await fetch(`${url_api2}${data[0].account_id}`)
        const character = await respons.json()

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

    }
    catch(error){
        this.dataAPI = { loading: false, error: error }
    }
}


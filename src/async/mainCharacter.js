const getInfCharacter = async (url_api, url_api2, id) => {
    this.dataAPI = { loading: true, error: null }
    try{
        const response = await fetch(url_api)
        const data = await response.json()
        const respons = await fetch(`${url_api2}${data[id].account_id}`)
        const character = await respons.json()

        document.getElementById("UserName").innerHTML = character.profile.name;
        document.getElementById("avatar").src = character.profile.avatarfull;
        document.getElementById("rank").innerHTML = character.rank_tier+'%';
        document.getElementById("ranked").innerHTML = Math.floor(character.mmr_estimate.estimate/100);
        document.getElementById("rankedM").innerHTML = character.leaderboard_rank;
        document.getElementById("rankedCalls").innerHTML = Math.floor(character.solo_competitive_rank/100);

        document.getElementById("percent").innerHTML = Math.floor(character.mmr_estimate.estimate/100);
        document.getElementById("leadP").style.width = Math.floor(character.mmr_estimate.estimate/100)+'%';
        document.getElementById("percentM").innerHTML = Math.floor(character.solo_competitive_rank/100);
        document.getElementById("leadM").style.width = Math.floor(character.solo_competitive_rank/100)+'%';
    }
    catch(error){
        this.dataAPI = { loading: false, error: error }
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


getCharacters = async (url_api,url_api_team,idUser) => {
    this.dataAPI = { loading: true, error: null }

    try{
        const response = await fetch(url_api)
        const data = await response.json()

        const respo = await fetch(url_api_team+ data[idUser].team_id)
        const Team = await respo.json()

        const respons = await fetch(url_api_team+ data[idUser].team_id +'/players')
        const characterTeam = await respons.json()
        for(i=0;i<5;i++){
            document.getElementById("name"+i).innerHTML = characterTeam[i].name+'<br>'+ Team.name;
        }
    }
    catch(error){
        this.dataAPI = { loading: false, error: error }
    }
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


getCharacters = async (url_api,url_api_team,idUser) => {
    this.dataAPI = { loading: true, error: null }

    try{
        //This API was consumed to Search player and his team_id
        const response = await fetch(url_api)
        const data = await response.json()

        //This API was consumed to Search infomation about player's team
        const respo = await fetch(url_api_team+ data[idUser].team_id)
        const Team = await respo.json()

        //This API was consumed for information about the team's players 
        const respons = await fetch(url_api_team+ data[idUser].team_id +'/players')
        const characterTeam = await respons.json()

        //Updating five items for "Agenda connections for today"
        for(i=0;i<5;i++){
            document.getElementById("name"+i).innerHTML = characterTeam[i].name+'<br>'+ Team.name;
        }
    }
    catch(error){
        this.dataAPI = { loading: false, error: error }
    }
}



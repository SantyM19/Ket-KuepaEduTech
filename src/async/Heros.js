function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getHeros = async (url_api) => {
    this.dataAPI = { loading: true, error: null }

    try {
        //This API was consumed to Search People for notifications from Heroes
        const response = await fetch(url_api)
        const data = await response.json()

        //Updating 6 Notifiaction's inf
        for(i=0;i<6;i++){
            //This random is for 119 heroes that this API has  
            x=getRandomInt(0, 119);

            document.getElementById(`p${i}`).innerHTML = 
            data[x].localized_name+"<br>"+data[x].attack_type;
        }
    } catch (error) {
        this.dataAPI = { loading: false, error: error }
    }
}

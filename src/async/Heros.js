function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getHeros = async (url_api) => {
    this.dataAPI = { loading: true, error: null }

    try {
        const response = await fetch(url_api)
        const data = await response.json()

        for(i=0;i<6;i++){
            x=getRandomInt(0, 119);

            document.getElementById(`p${i}`).innerHTML = 
            data[x].localized_name+"<br>"+data[x].attack_type;
        }
    } catch (error) {
        this.dataAPI = { loading: false, error: error }
    }
}

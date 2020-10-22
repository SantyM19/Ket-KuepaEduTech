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

            console.log("id "+data[x].id)
           // document.getElementById("demo").innerHTML = "Hello World!";
            console.log("name "+data[x].localized_name)
            console.log("attack"+data[x].attack_type)
        }
    } catch (error) {
        this.dataAPI = { loading: false, error: error }
    }
}

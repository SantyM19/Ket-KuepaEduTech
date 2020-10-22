const fetchData = require('../utils/fetchData')
const API = 'https://api.opendota.com/api/heroes'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const getHeros = async (url_api) => {
    try{
        const data = await fetchData(url_api)
        
        for(i=0;i<6;i++){
            x=getRandomInt(0, 119);

            console.log("id "+data[x].id)
            console.log("name "+data[x].localized_name)
            console.log("attack"+data[x].attack_type)
        
        }

    }
    catch(error){
        console.error(error)
    }
}

getHeros(API)
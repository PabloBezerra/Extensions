const axios = require('axios');

export class Server{
    constructor(){
        this.url = '../data.json'
    }

    async getData(){
        axios
            .get(this.url)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data Man:', error);
            });
    }
}
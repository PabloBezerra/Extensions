const axios = require('axios');

export class Server{
    constructor(){
        this.url = 'data.json' // URL to fetch data from
        this.mainData = []; // Array to store the main data
    }

    // Retrieves data from localStorage or fetches it from the server if not available
    getData(){
        if(localStorage.getItem('data') === null){
            this.request();
        }
        this.recover();
        return this.mainData;
    }

    // Fetches data from the server and stores it in localStorage
    request(){
        axios
            .get(this.url)
            .then((response) => {
                localStorage.setItem('data',JSON.stringify(response.data));
            })
            .catch((error) => {
                console.error('Error fetching data Man:', error);
            });
    }

    // Recovers data from localStorage and parses it into the mainData array
    recover(){
        if(localStorage.getItem('data') !== null){
            this.mainData = JSON.parse(localStorage.getItem('data'));
        }else{
            console.log('No data found');
        }
    }

    // Filters the mainData array based on the specified criteria (dom) and key
    filter(dom, key = ''){
        const filtros = {
            all: () => this.mainData,
            active: () => this.mainData.filter(e => e.isActive),
            inactive: () => this.mainData.filter(e => !e.isActive),
            search: ()=> this.mainData.filter(e => e.name.toLowerCase().includes(key))        
        };
        const array = filtros[dom] ? filtros[dom]() : [];
        return array;
    }

    // Removes an item from the mainData array based on its id and updates localStorage
    rename(id){
        this.mainData = this.mainData.filter(e => e.name.replace(" ", "-") !== id);
        localStorage.setItem('data', JSON.stringify(this.mainData));
    }

    // Toggles the active state of an item in the mainData array based on its id and updates localStorage
    actived(id){
        this.mainData.forEach(e => {
            if(e.name.replace(" ", "-") === id){
                e.isActive = !e.isActive;
            }
        });
        localStorage.setItem('data', JSON.stringify(this.mainData));
        this.recover();
    }
}
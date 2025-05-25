const axios = require('axios');

export class Server{
    constructor(){
        this.url = 'data.json'
        this.mainData = [];
    }

    getData(){
        if(localStorage.getItem('data') === null){
            this.request();
        }
        this.recover();
        return this.mainData;
    }

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

    recover(){
        if(localStorage.getItem('data') !== null){
            this.mainData = JSON.parse(localStorage.getItem('data'));
        }else{
            console.log('No data found');
        }
    }

    filter(dom, key = ''){
        const filtros = {
            all: () => this.mainData,
            active: () => this.mainData.filter(e => e.isActive),
            inactive: () => this.mainData.filter(e => !e.isActive),
            search: ()=> this.mainData.filter(e => e.name.toLowerCase().includes(key))        
        };
        const array = filtros[dom] ? filtros[dom]() : [];
        console.log(array); 
        return array;
    }

    remove(id){
        this.mainData = this.mainData.filter(e => e.name.replace(" ", "-") !== id);
        localStorage.setItem('data', JSON.stringify(this.mainData));
    }

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
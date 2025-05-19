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

    filter(dom){
        let array = [];
        if(dom === 'all'){
            array = this.mainData;
        }
        if(dom === 'active'){
            array = this.mainData.filter(e => e.isActive);
        }
        if(dom === 'inactive'){
            array = this.mainData.filter(e => !e.isActive);
        }
        return array
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
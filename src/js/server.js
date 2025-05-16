const axios = require('axios');

export class Server{
    constructor(){
        this.url = '../data.json'
        this.data = [];
    }

    getData(){
        if(localStorage.getItem('data') === null){
            this.request();
        }
        this.recover();
        return this.data;
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
            this.data = JSON.parse(localStorage.getItem('data'));
        }else{
            console.log('No data found');
        }
    }

    filter(dom){
        const f = []
        if(dom === 'all'){
            f.push(this.data);
        }
        if(dom === 'active'){
            f.push(this.data.filter(e => e.isActive));
        }
        if(dom === 'inactive'){
            f.push(this.data.filter(e => !e.isActive));
        }
        return f
    }
}
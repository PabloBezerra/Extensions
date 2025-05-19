export class View{
    constructor(list, nav, main){
        this.list = list;
        this.nav = nav;
        this.main = main;
    }
    
    print(data){
        data.forEach(e => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const divInfo = document.createElement('div');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const button = document.createElement('button');
            const input = document.createElement('input');

            img.src = e.logo;
            h3.innerText = e.name;
            p.innerText = e.description;
            p.id = 'description';
            button.innerText = 'Remove';
            input.type = 'checkbox';
            input.id = 'checkbox';
            input.checked = e.isActive;

            divInfo.id = 'info';
            divInfo.appendChild(h3);
            divInfo.appendChild(p);

            div.classList.add('extension-card');
            div.id = e.name.replace(" ", "-")
            div.appendChild(img);
            div.appendChild(divInfo);
            div.appendChild(button);
            div.appendChild(input);

            this.list.appendChild(div);
        });
    }

    clear(){
        this.list.innerText = '';
    }

    activeNav(id){
        this.nav.forEach(e => {
            if(e.id === id){
                e.classList.add('active');
            }else{
                e.classList.remove('active');
            }
        });
    }

    switchTheme(){
        if(this.main.classList.contains('dark-theme')){
            this.main.classList.remove('dark-theme');
            this.main.classList.add('light-theme');
            return;
        }
        if(this.main.classList.contains('light-theme')){
            this.main.classList.remove('light-theme');
            this.main.classList.add('dark-theme');
            return;
        }
    }   
}
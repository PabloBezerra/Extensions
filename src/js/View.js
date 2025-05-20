export class View{
    constructor(list, nav, main){
        this.list = list;
        this.nav = nav;
        this.main = main;
    }
    
    print(data){
        data.forEach(e => {
            const divInfo = document.createElement('div');
            const divDescrition = document.createElement('div');
            const divAction = document.createElement('div');
            const divExtensionCard = document.createElement('div');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const button = document.createElement('button');
            const input = document.createElement('input');

            img.src = e.logo;
            h3.innerText = e.name;
            p.innerText = e.description;
            button.innerText = 'Remove';
            input.type = 'checkbox';
            input.id = 'checkbox';
            input.checked = e.isActive;

            divInfo.classList.add('info');
            divDescrition.classList.add('description');
            divAction.classList.add('actions');
            divExtensionCard.classList.add('extension-card');
            divExtensionCard.id = e.name.replace(" ", "-")

            divDescrition.appendChild(h3);
            divDescrition.appendChild(p);
            divInfo.appendChild(img);
            divInfo.appendChild(divDescrition);
            divAction.appendChild(button);
            divAction.appendChild(input);

            divExtensionCard.appendChild(divInfo);
            divExtensionCard.appendChild(divAction);

            this.list.appendChild(divExtensionCard);
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
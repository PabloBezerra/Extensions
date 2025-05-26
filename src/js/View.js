export class View{
    constructor(list, nav){
        this.list = list;
        this.nav = nav;
    }
    
    // Receives an array of data and creates a card for each extension, displaying its logo, name, description, and actions.
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

    // Clears the list of extensions by removing all child elements from the list container.
    clear(){
        this.list.innerText = '';
    }

    // Activates a navigation item by adding the 'active' class to it and removing it from all other items.
    activeNav(id){
        this.nav.forEach(e => {
            if(e.id === id){
                e.classList.add('active');
                return
            }
            e.classList.remove('active');
        });
    }   

    // Adds or removes a class from a DOM element based on whether it already has that class.
    addRemoveClass(dom, className){
        if(dom.classList.contains(className)){
            dom.classList.remove(className);
        }else{
            dom.classList.add(className);
        }
    }
}
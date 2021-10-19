class Category {
    static all = []

    static categoryContainer = document.getElementById('cat-cont')

    constructor({name, id, shoes}){
        //debugger
        this.name = name;
        this.id = id;
        this.shoes = shoes;
        this.active = false // this has to do with when I click on my catgory if it's going to be colored or not
        
        this.element = document.createElement('button') // everyone of my categories will be creating a button
        this.element.className = 'cat-button';
        Category.all.push(this)

    }

    render(){
        this.element.innerText = this.name //inner text is the name appear on page
        this.element.id = `category-${this.id}` // give an id of catgory with this.id
        return this.element //always want to return things in all our functions
    }

    addToDom(){ 
        Category.categoryContainer.append(this.render()) //calling static variable categoryContainer (class variable so we're calling it on the class itself)
        // appending this.render which is goingto be the return of this.elemnt once that innerText is added
        this.addListeners() // calling addlisteners
    }

    addListeners(){ // add eventlisteners on to each individual catgory button
        this.element.addEventListener('click', this.setActiveCategory) // going to be a click and then call this.setActiveCatgory
    }

    setActiveCategory = (e) => {
        // put the logic inside of here becasye we already have something est. that deal with the event.
        // event listner for that button set category
        // add the filter method
        // remove the current cards and replace them with my new shoes, after they've been filtered
        // get the category first, set variable outside of if statement and iteration in general
        let filteredCategory //declaring outside scope, just want to be able to have access to it outside, want filtered Category what that category is if all of this is true
        Category.all.forEach(c => { // iterating through all my catgory objects
            // saying we want this.active to be false and c.element and this.element to equal, this.element is the thing we just cliked on, c.element is the category itself, and we need them to equal eachother
            if(c.element === this.element && !this.active) { // if c's element which we know is the button is equal to this.element which is going to be whatver I'm clicking on and it's not curretly active (that color it turns when I click on it, purple), then I'll set the class list as activated
                c.element.classList.add('activated')
                c.active = true // and set the active variable status to true
                // assign filteredCategory to the cetgory that's going through, which is c
                filteredCategory = c
            }else{
                c.element.classList.remove('activated') // if i click on it and it's already active, I take that catgorie's elemnt and remove that 'activated' class
                c.active = false // which means it'll go back tonormal and I will set my active status to false
            } // basically I'm just changing some CSS like a toggle happening here
        // to be able to take whatever the object filteredCategory is and use it to create a filter function to filter the objects that belong to that category
            Shoe.filteredByCategory(filteredCategory) // just need it outside the if/else statement//have access to it becasue we declared it outside this forEach which means we'll have access to it wherever we decalred it
    //the resaon we don't put filteredCategory inside this loop is becasue every time it goes through it would try to redeclare it and it would just keep redeclaring it everytime. And we just want it getting declared when it's inside of the forEach, but it's totlay fine that we're running it right outside the loop, becasue this is going to run once it figures out which one is the right category (by the going through the forEach loop, and and matching our conditionals)
        // noew go to Shoes.js
        })

    }
    addToDropDown(){
        // need to invoke addToDropDown() for it to work (invoke inside of ShoeService class beceause that's where we're apending it to the dropDOwn)
        // add info to dropDOwn
        // everytime we're makig a new object in that get request we wnat to make an option for each of these
        const option = document.createElement('option'); // creating this option
        
        option.value = this.id // adding value to it (the shoe value)
        
        option.innerText = this.name // creating it's innerText with that catgory's name
        
        dropDown.appendChild(option) // then pushing it into the dropDOwn (apending it)
        //debugger
    };
};
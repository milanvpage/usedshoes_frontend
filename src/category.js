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

    addToDropDown(){
        // need to invoke addToDropDown() for it to work (invoke inside of ShoeService class beceause that's where we're apending it to the dropDOwn)
        // add info to dropDOwn
        // everytime we're makig a new object in that get request we wnat to make an option for each of these
        const option = document.createElement('option'); // creating this option
        
        option.value = this.id // adding value to it (the shoe value)
        
        option.innerText = this.name // creating it's innerText with that shoes name
        
        dropDown.appendChild(option) // then pushing it into the dropDOwn (apending it)
        //debugger
    };
};
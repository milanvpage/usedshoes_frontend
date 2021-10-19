class Category {
    static all = []

    static categoryContainer = document.getElementById('cat-cont')

    constructor({name, id, shoes}){
        //debugger
        this.name = name;
        this.id = id;
        this.shoes = shoes;
    
        this.element = document.createElement('button')

        Category.all.push(this)

    }

    render(){
        this.element.innerText = this.name
        this.element.id = `category-${this.id}`
        return this.element
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
class Shoe {
    static all = [];
    static cont = document.getElementById("shoes-cont") // how we're going to grab this info to attatch it to the DOM
    constructor({name, brand, yearfounded, color, size, design, condition, id, comments, image_url}){
        //debugger
        this.name = name;
        this.brand = brand;
        this.yearfounded = yearfounded;
        this.color = color;
        this.size = size;
        this.design = design;
        this.condition = condition;
        this.id = id;
        this.comments = comments;
        this.image_url = image_url
        this.element = document.createElement('li'); // create a list item for each Object we're making
        this.element.dataset['id'] = id; // want to asign identifiers to this list item, assign a dataset id that's equal to my id
        // not essential, just another identifier we can have for our list item
        // dataset id's very similar to id's or classes, you just can't call any HTML on them, so it's like a really good identifier to use, and they're repeatable whihc is helpful too, very similar to how classes are repeatable
        this.element.id = `shoe-${id}`; // set an id that equals soemthing unique (not just a number)
        // every time we're going to have a dataset id and an id, we might not need both of these but rather be safe than sorry depedning on how we're going to be grabbing our information and what we end up doing with it
        // can create elements at the same time as creating these Objects that will automatically be associated with whatever object I'm creating
        this.element.addEventListener('click', this.handleClick)
        // can put the event listener to edit and delete directly on the entire li from start of initializing the objects in the first place, easier way to do it than other ways
        
        Shoe.all.push(this)
        // going to push in the object we're making into this all
         //debugger
    }

    renderShoes(){
        this.element.innerHTML = `
        <div data-id=${this.id}>
        <img src=${this.image_url} height="300" width="200">
        <p>${this.name}</p>
        <br><ul>
        <li>Brand: ${this.brand}</li>
        <li>Color: ${this.color}</li>
        <li>${this.size}</li>
        <li>${this.design}</li>
        <li>${this.condition}</li>
        </ul><br>
        <p>${this.comments}</p>
        </div>
        `
        return this.element
    };

    addToDropDown(){// need to invoke addToDropDown() for it to work (invoke inside of ShoeService class beceause that's where we're apending it to the dropDOwn)
        // add info to dropDOwn
        // everytime we're makig a new object in that get request we wnat to make an option for each of these
        const option = document.createElement('option'); // creating this option
        option.value = this.id // adding value to it (the shoe value)
        option.innerText = this.name // creating it's innerText with that shoes name
        dropDown.apendChild(option) // then pushing it into the dropDOwn (apending it)
    };
};

// attributes :id, :brand, :yearfounded, :color, :size, :design, :condition

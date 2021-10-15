class Shoe {
    static all = [];
    static cont = document.getElementById("shoes-cont") // how we're going to grab this info to attatch it to the DOM
    constructor({name, brand, yearfounded, color, size, design, condition, id, image_url, category_id}){
        //debugger
        this.name = name;
        this.brand = brand;
        this.yearfounded = yearfounded;
        this.color = color;
        this.size = size;
        this.design = design;
        this.condition = condition;
        this.id = id;
      //  this.likes = likes;
        this.category_id = category_id;
        this.image_url = image_url;
        this.element = document.createElement('div'); // create a div item for each Object we're making
        this.element.dataset['id'] = id; // want to asign identifiers to this div item, assign a dataset id that's equal to my id
        this.element.className = 'card';
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

render(){ // rendering what I want to put inside of my li element
    this.element.innerHTML = `
   <div class="center" data-id="${this.id}">
   <img class="image_url" src=${this.image_url}>
   <h2 class="name">${this.name}</h2>
   <p class="brand">Brand: ${this.brand}</p>
   <p class="size">Size: ${this.size}</p>
   <p class="color">Color: ${this.color}</p>
   <p class="yearfounded">Year Created: ${this.yearfounded}</p>
   <p class="condition">Condition: ${this.condition}</p>
   <p class="design">Design: ${this.design}</p>
   </div>
   <!--- <p class="like">${this.likes} Likes</p> -->
   <button class="like-btn" id=${this.id}>Like <3</button>
   <button class="edit" data-id=${this.id}>Edit Shoe</button>
   <button class="delete" data-id=${this.id}> X </button>
   `
   return this.element
};

// ask candice about why the arrow function changes the execution context from an li to the class object itself?
handleClick = (e) => { //pass through the event (the target that we're clicking on)
    if(e.target.innerText === "Edit Shoe"){
    console.log(e.target)
    e.target.innerText = "Save Shoe" // e.target is the button
    this.createEditForm()
// debugger
    }else if(e.target.innerText === "X"){
        console.log(e.target)
        shoeCall.deleteShoe(e) // passing in the event that we're deleteing, want to beable to grab stuff based on that button

    }else if(e.target.innerText === "Save Shoe"){
        console.log("save works")
        e.target.innerText = "Edit Shoe"
        this.updatedShoeInfo()

    // }else if(e.target.innerText === "Like <3"){
    //     console.log("likes Work")
    //     let currentLikes = parseInt(e.target.previousElementSibling.innerText)
         
    //     newLikes = currentLikes + 1
        
     }
}

    createEditForm(){
        const div = this.element.querySelector('.center') // grab this div for whatever one I just clicked
        //iterate through my div to replace evrything with a shoe form
        for(const element of div.children){ // run through this loop and every one of these it's going change it into input fields
            let inputValue = element.innerText;
            let name = element.classList[0] // grab first class name each one of these has
            
            element.innerHTML = `${name} <input type="text" class="edit-${name}" value="${inputValue}"/>`
        
        }
        
        
    }

    // if we weren't inside a JavaScript Class
    // function createEditForm(editBtn){
    //     const div = editBtn.previousElementSibling;
    //     const name = div.children[0].innerText
    //     const brand = div.children[1].innerText // do it for each attribute
    //     div.innerHTML =
    //     `<input type="text">
    //     <input type="text">
    //     `
    //     //do it for each attribute
    // }

    updatedShoeInfo(){
       // debugger
       // this.image_url = this.element.querySelector(".edit-image_url").value;
        this.name = this.element.querySelector(".edit-name").value;
        this.brand = this.element.querySelector(".edit-brand").value;
        this.size = this.element.querySelector(".edit-size").value;
        this.color = this.element.querySelector(".edit-color").value;
        this.yearfounded = this.element.querySelector(".edit-yearfounded").value;
        this.condition = this.element.querySelector(".edit-condition").value;
        this.design = this.element.querySelector(".edit-design").value; // . means it's a class
        // going to want to make a patch request with our new info/values
        shoeCall.updateShoe(this)
        //debugger
    }


    attatchToDom() {
        //debugger
        // first need to grab where we want to put this info
        Shoe.cont.appendChild(this.render()) // cont is a static variable so they when we have to call it is  in one my class
    // instead of calling this.elelement, we need to make sure that it gets rendered first so we can just call our function render insisde appendChild, beacsue renders return value is going to be the element have the innerHTML has been entered into it
    }
};

// attributes :id, :brand, :yearfounded, :color, :size, :design, :condition

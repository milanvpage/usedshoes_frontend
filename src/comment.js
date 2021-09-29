class Comment {
            // help us filter through different sets, some way to iterate through things and like change up the infor you're putting on your page based of this info we're creating here,
            // make it a static variable which is simialr in ruby to a class variable have it equal an empty array
            // good way to keep track of all your comments, similar to how we did it in Ruby
    static all = [];
    static cont = document.getElementById("comments-cont") // how we're going to grab this info to attatch it to the DOM
    constructor({description, id, title, shoe_id, shoe}) {
        this.description = description;
        this.id = id;
        this.title = title;
        this.shoe_id = shoe_id;
        this.shoe = shoe;
        this.element = document.createElement('li'); // create a list item for each Object we're making
        this.element.dataset['id'] = id; // want to asign identifiers to this list item, assign a dataset id that's equal to my id
        // not essential, just another identifier we can have for our list item
        // dataset id's very similar to id's or classes, you just can't call any HTML on them, so it's like a really good identifier to use, and they're repeatable whihc is helpful too, very similar to how classes are repeatable
        this.element.id = `comment-${id}`; // set an id that equals soemthing unique (not just a number)
        // every time we're going to have a dataset id and an id, we might not need both of these but rather be safe than sorry depedning on how we're going to be grabbing our information and what we end up doing with it
        // can create elements at the same time as creating these Objects that will automatically be associated with whatever object I'm creating
        Comment.all.push(this)
        // going to push in the object we're making into this all
         //debugger
    };

    // need to make two separate functions
    // first function going to be about taking it (newly instantiated Comment Object) and filling the information out that i want inside of it
    // second function is going to be me puttin it inside of the DOM
    
    render(){ // rendering what I want to put inside of my li element
         this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="title">${this.title}</h2>
        <p class="description">${this.description}</p>
        </div>
        `
        return this.element
    };

    attatchToDom() {
        //debugger
        // first need to grab we we want to put this info
        Comment.cont.appendChild(this.render()) // cont is a static variable so they we we have to call it is one my class
    // instead of calling this.elelement, we need to make sure that it gets rendered first so we can just call our function render insisde appendChild, beacsue renders return value is going to be the lement have the innerHTML has been entered into it
    }





}
class Comment {
            // help us filter through different sets, some way to iterate through things and like change up the info you're putting on your page based of this info we're creating here,
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
        this.element.addEventListener('click', this.handleClick)
        // can put the event listener to edit and delete directly on the entire li from start of initializing the objects in the first place, easier way to do it than other ways
        
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
        <button class="edit" data-id=${this.id}>Edit Comment</button>
        <button class="delete" data-id=${this.id}> X </button>

        `
        return this.element
    };

// ask candice about why the arrow function changes the execution context from an li to the class object itself?
    handleClick = (e) => { //pass through the event (the target that we're clicking on)
        if(e.target.innerText === "Edit Comment"){
        console.log(e.target)
        e.target.innerText = "Save Comment"
        this.createEditForm()
    // debugger
        }else if(e.target.innerText === "X"){
            console.log(e.target)
            commentCall.deleteComment(e) // passing in the event that we're deleteing, want to beable to grab stuff based on that button

        }else if(e.target.innerText === "Save Comment"){
            console.log("save works")
            e.target.innerText = "Edit Comment"
            this.updatedCommentInfo()

        }
    }

    createEditForm(){ // going to want to grab the div because that's what we want to change
        const div = this.element.querySelector('div'); // grab the div for everyone that was "clicked"
        for(const element of div.children){ // run through this loop, and for everyone of these going to change those fields into inout fields filled out
            let inputValue = element.innerText
            let name = element.classList[0]
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}"/>`
        }
        //debugger
    }

    updatedCommentInfo(){
        this.title = this.element.querySelector(".edit-title").value;
        this.description = this.element.querySelector(".edit-description").value; // . means it's a class
        // going to want to make a patch request with our new info/values
        commentCall.updateComment(this)
        //debugger
    }

    


    

    attatchToDom() {
        //debugger
        // first need to grab where we want to put this info
        Comment.cont.appendChild(this.render()) // cont is a static variable so they when we have to call it is  in one my class
    // instead of calling this.elelement, we need to make sure that it gets rendered first so we can just call our function render insisde appendChild, beacsue renders return value is going to be the element have the innerHTML has been entered into it
    }





}
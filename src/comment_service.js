class CommentService {
    constructor(port){
        this.port = port
    };

    getComments() { // show info
        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => {
            for(const comment of data){ // loop through data set of comments
                let c = new Comment(comment) // want to create new comments
                c.attatchToDom() // create method attatchToDom and declare it inside Comment class becaue we want to be able to call it on a Comment Object
                // show new comments on DOM
            }
        })
        //.catch() //send message to user if things didn't work out
    }

    //need to make a function for creating comments
    //instance method
    createComments(){ // create info
        //need to be specific and tell it what information we're sending through
        const commentInfo = {
            //debugger
            comment: {
                title: titleValue.value,
                description: descriptionValue.value,
                shoe_id: dropDown.value
            }
        };
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"

            },
            //information, we're sending it across the web so we need to change the way we're sending it
            body: JSON.stringify(commentInfo)
        }
        //debugger
        //need to make a fetch request to create my new comments
        // making a fetch request to send some information back to /comments
        fetch(this.port + `/comments`, configObject)
        .then(response => response.json())
        .then(data => {
                const c = new Comment(data)
                c.attatchToDom()
        })
    };

    updateComment(comment){ // have to make some sort of thing for item for passing it through, just like i did with create
        const {title, description, id} = comment // make it easier im gonna use destructuring, setting the varibales we need to create a new comment out of here, so inside of here im going to set my title and description 
        // have it equal my comment, beceause remember when we're doing destructuring you have it equal theobject you're trying to break apart and then you say what you want to set as variables - so we want to set the title and description as variables
        
        const commentInfo = { // notice we don't have to do somehting like "titile: title" because using destructuring its smart enough to know that i'm passing through the title as title and description as the description as long as they're named the same
            title,
            description,
            id
        }
        // once i have this information i can make myself another object inside of here where we can pass through the title and description
        
        const configObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"

            },
            //information, we're sending it across the web so we need to change the way we're sending it
            body: JSON.stringify(commentInfo)
        }
        //going to make our config objet
        //debugger
        fetch(`${this.port}/comments/${id}`, configObject)
        .then(response => response.json())
        .then(data => {
            comment.render() // took out attatchToDom because it was attatching it to the bottom of the page/ bottome of the DOM. so we used the render method to just rerender the object so it'll stay where it's at
        });
        // the difference between this fetch request and the create fetch request is the fetch request that we're making for an update is going to be an individual item comment,
        
        // debugger
    };

    deleteComment(e){
        debugger // we can look at what event we're passing in when we click on that X
        const id = e.target.dataset.id// grab the id based off that data id inside the e.target object we're calling
        e.target.parentElement.remove()// remove from front end// optimisitic rendering and assume it works from the backend
        fetch(this.port + `/comments`, configObject)
        .then(response => response.json())
        .then(json => alert{json.message})    // calling this message here for when im going to my backend
    }
};

// return a PROMISE, will be pending resolved or rejected - it's a staus update of what's going on with the fetch
// rememeber the FETCH is asynchronous, so it doesn't just happen instantly, IT TAKES SOME TIME
// promise gives feed back like "did it work", "did this get fullfilled", "is it still pending(which means it's still waiting a second)", "Or didi it get rejected(which means it didn't go through)"
// good reason to use a .catch


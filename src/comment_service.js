class CommentService {
    constructor(port){
        this.port = port
    };

    getComments() {
        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => {
            for(const comment of data){ // loop through data set of comments
                let c = new Comment(comment) // want to create new comments
                c.attatchToDom() // create method attatchToDom and declare it inside Comment class becaue we want to be able to call it on a Comment Object
                // show new comments on DOM
            }
        })
        .catch() //send message to user if things didn't work out
    }
};

// return a PROMISE, will be pending resolved or rejected - it's a staus update of what's going on with the fetch
// rememeber the FETCH is asynchronous, so it doesn't just happen instantly, IT TAKES SOME TIME
// rpomise gives feed back like "did it work", "did this get fullfilled", "is it still pending(which means it's still waiting a second)", "Or didi ti get rejected(which means it didn't go through"
// good reason to use a .catch
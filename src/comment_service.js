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
        //.catch() //send message to user if things didn't work out
    }

    //need to make a function for creating comments
    //instance method
    createComments(){
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
};

// return a PROMISE, will be pending resolved or rejected - it's a staus update of what's going on with the fetch
// rememeber the FETCH is asynchronous, so it doesn't just happen instantly, IT TAKES SOME TIME
// promise gives feed back like "did it work", "did this get fullfilled", "is it still pending(which means it's still waiting a second)", "Or didi it get rejected(which means it didn't go through)"
// good reason to use a .catch


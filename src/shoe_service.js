class ShoeService{
    constructor(port){
        this.port = port;
    }

    getShoes(){
        fetch(`${this.port}/shoes`)
        .then(response => response.json())
        .then(json => { //RETURNS A PROMISE and if the promise is fullfilled it moves on to the callback function we'reusing
            json.forEach(element => {
                //debugger
// we can just pass in our json the way it is, unlike the other example with fastJSON instead of Active Model Serializer, where we have to break it up differently
// different serializers handle info different ways

                const s = new Shoe(element) // test in console
                // now we're making our new shoe objects inside of here inside my javaScript object notation
                //debugger
                // we want to add these objects to our dropDown
                // need to make a function to add to dropDown
                //s.addToDropDown()
                s.attatchToDom()
            });
        })
    }

    // searchShoes(){
    //     fetch(`${this.port}/shoes/${id}`)
    //     .then(response => response.json())
    //     .then(json => {
    //         json.forEach(element => {    }
    //         }
    //     }
    // }


    createShoes(){ // first create the info
        // debugger
        const shoeInfo = {// need to be specific on what information I'm sending through
            shoe: {
                name: nameValue.value,
                brand: brandValue.value,
                size: sizeValue.value,
                color: colorValue.value,
                design: designValue.value,
                yearfounded: yearfoundedValue.value,
                image_url: imageUrlValue.value,
                condition: conditionValue.value,
                category_id: dropDown.value,
            }
        //debugger
        }
        // debugger
        const configObject = {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },

            body: JSON.stringify(shoeInfo) // info we're sending across the web so we need to change the way we're sending it
        }

        // need to make a fetch request to create new Shoes
        // making a fetch request to send the info we make back to /shoes
        fetch(this.port + `/shoes`, configObject)
        .then(response => response.json())
        .then(data => {
            const s = new Shoe(data)

            s.attatchToDom()
        })
    }

    updateShoe(shoe){ // have to make some sort of thing for item for passing it through, just like i did with create
        //debugger
        const {name, brand, size, color, design, yearfounded, condition, category_id, id} = shoe // make it easier im gonna use destructuring, setting the varibales we need to create a new shoe out of here, so inside of here im going to set my name and brand etc 
        // have it equal my shoe, beceause remember when we're doing destructuring you have it equal the object you're trying to break apart and then you say what you want to set as variables - so we want to set the name and brand etc as variables
        
        const shoeInfo = { // notice we don't have to do somehting like "name: name" because using destructuring its smart enough to know that i'm passing through the name as name and brand as the brand as long as they're named the same
            name,
                brand,
                size,
                color,
                design,
                yearfounded,
                condition,
                category_id,
                id
        }
        // once i have this information i can make myself another object inside of here where we can pass through the name and brand etc
        
        const configObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"

            },
            //information, we're sending it across the web so we need to change the way we're sending it
            body: JSON.stringify(shoeInfo)
        }
        //going to make our config objet
        //debugger
        fetch(`${this.port}/shoes/${id}`, configObject)
        .then( shoe.render()) // we're doing pessimistic rendering here//.then(() => {shoe.render()}) // can even get rid of that response and make it an empty arrow function
        //.then(response => response.json())
        //.then(data => {
        //    shoe.render() // took out attatchToDom because it was attatching it to the bottom of the page/ bottome of the DOM. so we used the render method to just rerender the object so it'll stay where it's at
       // });
        // the difference between this fetch request and the create fetch request is the fetch request that we're making for an update is going to be an individual item shoe,
        // we're not really using this information that's being passed through response.json so we can just call shoe.render as an object inside the response function
        // debugger
    };

// createLikes(){
//     fetch(`${this.port}/shoes/${e.target.id}`, {
//         method: 'PATCH',
//         headers: {
//             "Content-Type": "applictaion/jason",
//             "Accept": "application/json"

//         },
//         body: JSON.stringify({
//             like: newLikes
//         })
//     })
//     .then( response => response.json())
//     .then(shoe => {
//         // debugger
//         e.target.previousElementSibling.innerText
//         .innerText = `${shoe.likes} Likes`
//     })
//}


    deleteShoe(e){
        //debugger // we can look at what event we're passing in when we click on that X
        const id = e.target.dataset.id// grab the id based off that data id inside the e.target object we're calling
        e.target.parentElement.remove()// remove from front end// optimisitic rendering and assume it works from the backend
        fetch(this.port + `/shoes/${id}`, {method: 'DELETE'}) // don't have to have this as a configObject, I can just put in an object as the second argument too especially when it's something super small - like the only thing i'm doing here is my method for delete ({method:'DELETE'})
        .then(response => response.json()) // get info
        .then(json => alert(json.message))    // calling this message here for when im going to my backend
    }

    
    
};

// return a PROMISE, will be pending resolved or rejected - it's a staus update of what's going on with the fetch
// rememeber the FETCH is asynchronous, so it doesn't just happen instantly, IT TAKES SOME TIME
// promise gives feed back like "did it work", "did this get fullfilled", "is it still pending(which means it's still waiting a second)", "Or didi it get rejected(which means it didn't go through)"
// good reason to use a .catch

//Pessimistic rendering waiting for backend to update and then sending it to the frontend
//Optimistic rendering updating the frontend before the backend saves/loads

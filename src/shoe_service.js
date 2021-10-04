class ShoeService{
    constructor(port){
        this.port = port;
    }

    getShoes(){
        fetch(`${this.port}/shoes`)
        .then(response => response.json())
        .then(json => {
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

    createShoe(){ // first create the info
        const shoeInfo = {// need to be specific on what information I'm sending through
            shoe: {
                name: nameValue.value,
                brand: brandValue.value,
                size: sizeValue.value,
                color: colorValue.value,
                yearfounded: yearfoundedValue.value,
                conditionValue: conditionValue.value
            }
        
        }
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
        .then(response => response.json)
        .then()
    }

};
class CategoryService{
    constructor(port){
        this.port = port;
    }
    // instance functions that are going to be called when I'm trying to make a new Category
    getCategories(){
        fetch(`${this.port}/categories`)
        .then(response => response.json())
        .then(json => {
        // debugger
            json.forEach(element => {
                // debugger
// we can just pass in our json the way it is, unlike the other example with fastJSON instead of Active Model Serializer, where we have to break it up differently
// different serializers handle info different ways

                const c = new Category(element) // test in console
                // now we're making our new category objects inside of here inside my javaScript object notation
                // debugger
                // we want to add these objects to our dropDown
                // need to make a function to add to dropDown
                c.addToDropDown()
               // debugger
            })
        })
    }
}
const port = `http://localhost:3000`;

const shoeForm = document.getElementById("shoe-form")
const dropDown = document.getElementById("category-dropdown")

const shoeCall = new ShoeService(port)
const categoryCall = new CategoryService(port)

const nameValue = document.getElementById("shoe-name")
const designValue = document.getElementById("shoe-design")
const brandValue = document.getElementById("shoe-brand")
const sizeValue = document.getElementById("shoe-size")
const colorValue = document.getElementById("shoe-color")
const yearfoundedValue = document.getElementById("shoe-yearfounded")
const conditionValue = document.getElementById("shoe-condition")

shoeForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    // debugger
    // need to make a fetch call 
    shoeCall.createShoes() // need to grab info and then make a request to my backend
}


shoeCall.getShoes()
categoryCall.getCategories()

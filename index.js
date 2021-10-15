const port = `http://localhost:3000`;

const shoeForm = document.getElementById("shoe-form")
let shoeFormBtn = document.getElementById('shoe-form-btn')
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
const imageUrlValue = document.getElementById("shoe-image_url")
const likesValue = document.getElementById("shoe-like")

shoeForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    // debugger
    // need to make a fetch call 
    shoeCall.createShoes() 
    //debugger
    shoeForm.reset()
    // need to grab info and then make a request to my backend
}

function toggle(){
    let x = shoeForm
    let y = shoeFormBtn
    if (x.style.display === "none" && y.style.display === "block"){
        x.style.display = "block";
        y.style.display = "none"
    }
    else {
        x.style.display = "none";
        y.style.display = "block"
    }
}

// function toggle(){
//     //get the form
//     //get current value of the form's display property
//     let displaySetting = shoeForm.style.display
//     // also get the form button, so we can change what it says
//     let shoeFormBtn = document.getElementById('shoe-form-btn');
//     // now toggle the form and the button text, depending on the current state
//     if (displaySetting == 'none'){
//         // form visible. hide it
//         shoeForm.style.display = 'block';
//         //change button text
//         shoeFormBtn.innerHTML = 'Upload Used Shoes'
//     // }else {
//     //     // clock is hidden. show it
//     //     shoeForm.style.display = 'block';
//     //     // change button text
//     //     shoeFormBtn.innerHTML = 'Hide Form';
//     }

// }

// In this new toggleClock() function, your are using JavaScript to retrieve the clock element, get the current value of its display style, then checking it. If the display is currently set to "block", the clock is visible, so you change the display to "none", which hides the clock. If the clock is already hidden, you change the display to "block" to make it visible again. While you're switching the clock's display back and forth from "block" to "none", you're also changing the text (innerHTML) on the clock button, so that alternates between "Show clock" and "Hide clock", depending on the current display state of the clock.


shoeCall.getShoes()
categoryCall.getCategories()

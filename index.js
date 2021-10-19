const port = `http://localhost:3000`;

const searchBar = document.getElementById("search-bar")
const shoeForm = document.getElementById("shoe-form")
let shoeFormBtn = document.getElementById('shoe-form-btn')
const dropDown = document.getElementById("category-dropdown")

const shoeCall = new ShoeService(port)
const categoryCall = new CategoryService(port)

shoeCall.getShoes()
categoryCall.getCategories()


const nameValue = document.getElementById("shoe-name")
const designValue = document.getElementById("shoe-design")
const brandValue = document.getElementById("shoe-brand")
const sizeValue = document.getElementById("shoe-size")
const colorValue = document.getElementById("shoe-color")
const yearfoundedValue = document.getElementById("shoe-yearfounded")
const conditionValue = document.getElementById("shoe-condition")
const imageUrlValue = document.getElementById("shoe-image_url")

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

// function handleSearch(e){
//     e.preventDefault();
//     const term = e.target.value.toLowerCase
//     let searchResult = 

//     shoeCall.searchShoes()
//     searchBar.reset()
// }

// searchBar.addEventListener('input', e => {
//     const searchString = e.target.value.toLowerCase();

//     const 
// })


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





// const cont = document.getElementById('shoes-cont');
// const searchBar = document.getElementById('searchBar');
// let searchShoes = [];

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredShoes = searchShoes.filter((shoe) => {
//         return (
//             shoe.name.toLowerCase().includes(searchString) ||
//             shoe.brand.toLowerCase().includes(searchString) ||
//             shoe.size.toLowerCase().includes(searchString) ||
//             shoe.color.toLowerCase().includes(searchString) ||
//             shoe.design.toLowerCase().includes(searchString) ||
//             shoe.yearfounded.toLowerCase().includes(searchString) ||
//             shoe.condition.toLowerCase().includes(searchString) ||
//             shoe.image_url.toLowerCase().includes(searchString) ||
//             shoe.category_id.toLowerCase().includes(searchString)
//         );
//     });
//     displayShoes(filteredShoes);
// });

// const loadShoes = async () => {
//     try {
//         const res = await fetch(`${port}/shoes`);
//         searchShoes = await res.json();
//         displayShoes(searchShoes);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayShoes = (shoes) => {
//     const htmlString = shoes
//         .map((Shoe) => {
//             return `
//             <div class="center" data-id="${this.id}">
//             <img class="image_url" src=${this.image_url}>
//             <h2 class="name">${this.name}</h2>
//             <p class="brand">Brand: ${this.brand}</p>
//             <p class="size">Size: ${this.size}</p>
//             <p class="color">Color: ${this.color}</p>
//             <p class="yearfounded">Year Created: ${this.yearfounded}</p>
//             <p class="condition">Condition: ${this.condition}</p>
//             <p class="design">Design: ${this.design}</p>
//             </div>
//             <!--- <p class="like">${this.likes} Likes</p> -->
//             <button class="edit" data-id=${this.id}>Edit Shoe</button>
//             <button class="delete" data-id=${this.id}> X </button>
//         `;
//         })
//         .join('');
//     card.innerHTML = htmlString;
// };

// loadShoes();

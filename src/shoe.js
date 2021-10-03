class Shoe {
    constructor({name, brand, yearfounded, color, size, design, condition, id, comments, image_url}){
        //debugger
        this.name = name;
        this.brand = brand;
        this.yearfounded = yearfounded;
        this.color = color;
        this.size = size;
        this.design = design;
        this.condition = condition;
        this.id = id;
        this.comments = comments;
        this.image_url = image_url
    }

    renderShoes(){
        this.element.innerHTML = `
        <div data-id=${this.id}>
        <img src=${this.image_url} height="300" width="200">
        <p>${this.name}</p>
        <br><ul>
        <li>Brand: ${this.brand}</li>
        <li>Color: ${this.color}</li>
        <li>${this.size}</li>
        <li>${this.design}</li>
        <li>${this.condition}</li>
        </ul><br>
        <p>${this.comments}</p>
        </div>
        `
        return this.element
    };

    addToDropDown(){// need to invoke addToDropDown() for it to work (invoke inside of ShoeService class beceause that's where we're apending it to the dropDOwn)
        // add info to dropDOwn
        // everytime we're makig a new object in that get request we wnat to make an option for each of these
        const option = document.createElement('option'); // cr5eating this option
        option.value = this.id // adding value to it (the shoe value)
        option.innerText = this.name // creating it's innerText with that shoes name
        dropDown.apendChild(option) // then pushing it into the dropDOwn (apending it)
    };
};

// attributes :id, :brand, :yearfounded, :color, :size, :design, :condition

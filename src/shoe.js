class Shoe {
    constructor({name, brand, yearfounded, color, size, design, condition, id, comments}){
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
    }

    addToDropDown(){// need to invoke addToDropDown() for it to work (invoke inside of ShoeService class beceause that's where we're appending it to the dropDOwn)
        // add info to dropDOwn
        // everytime we're makig a new object in that get request we wnat to make an option for each of these
        const option = document.createElement('option'); // cr5eating this option
        option.value = this.id // adding value to it (the shoe value)
        option.innerText = this.name // creating it's innerText with that shoes name
        dropDown.appendChild(option) // then pushing it into the dropDOwn (appending it)
    };
};

// attributes :id, :brand, :yearfounded, :color, :size, :design, :condition

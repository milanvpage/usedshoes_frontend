class Comment {
    constructor({description, id, title, shoe_id, shoe}) {
        this.description = description;
        this.id = id;
        this.title = title;
        this.shoe_id = shoe_id;
        this.shoe = shoe;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `comment-${id}`
    }
    // need to make two separate functions
    // first function going to be about taking it (newly instantiated Comment Object) and filling the information out that i want inside of it
    // second function is going to be me puttin it inside of the DOM





}
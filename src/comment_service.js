class CommentService {
    constructor(port){
        this.port = port
    }

    getComments() {
        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
}
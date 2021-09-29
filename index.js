const port = `http://localhost:3000`;
const commentCall = new CommentService(port);

const form = document.getElementById("comment-form")
const dropDown = document.getElementById("shoe-dropdown")
const titleValue = document.getElementById("comment-title")
const descriptionValue = document.getElementById("comment-description")
commentCall.getComments()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    //debugger
    // need to make a fetch call 
    commentCall.createComments()
}
const port = `http://localhost:3000`;
const commentCall = new CommentService(port);

const form = document.getElementById("comment-form")
const dropDown = document.getElementById("shoe-dropdown")


commentCall.getComments()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    debugger
}
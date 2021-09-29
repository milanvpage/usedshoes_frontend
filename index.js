const port = `http://localhost:3000`;
const commentCall = new CommentService(port);

commentCall.getComments()
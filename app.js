const express = require("express");
const app = express();
const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000");
});
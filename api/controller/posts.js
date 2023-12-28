//We used to write logics in controllers

export const getPost = (req, res) => {
    res.json("get only one post from controller");
}

export const getPosts = (req, res) => {
    res.json("get all the post from controller");
}

export const addPost = (req, res) => {
    res.json("add post from controller");
}

export const deletePost = (req, res) => {
    res.json("delete post from controller");
}

export const editPost = (req, res) => {
    res.json("edit post from controller");
}
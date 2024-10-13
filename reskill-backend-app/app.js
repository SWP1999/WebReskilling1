const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const photosResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    const postsAndPhotos = postsResponse.data
      .map((post) => ({
        ...post,
        photo: photosResponse.data.find((photo) => photo.id === post.id),
      }))
      .slice(0, 11);

    res.json(postsAndPhotos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
});
app.get("/post/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const photoResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${postId}`
    );

    const postWithPhoto = {
      ...postResponse.data,
      photo: photoResponse.data,
    };
    res.json(postWithPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(5000);

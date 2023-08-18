const express = require('express');
const app = express();
const port = 3000;



//1
app.get("/arcade", (req, res) => {
    res.send("<h1>Nostalgic place</h1><p>Going to the arcade brings me back to my childhood</p>");
});
//2
app.get("/venue", (req, res) => {
    res.send("<h1>Live Performance</h1><p>I feel most free when I am playing the saxophone with my band</p>");
});
//3
app.get("/food", (req, res) => {
    res.send("<h1>Pizza</h1><p>Nothing beats a good crispy slice of pizza</p>");
});
//4
app.get("/juice", (req, res) => {
    res.send("<h1>Pineapple</h1><p>I love pineapple juice</p>");
});
//5
app.get("/animal", (req, res) => {
    res.send("<h1>Favourite Animal</h1><p>My favourite animal is a whale</p>");
});
//6
app.get("/book", (req, res) => {
    res.send("<h1>Favourite Book Genres</h1><p>My favourite book genres is sci-fi</p>");
});
//7
app.get("/instrument", (req, res) => {
    res.send("<h1>What I play</h1><p>I play the saxophone</p>");
});
//8
app.get("/anime", (req, res) => {
    res.send("<h1>Favourite Anime</h1><p>My favourite anime is One Piece</p>");
});
//9
app.get("/music", (req, res) => {
    res.send("<h1>My favorite music genre</h1><p>My favourite music genre is Jazz</p>");
});
//10
 app.get("/astrology", (req, res) => {
     res.send("<h1>My Zodiac Sign</h1><p>My zodiac sign is Aries</p>");
});


app.listen(port,() => {
    console.log('listening on port' , port);
});
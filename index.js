const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 5000;

const category = require('./category.json')
const news = require('./news.json');
app.get('/', (req, res) => {
    res.send('Dragon news in running')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const specificId = news.find(n => n._id == id)
    // console.log(specificId);
    res.send(specificId)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    }
    else {

        const categoryId = news.filter(n => n.category_id == id)
        res.send(categoryId)
    }
})


app.listen(port, () => {
    console.log(`Your dragon news is running at port ${port}`);
})
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Sillyfier

app.get('/silly/:name', (req, res) => {
    const { name } = req.params;
    if(!name) {
        res.status(404).send({
            message: "Please include a name :3"
        })
    }
    res.status(200).send({
        name: sillyfyText(name)
    })
})

app.post('/silly/', (req, res) => {
    const { name } = req.body;

    if(!name) {
        res.status(404).send({
            message: "Please include a name :3"
        })
    }
    res.status(200).send({
        name: sillyfyText(name)
    })
})

// Edgifier

app.get('/edgy/:name', (req, res) => {
    const { name } = req.params;
    if(!name) {
        res.status(404).send({
            message: "Please include a name :3"
        })
    }
    res.status(200).send({
        name: edgifyText(name)
    })
})

app.post('/edgy/', (req, res) => {
    const { name } = req.body;

    if(!name) {
        res.status(404).send({
            message: "Please include a name :3"
        })
    }
    res.status(200).send({
        name: edgifyText(name)
    })
})

// RPfier

app.get('/rp/:name', (req, res) => {
    const { name } = req.params;
    if(!name) {
        res.status(404).send({
            message: "Please include a name :3"
        })
    }
    res.status(200).send({
        name: RPText(name)
    })
})

app.post('/rp/', (req, res) => {
    const { name } = req.body;

    if(!name) {
        res.status(404).send({
            message: "Please include a name :3"
        })
    }
    res.status(200).send({
        name: RPText(name)
    })
})

app.listen(PORT, () => {
    console.log(`This app is running on port ${PORT}.`);
    console.log(`http://localhost:${PORT}`)
});

// Functions

function sillyfyText(str) {
    const startArray = ["🎉","✨","𝓼𝔀𝓪𝓰","𝓪𝔀𝓮𝓼𝓸𝓶𝓮","𝓯𝓻𝓮𝓪𝓴𝔂", "𝓼𝓲𝓵𝓵𝔂", "★", "bread", "🌟", "🐈", "𝓮𝓿𝓲𝓵", "tally", "𝓼𝓴𝓲𝓫𝓲𝓭𝓲", "yoyle", "scrimblo", "criminal", "devious", "quirky"];
    const endArray = [":3", "★", "😎", "💥", "🌟", "meow", "goober"];
    const endRepeat = 3;
    const startRepeat = 3;
    let sillifiedText = "";
    let toAdd = "";
    let toAddEnd = " ";
    for(let i = 0; i < startRepeat; i++) {
        const silly = startArray[Math.floor(Math.random() * startArray.length)]
        toAdd += silly + " ";
    }
    for(let i = 0; i < endRepeat; i++) {
        const silly = endArray[Math.floor(Math.random() * endArray.length)]
        toAddEnd += silly + " ";
    }
    sillifiedText = toAdd.trim() + " " + str + " " + toAddEnd.trim()
    return sillifiedText
}

function edgifyText(str) {
    const emojiArray = ["🖤","🦇","🥀","⛓","✮","♱","⋆"];

    let returnSTR = `xX${str}Xx `;
    for(let i = 0; i < 5; i++) {
        const emoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        returnSTR += emoji;
    }
    return returnSTR;
}

function RPText(str) {
    const tags = ["dont mess with me", "wolf", "rich", "tall","attractive", "do not touch tail", "cool", "single"];
    let tagsArray = tags;
    let returnSTR = `${str}`;
    for(let i = 0; i < 5; i++) {
        const tag = tagsArray[Math.floor(Math.random() * tagsArray.length)];
        returnSTR += `/${tag}`;
        tagsArray = tagsArray.filter(item => item !== tag)
    }
    return returnSTR;
}
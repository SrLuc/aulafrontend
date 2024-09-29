const express = require('express');
const app = express();
const cors = require('cors');
const { users } = require("./models")


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/api/users", (req, res) => {
    res.json(users)
})

app.post('/api/users', (req, res) => {
    const name = req.body.name
    const email = req.body.email

    if (!name || !email) {
        return res.status(400).json({ error: 'name and email are required' });
    }

    const data = {
        name: name,
        email: email
    }

    users.push(data)
    console.log("New User Created")
    res.json({ data });

});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
}
);
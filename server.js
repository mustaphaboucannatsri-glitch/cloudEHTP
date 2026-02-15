const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Fake data (à remplacer plus tard par DB)
const users = [
    { id: 1, name: "Alice", email: "alice@email.com" },
    { id: 2, name: "Bob", email: "bob@email.com" },
    { id: 3, name: "Charlie", email: "charlie@email.com" }
];

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];

// Route test
app.get('/', (req, res) => {
    res.json({ message: "API is running 🚀" });
});

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET user by id
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

// GET all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

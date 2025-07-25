const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3001;

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(express.json());

app.get('/products', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/cart', (req, res) => {
  const { productId } = req.body;
  // In production, add real DB logic
  res.json({ message: `Product ${productId} added to cart.` });
});

app.post('/checkout', (req, res) => {
  // Simulate checkout
  res.json({ message: 'Checkout complete!' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price NUMERIC(10, 2) NOT NULL,
  stock INT DEFAULT 0
);

-- Insert some sample products
INSERT INTO products (name, description, price, stock) VALUES
('Laptop', 'High-performance laptop', 1200.00, 10),
('Headphones', 'Noise-cancelling headphones', 100.00, 25),
('Keyboard', 'Mechanical keyboard with backlight', 75.00, 30);

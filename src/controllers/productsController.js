import db from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const search = req.query.search || "";

    const [rows] = await db.query("SELECT * FROM products WHERE name LIKE ?", [
      `%${search}%`,
    ]);

    res.render("products", { products: rows, search });
  } catch (e) {
    res.send("Error ambil products");
  }
};

export const addProductPage = (req, res) => {
  res.render("product_add");
};

export const addProduct = async (req, res) => {
  const { name, stock } = req.body;

  await db.query("INSERT INTO products (name, stock) VALUES (?, ?)", [
    name,
    stock,
  ]);

  res.redirect("/products");
};

export const editProductPage = async (req, res) => {
  const id = req.params.id;

  const [[product]] = await db.query("SELECT * FROM products WHERE id = ?", [
    id,
  ]);

  res.render("product_edit", { product });
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { name, stock } = req.body;

  await db.query("UPDATE products SET name = ?, stock = ? WHERE id = ?", [
    name,
    stock,
    id,
  ]);

  res.redirect("/products");
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  await db.query("DELETE FROM products WHERE id = ?", [id]);

  res.redirect("/products");
};

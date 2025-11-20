import db from "../db.js";

export const listPurchases = async (req, res) => {
  try {
    const [purchases] = await db.query(`
      SELECT purchases.id, products.name, purchases.qty, purchases.date
      FROM purchases
      JOIN products ON products.id = purchases.product_id
      ORDER BY purchases.id DESC
    `);

    const [products] = await db.query("SELECT id, name FROM products");

    res.render("purchases", {
      purchases,
      products,
    });
  } catch {
    res.send("Error memuat pembelian");
  }
};

export const addPurchase = async (req, res) => {
  const { product_id, qty } = req.body;

  try {
    const date = new Date();

    await db.query(
      "INSERT INTO purchases (product_id, qty, date) VALUES (?, ?, ?)",
      [product_id, qty, date],
    );

    await db.query("UPDATE products SET stock = stock - ? WHERE id = ?", [
      qty,
      product_id,
    ]);

    res.redirect("/purchases");
  } catch {
    res.send("Error tambah pembelian");
  }
};

export const cancelPurchase = async (req, res) => {
  const id = req.params.id;

  try {
    const [[row]] = await db.query("SELECT * FROM purchases WHERE id = ?", [
      id,
    ]);

    if (!row) return res.send("Data pembelian tidak ditemukan");

    await db.query("DELETE FROM purchases WHERE id = ?", [id]);

    await db.query("UPDATE products SET stock = stock + ? WHERE id = ?", [
      row.qty,
      row.product_id,
    ]);

    res.redirect("/purchases");
  } catch {
    res.send("Error batal pembelian");
  }
};

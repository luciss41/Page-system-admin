import db from "../db.js";

export const dashboardPage = async (req, res) => {
  try {
    const [[{ total_products }]] = await db.query(
      "SELECT COUNT(*) AS total_products FROM products",
    );
    const [[{ total_purchases }]] = await db.query(
      "SELECT COUNT(*) AS total_purchases FROM purchases",
    );
    const [[{ total_stock }]] = await db.query(
      "SELECT SUM(stock) AS total_stock FROM products",
    );

    const [recent] = await db.query(`
      SELECT purchases.id, products.name, purchases.qty, purchases.date
      FROM purchases
      JOIN products ON products.id = purchases.product_id
      ORDER BY purchases.id DESC
      LIMIT 5
    `);

    res.render("dashboard", {
      total_products,
      total_purchases,
      total_stock,
      recent,
    });
  } catch (e) {
    res.send("Error memuat dashboard");
  }
};

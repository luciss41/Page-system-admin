import express from "express";
import path from "path";
import dotenv from "dotenv";
import expressLayouts from "express-ejs-layouts";
import productsRoute from "./src/routes/products.js";
import purchasesRoute from "./src/routes/purchases.js";
import dashboardRoute from "./src/routes/dashboard.js";
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));

app.use(expressLayouts);
app.set("layout", "layout");

app.use("/dashboard", dashboardRoute);
app.use("/products", productsRoute);
app.use("/purchases", purchasesRoute);

app.get("/", (req, res) => res.redirect("/products"));

app.listen(3000, () => console.log("Server jalan di http://localhost:3000"));

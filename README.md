Simple Admin Page CRUD 
Project ini dibuat untuk kebutuhan tes. Isinya sederhana: sistem admin untuk ngelola produk, stok, dan pembelian. Dibangun pakai Node.js, Express, EJS, dan MySQL.

Tujuan utama project ini adalah nunjukin alur CRUD dasar dan bagaimana data produk berhubungan dengan data pembelian.

----------------------

Fitur Utama

Produk
-Lihat daftar produk
-Search produk berdasarkan nama
-Tambah produk
-Edit produk
-Hapus produk

Pembelian
-Tambah pembelian (otomatis ngurangin stok)
-Hapus / cancel pembelian (stok balik lagi)
-Tabel daftar pembelian
-Dropdown produk saat input biar lebih rapi

Dashboard
-Total produk
-Total stok
-Total pembelian
-5 pembelian terakhir.

----------------------

Tech Stack
-Node.js (Express) untuk server
-EJS buat templating
-MySQL sebagai database
-Express EJS Layouts untuk wrapper layout sederhana
-dotenv buat setup environment.

----------------------
Struktur Folder
rootfolder/
  src/
    controllers/
    routes/
    views/
    db.js
server.js
.env

----------------------

Cara Menjalankan

1. Install Dependency
    npm install

2. Setting Env
    Bikin file .env di root folder dengan isi:
    
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=(password db mysql)
    DB_NAME=adminpage(nama db mysql)

3. Install MySQL Community Server
    Download dan install MySQL Community Server dari https://dev.mysql.com/downloads/installer/
    Cek Installasi MySQL diCMD dengan prompt : mysql -u root -p
    
4. Setup Database MySQl
    Bikin database dan table via Terminal/CMD :
    
    CREATE DATABASE admin_test;
    USE admin_test;
    
    CREATE TABLE products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      stock INT
    );
    
    CREATE TABLE purchases (
      id INT AUTO_INCREMENT PRIMARY KEY,
      product_id INT,
      qty INT,
      date DATETIME
    );

5. Tambahkan Data Dummy(Opsional)
    Via Terminal/CMD
  INSERT INTO products (name, stock) VALUES
  ('Barang 1', 42),
  ('Barang 2', 18),
  ('Barang 3', 75),
  ('Barang 4', 50),
  ('Barang 5', 19);

6. Jalankan Project 
    npm run dev
    atau
    node server.js
    Akses di Browser : http://localhost:3000

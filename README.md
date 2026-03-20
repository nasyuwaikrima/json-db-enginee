# Database Management System

Selamat datang! Ini adalah project pembelajaran saya untuk memahami cara membuat sistem manajemen database sederhana menggunakan JavaScript dan Node.js.

## 📋 Deskripsi Project

Project ini merupakan implementasi **Database Class** dengan operasi **CRUD (Create, Read, Update, Delete)** yang dapat menyimpan dan mengelola data dalam file JSON. Melalui project ini, saya belajar tentang:

- Membuat class dan object-oriented programming di JavaScript
- Operasi file system (fs) di Node.js
- Manipulasi dan parsing data JSON
- Implementasi operasi CRUD
- ES Modules (import/export)
- Array methods: `.push()`, `.filter()`, `.find()`
- Pemisahan logic ke modul-modul terpisah

## 📁 Struktur Project

```
json-db-enginee/
├── module.js       # Wrapper untuk module fs
├── load.js         # Fungsi untuk load data dari file
├── read.js         # Fungsi untuk membaca data terstruktur
├── add.js          # Fungsi untuk menambah data
├── find.js         # Fungsi untuk mencari data
├── delete.js       # Fungsi untuk menghapus data
├── main.js         # Class Database (inti aplikasi)
├── example.js      # Demonstrasi lengkap semua operasi
├── example.json    # File data (database)
├── package.json    # Konfigurasi project
└── README.md       # File dokumentasi ini
```

## 🚀 Cara Memulai

### Prerequisites
- Node.js versi 12 atau lebih tinggi
- Text Editor/IDE (VS Code, dll)

### clone project
```bash
git clone https://github.com/nasyuwaikrima/json-db-enginee.git
```

### masuk directory project
```cd json-db-enginee```

### Install Dependencies
```bash
npm install
```

### Menjalankan Project
```bash
node example.js
```

## 💡 Contoh Penggunaan Lengkap

### 1. Inisialisasi Database
```javascript
import Database from './main.js'

const db = new Database('./example.json')
```

### 2. Read - Membaca Semua Data
```javascript
const allData = db.read()
console.log(allData)
// Output: [{ name: 'johsh', age: 10 }, ...]
```

### 3. Add - Menambah Data Baru
```javascript
const newUser = {
    name: 'Nasyuwa',
    age: 17
}
db.add(newUser)
```

### 4. Find - Mencari Data
```javascript
const user = db.find('name', 'Budi Santoso')
console.log(user)
// Output: { name: 'Budi Santoso', age: 25 }
```

### 5. Delete - Menghapus Data
```javascript
db.delete('name', 'johsh')
// Menghapus user dengan nama 'johsh' dari database
```

## 📊 Format Data

Data disimpan dalam format JSON array:

```json
[
  {
    "name": "Nasyuwa",
    "age": 17
  }
  
]
```

## 🎯 Yang Saya Pelajari

### Konsep Pemrograman
✅ Object-Oriented Programming (Class)  
✅ CRUD Operations (Create, Read, Update, Delete)  
✅ Modular Code Organization  
✅ ES Modules (import/export)  

### JavaScript Features
✅ Array Methods: `.push()`, `.filter()`, `.find()`  
✅ Arrow Functions: `(item) => item.name`  
✅ Template Literals dan String Manipulation  
✅ JSON Parsing dan Stringifying  

### Node.js
✅ File System Module (`fs`)  
✅ Synchronous File Operations  
✅ Path Handling  
✅ Module System  

## 🔄 Alur Data

```
User Input
    ↓
Database Class (main.js)
    ↓
Fungsi Spesifik (add.js, find.js, delete.js, etc.)
    ↓
load.js (Parse JSON)
    ↓
File System (fs.readFileSync)
    ↓
example.json
```

## ⚠️ Catatan & Pembaruan Ke Depan

### Catatan Saat Ini
- Menggunakan **synchronous file operations** untuk kesederhanaan pembelajaran
- Error handling masih minimal

### Improvement Ke Depan
- [ ] Menggunakan `async/await` untuk operasi file yang lebih efisien
- [ ] Menambahkan error handling yang lebih robust
- [ ] Validasi data sebelum menyimpan
- [ ] Menambahkan fitur update (edit data existing)
- [ ] Support untuk berbagai format file (CSV, XML, dll)
- [ ] Database validation schema
- [ ] Logging system

## 🛠️ Technologies Used

- **Language**: JavaScript (ES6+)
- **Runtime**: Node.js
- **Storage**: JSON Files
- **Module System**: ES Modules

## 📝 Cara Menjalankan Example

File `example.js` mendemonstrasikan semua operasi:

```bash
# Jalankan example
node example.js

# Output akan menampilkan:
# ✅ Database initialized
# 📖 READ - Membaca semua data
# ➕ ADD - Menambah data baru
# 🔍 FIND - Mencari data
# 🗑️ DELETE - Menghapus data
```

## 📚 Resources yang Membantu

- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Node.js File System Documentation](https://nodejs.org/api/fs.html)
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## 👨‍💻 Author

Dibuat sebagai bagian dari perjalanan pembelajaran JavaScript dan Node.js dari nol.

**Nama:** Nasyuwa  
**Email:** nasyuwa648@gmail.com  
**GitHub:** [@nasyuwaikrima](https://github.com/nasyuwaikrima)

## 📄 License

Project ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](./LICENSE) untuk detail lengkapnya.

Anda bebas untuk:
- ✅ Menggunakan project ini untuk tujuan komersial maupun personal
- ✅ Memodifikasi dan mengubah kode sesuai kebutuhan
- ✅ Mendistribusikan ulang project ini
- ✅ Menggunakan project ini sebagai basis untuk project lain

Dengan syarat:
- 📋 Menyertakan lisensi dan copyright notice dalam setiap distribusi

---

**Happy Learning & Coding!** 🚀✨

*Jika Anda memiliki pertanyaan atau saran untuk improvement, feel free untuk membuat issues atau pull requests!*

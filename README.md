# LearnJS - Database Management System

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

### Install Dependencies
```bash
npm install
```

### Menjalankan Project
```bash
node example.js
```

## 🏛️ Arsitektur Kode

### 1. **module.js** - Module Wrapper
Wrapper sederhana untuk module `fs` agar mudah di-import:

```javascript
import fs from 'fs'

export const mdl = {
    fs: fs
}
```

### 2. **load.js** - Load Data
Membaca file dan meng-parse data JSON ke array:

```javascript
export default function load(path) {
    const dataPath = path
    const data = mdl.fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
}
```

### 3. **read.js** - Read Data
Membaca file dan langsung return data yang sudah di-parse:

```javascript
export default function read(path) {
    const data = mdl.fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
}
```

### 4. **add.js** - Create/Add Data
Menambahkan data baru ke array dan menyimpannya ke file:

```javascript
export default function add(path, data) {
    const database = load(path)
    database.push(data)
    const dataPath = mdl.fs.writeFileSync(path, JSON.stringify(database, null, 2))
    return dataPath
}
```

### 5. **find.js** - Read/Search Data
Mencari data berdasarkan property dan value:

```javascript
export default function find(path, object, query) {
    const database = load(path)
    const cari = database.find((item) => item[object] === query)
    return cari
}
```

### 6. **delete.js** - Delete Data
Menghapus data berdasarkan property dan value:

```javascript
export default function deleted(path, object, query) {
    const database = load(path)
    const delet = database.filter((item) => item[object] !== query)
    return mdl.fs.writeFileSync(path, JSON.stringify(delet, null, 2))
}
```

### 7. **main.js** - Database Class
Class utama yang menggabungkan semua operasi:

```javascript
export default class Database {
    constructor(path) {
        this.path = path
        load(this.path)
    }

    read() {
        return read(this.path)
    }

    add(data) {
        return add(this.path, data)
    }

    find(object, query) {
        return find(this.path, object, query)
    }

    delete(object, query) {
        return deleted(this.path, object, query)
    }
}
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
**GitHub:** [@wa130](https://github.com/wa130)

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

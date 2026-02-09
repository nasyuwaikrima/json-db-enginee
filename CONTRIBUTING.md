# Panduan Kontribusi

Terima kasih telah tertarik untuk berkontribusi pada project **LearnJS**! 🎉

## Bagaimana Cara Berkontribusi?

### 1. Fork Repository
```bash
# Clone repository Anda
git clone https://github.com/wa130/json-db-enginee.git
cd json-db-enginee
```

### 2. Buat Branch Baru
```bash
git checkout -b feature/nama-fitur
# atau
git checkout -b fix/nama-bug
```

### 3. Lakukan Perubahan
- Pastikan kode Anda clean dan terstruktur dengan baik
- Ikuti style guide yang ada di project
- Tambahkan komentar untuk kode yang kompleks

### 4. Test Perubahan Anda
```bash
node example.js
```

### 5. Commit Perubahan
```bash
git add .
git commit -m "feat: deskripsi singkat perubahan"
# atau
git commit -m "fix: deskripsi singkat perbaikan"
```

### 6. Push ke Repository Anda
```bash
git push origin feature/nama-fitur
```

### 7. Buat Pull Request
- Buka repository Anda di GitHub
- Klik tombol "Pull Request"
- Jelaskan perubahan yang Anda buat
- Tunggu review dari maintainer

## Style Guide

### JavaScript
- Gunakan `camelCase` untuk variable dan function
- Gunakan `PascalCase` untuk class
- Gunakan arrow functions untuk callbacks
- Tambahkan JSDoc comments untuk functions yang kompleks

### Contoh:
```javascript
/**
 * Mencari data di database
 * @param {string} path - Path ke file database
 * @param {string} property - Property yang dicari
 * @param {*} value - Value yang dicari
 * @returns {object} - Data yang ditemukan
 */
export default function find(path, property, value) {
    const database = load(path)
    return database.find((item) => item[property] === value)
}
```

## Jenis Kontribusi yang Diharapkan

### Bug Fixes 🐛
- Perbaikan error atau issues di kode
- Improvement pada error handling
- Optimization performance

### Features ✨
- Fitur baru yang berguna
- Improvement pada dokumentasi
- Menambahkan tests

### Documentation 📚
- Improvement README
- Menambah contoh penggunaan
- Memperbaiki typos

## Area yang Bisa Dikontribusi

- [ ] Menambah fitur update (edit data existing)
- [ ] Implementasi async/await version
- [ ] Error handling yang lebih robust
- [ ] Unit tests menggunakan Jest
- [ ] Dokumentasi yang lebih lengkap
- [ ] Tutorial video/blog post
- [ ] Support untuk format file lain (CSV, XML)
- [ ] CLI interface untuk database

## Sebelum Submit PR

- ✅ Pastikan code tidak ada error
- ✅ Pastikan code sudah di-test
- ✅ Pastikan README/documentation updated (jika diperlukan)
- ✅ Pastikan commit message jelas dan deskriptif
- ✅ Pastikan tidak ada file yang tidak perlu di-commit

## Code of Conduct

Dalam berkontribusi pada project ini, kami mengharapkan semua kontributor untuk:

- 🤝 Saling menghormati dan membantu
- 💬 Berkomunikasi dengan jelas dan konstruktif
- 🎯 Fokus pada improvement quality code
- 📖 Membaca dan mengikuti guidelines yang ada

## Questions?

Jika Anda memiliki pertanyaan:

1. Buka [GitHub Issues](https://github.com/wa130/json-db-enginee/issues)
2. Atau hubungi saya di email: nasyuwa648@gmail.com

---

**Happy Contributing!** 🚀✨

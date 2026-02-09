import Database from './main.js'


// ============================================
// INISIALISASI DATABASE
// ============================================
const db = new Database('./example.json')
console.log('✅ Database initialized at example.json\n')

// ============================================
// 1. READ - Membaca semua data
// ============================================
console.log('📖 READ - Membaca semua data:')
const allData = db.read()
console.log(JSON.stringify(allData, null, 2))
console.log('')

// ============================================
// 2. ADD - Menambah data baru
// ============================================
console.log('➕ ADD - Menambah data baru:')
const newUser = {
    name: 'Nasyuwa',
    age: 17
}
console.log('Data yang ditambahkan:', JSON.stringify(newUser, null, 2))
db.add(newUser)
console.log('✓ Data berhasil ditambahkan\n')

// Read lagi untuk melihat hasil penambahan
console.log('📖 Data setelah penambahan:')
const dataAfterAdd = db.read()
console.log(JSON.stringify(dataAfterAdd, null, 2))
console.log('')

// ============================================
// 3. FIND - Mencari data berdasarkan kriteria
// ============================================
console.log('🔍 FIND - Mencari data berdasarkan kriteria:')
console.log('Mencari user dengan nama = "johsh":')
const foundUser = db.find('name', 'johsh')
console.log(JSON.stringify(foundUser, null, 2))
console.log('')

console.log('Mencari user dengan nama = "Budi Santoso":')
const foundUser2 = db.find('name', 'Budi Santoso')
console.log(JSON.stringify(foundUser2, null, 2))
console.log('')

// ============================================
// 4. DELETE - Menghapus data berdasarkan kriteria
// ============================================
console.log('🗑️ DELETE - Menghapus data berdasarkan kriteria:')
console.log('Menghapus user dengan nama = "johsh":')
db.delete('name', 'johsh')
console.log('✓ Data berhasil dihapus\n')

// Read lagi untuk melihat hasil penghapusan
console.log('📖 Data setelah penghapusan:')
const dataAfterDelete = db.read()
console.log(JSON.stringify(dataAfterDelete, null, 2))
console.log('')

// ============================================
// KESIMPULAN
// ============================================
console.log('============================================')
console.log('✅ Semua operasi CRUD berhasil dijalankan!')
console.log('============================================')
console.log('\nRingkasan operasi:')
console.log('• READ   - Membaca semua data dari file')
console.log('• ADD    - Menambah data baru ke file')
console.log('• FIND   - Mencari data berdasarkan property & value')
console.log('• DELETE - Menghapus data berdasarkan property & value')



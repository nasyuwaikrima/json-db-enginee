import load from './load.js'

export default function find(path, object, query) {
    const database = load(path)
    const cari = database.find((item) => item[object] === query)

    return cari
}
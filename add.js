import { mdl } from  './module.js'
import load from './load.js'

export default function add(path, data) {
    const database = load(path)
    database.push(data)
    const dataPath = mdl.fs.writeFileSync(path, JSON.stringify(database, null, 2))
    return dataPath
}


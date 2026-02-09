import { mdl } from  './module.js'
import load from './load.js'

export default function deleted(path, object, query) {
    const database = load(path)
    const delet = database.filter((item) => item[object] !== query)
    return mdl.fs.writeFileSync(path, JSON.stringify(delet, null, 2))
}
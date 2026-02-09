import { mdl } from './module.js'

export default function load(path) {
    const dataPath = path

    const data = mdl.fs.readFileSync(dataPath, 'utf-8')
    const database = JSON.parse(data)

    return database
}
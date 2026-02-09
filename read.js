import { mdl } from './module.js'

export default function read(path) {
    const dataPath = path
    const data = mdl.fs.readFileSync(dataPath, 'utf-8')

    return JSON.parse(data)
}
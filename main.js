import load from './load.js'
import add from './add.js'
import find from './find.js'
import deleted from './delete.js'
import read from './read.js'


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


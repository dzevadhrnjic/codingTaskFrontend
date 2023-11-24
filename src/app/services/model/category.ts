export class Category {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

export class CreateCategory {
    name: string

    constructor(name: string) {
        this.name = name
    }
}

export class UpdateCategory {
    name: string

    constructor(name: string) {
        this.name = name
    }
}
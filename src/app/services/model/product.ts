import { PriceHistory } from "./price.history"

export class Product {
    id: number
    name: string
    description: string
    category: number
    price: number
    views: number
    image: string
    priceHistory: PriceHistory[]

    constructor(id: number, name: string, description: string, category: number,
        price: number, views: number, image: string, coordinates: string, priceHistory: PriceHistory[]) {
        this.id = id
        this.name = name
        this.description = description
        this.category = category
        this.price = price
        this.views = views
        this.image = image
        this.priceHistory = priceHistory
    }
}
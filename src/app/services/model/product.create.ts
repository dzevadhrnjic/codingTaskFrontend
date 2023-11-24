export class CreateProduct {
    name: string
    description: string
    category: number
    price: number
    views: number
    image: string
    coordinates: string
    priceHistory: HistoryPrice


    constructor(name: string, description: string, category: number, price: number, views: number,
        image: string, coordinates: string, priceHistory: HistoryPrice
    ) {
        this.name = name
        this.description = description
        this.category = category
        this.price = price
        this.views = views
        this.image = image
        this.coordinates = coordinates
        this.priceHistory = priceHistory
    }
}

export class HistoryPrice {

    productid: number
    price: number

    constructor(productid: number, price: number) {
        this.productid = productid
        this.price = price
    }
}
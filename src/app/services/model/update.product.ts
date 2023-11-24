export class UpdateProduct {

    name: string
    description: string
    category: number
    price: number
    image: string
    priceHistory: HistoryPriceUpdate


    constructor(name: string, description: string, category: number, price: number,
        image: string, priceHistory: HistoryPriceUpdate
    ) {
        this.name = name
        this.description = description
        this.category = category
        this.price = price
        this.image = image
        this.priceHistory = priceHistory
    }
}

export class HistoryPriceUpdate {

    productid: number
    price: number

    constructor(productid: number, price: number) {
        this.productid = productid
        this.price = price
    }
}
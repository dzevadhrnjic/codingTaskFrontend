export class PriceHistory {

    productid: number
    price: number
    timestamp: any

    constructor(productid: number, price: number, timestamp: any) {
        this.productid = productid
        this.price = price
        this.timestamp = timestamp
    }
}
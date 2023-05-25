import { IProduct } from 'src/app/models/product.model';
export class IOrder{
    oid: number
    orderDate: Date
    orderValue: number
    orderconfirmed: boolean
    paymentId: string
    product: number[]
}
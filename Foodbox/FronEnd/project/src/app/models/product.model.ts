import { ICategory } from "./category.model"

export class IProduct{
    pid: number
    pname: string
    price: number
    descr: string
    imgurl: string
    enabled: boolean
    category: ICategory
}
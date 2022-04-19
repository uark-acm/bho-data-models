export enum ClothingType {
    MENS = 'MENS',
    WOMENS = 'WOMENS',
    ACCESSORY = 'ACCESSORY'
}

export enum ItemCategory {
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    SET = "SET",
    FOOTWEAR = "FOOTWEAR"
}

export enum Status {
    PACKED = "PACKED",
    OUT = "OUT",
    RETURNED = "RETURNED",
}

export interface BHOClient {
    name: string,
    email: string,
}
export default interface ClothingItem {
    type: ClothingType,
    category: ItemCategory,
    status: Status,                         //this will indicate if the item is checked out, packed, or just returned
    description: string,
    id: number,
    size?: string,
    orderId?: number,                       //this will be null / undefined if there is not item checked out
}

export interface Order {
    id: number,
    pickupDateTime: Date,
    returnDateTime: Date,
    clientFirstName: string,
    clientLastName: string,
    clientEmail: string,
}


//requests
export interface CreateClothingItemRequest {
    type: ClothingType,
    category: ItemCategory,
    size?: string,
}

export interface CreateOrderRequest {
    returnDateTime: Date,
    clientDetails: BHOClient,
}


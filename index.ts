export enum ClothingType {
    MENS = 'M',
    WOMENS = 'W',
    ACCESSORY = 'A'
}

export enum ItemCategory {
    TOP = "T",
    BOTTOM = "B",
    SET = "S",
    FOOTWEAR = "F"
}

export enum Status {
    PACKED = "P",
    OUT = "O",
    RETURNED = "R",
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


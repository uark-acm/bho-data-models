import BHOClient from "./BHOClient";
import { ClothingType, ItemCategory } from "./common";

export interface CreateClothingItemRequest {
    type: ClothingType,
    category: ItemCategory,
    size?: string,
}

export interface CreateOrderRequest {
    returnDateTime: Date,
    clientDetails: BHOClient,
}
/*
Yes, I realize this is all in one file, and yes, 
I realize that really blows, but this should 
work for now
 */
export enum ClothingItemType {
  MENS = 'MENS',
  WOMENS = 'WOMENS',
  ACCESSORY = 'ACCESSORY',
}

export enum ClothingItemCategory {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  SET = 'SET',
  FOOTWEAR = 'FOOTWEAR',
}

export enum ClothingItemStatus {
  PACKED = 'PACKED',
  OUT = 'OUT',
  RETURNED = 'RETURNED',
}

export enum ClothingItemCondition {
  CLEAN = 'CLEAN',
  DIRTY = 'DIRTY',
}

export enum ClothingItemSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

export interface BHOClient {
  name: string;
  email: string;
}
export interface ClothingItem {
  id: number;
  type: ClothingItemType;
  category: ClothingItemCategory;
  status: ClothingItemStatus; // this will indicate if the item is checked out, packed, or just returned
  condition: ClothingItemCondition;
  size: string | null;
  description: string | null;
}

export interface ClothingItemDatabaseRow {
  id: number;
  clothing_item_type: ClothingItemType;
  clothing_item_category: ClothingItemCategory;
  clothing_item_status: ClothingItemStatus; // this will indicate if the item is checked out, packed, or just returned
  clothing_item_condition: ClothingItemCondition;
  clothing_item_size: string | null;
  clothing_item_description: string | null;
}

export const ClothingItemToRow = (clothingItem: ClothingItem): any[] => {
  const row = [
    clothingItem.id,
    clothingItem.type,
    clothingItem.category,
    clothingItem.status,
    clothingItem.condition,
    clothingItem.size,
    clothingItem.description,
  ];
  return row;
};

export const DatabaseRowToClothingItem = (databaseResponse: ClothingItemDatabaseRow): ClothingItem => {
  return {
    id: databaseResponse.id,
    type: databaseResponse.clothing_item_type,
    category: databaseResponse.clothing_item_category,
    status: databaseResponse.clothing_item_status,
    condition: databaseResponse.clothing_item_condition,
    size: databaseResponse.clothing_item_size,
    description: databaseResponse.clothing_item_description,
  };
};

export interface Order {
  id: number;
  pickupDateTime: Date | null;
  returnDateTime: Date | null;
  clientName: string;
  clientEmail: string;
  checkoutAssociate: string | null; // will suffice as confirmation
  checkinAssociate: string | null; // will suffice as confirmation
  clothingItemId: number;
}
export interface OrderDatabaseRow {
  id: number;
  pickup_date_time: Date | null;
  return_date_time: Date | null;
  client_name: string;
  client_email: string;
  check_out_associate: string | null; // will suffice as confirmation
  check_in_associate: string | null; // will suffice as confirmation
  clothing_item_id: number;
}

export const OrderToRow = (order: Order): any[] => {
  const row = [
    order.id,
    order.pickupDateTime,
    order.returnDateTime,
    order.clientName,
    order.clientEmail,
    order.checkoutAssociate,
    order.checkinAssociate,
    order.clothingItemId,
  ];
  return row;
};

export const DatabaseRowToOrder = (databaseResponse: OrderDatabaseRow): Order => {
  return {
    id: databaseResponse.id,
    pickupDateTime: databaseResponse.pickup_date_time,
    returnDateTime: databaseResponse.return_date_time,
    clientName: databaseResponse.client_name,
    clientEmail: databaseResponse.client_email,
    checkoutAssociate: databaseResponse.check_out_associate,
    checkinAssociate: databaseResponse.check_in_associate,
    clothingItemId: databaseResponse.clothing_item_id,
  };
};

// requests
export interface CreateClothingItemRequest {
  type: ClothingItemType;
  category: ClothingItemCategory;
  size?: string;
  description?: string;
}

export interface CreateOrderRequest {
  pickupDateTime: Date;
  checkoutAssociate: string;
  clientName: string;
  clientEmail: string;
  clothingItemId: number;
}

export interface Order {
  id: number;
  pickupDateTime: Date | null;
  returnDateTime: Date | null;
  clientName: string;
  clientEmail: string;
  checkoutAssociate: string | null; // will suffice as confirmation
  checkinAssociate: string | null; // will suffice as confirmation
  clothingItemId: number;
}

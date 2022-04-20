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

export const RowToClothingItem = (databaseResponse: any[]): ClothingItem => {
  return {
    id: databaseResponse[0],
    type: databaseResponse[1] as ClothingItemType,
    category: databaseResponse[2] as ClothingItemCategory,
    status: databaseResponse[3] as ClothingItemStatus,
    condition: databaseResponse[4] as ClothingItemCondition,
    size: databaseResponse[5] as ClothingItemSize,
    description: databaseResponse[6],
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
export const RowToOrder = (databaseResponse: any[]): Order => {
  return {
    id: databaseResponse[0],
    pickupDateTime: databaseResponse[1] ? new Date(databaseResponse[1]) : null,
    returnDateTime: databaseResponse[2] ? new Date(databaseResponse[2]) : null,
    clientName: databaseResponse[3],
    clientEmail: databaseResponse[4],
    checkoutAssociate: databaseResponse[5],
    checkinAssociate: databaseResponse[6],
    clothingItemId: databaseResponse[7],
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
  returnDateTime: Date;
  clientName: string;
  clientEmail: string;
  checkoutAssociate: string;
}

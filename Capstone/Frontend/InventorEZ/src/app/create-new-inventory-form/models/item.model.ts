export class Item {
  item_id?: number;
  name?: string;
  SKU?: string;
  quantity?: number;
  quantity_type?: number;
  price?: number;
  intended_sale_price?: number;

  constructor(item_id: number, name: string, SKU: string, quantity: number, quantity_type: number, price: number, intended_sale_price: number) {
    this.item_id = item_id;
    this.name = name;
    this.SKU = SKU;
    this.quantity = quantity;
    this.quantity_type = quantity_type;
    this.price = price;
    this.intended_sale_price = intended_sale_price;
  }
}

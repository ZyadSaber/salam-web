export interface itemsType {
    item_id: number;
    width: number;
    height: number;
    size: number;
    quantity: number;
    price: number;
    total: number;
    notes?: string;
    itemName: string
}
export interface invoiceDtls {
    supplier_id: number;
    date: string;
    items: itemsType[];
    query_status: string;
    total: number;
    discount: number;
    total_after_discount: number;
    paid: number;
    credit: number;
}
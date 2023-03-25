export interface itemsType {
    item_id: number;
    width: number;
    height: number;
    size: number;
    quantity: number;
    price: number;
    total: number;
    notes?: string;
    itemName: string;
    print_id: number;
    print_name: string;
}
export interface invoiceDtls {
    customer_id: number;
    date: string;
    items: itemsType[];
    query_status: string;
    total: number;
    discount: number;
    total_after_discount: number;
    paid: number;
    credit: number;
}
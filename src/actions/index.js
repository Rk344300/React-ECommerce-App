
export const Add_items = "Add_items";
export const Item_view = "Item_view";
export const Add_cart = "Add_cart";
export const Card_item = "Card_item";
export const modify_cart = "modify_cart";
export const remove_cart = "remove_cart";
export const edit_Item = "edit_Item";
export const create_product = "create_product";

export const delete_item = "delete_item";

//this is used to get all the items and passing the items to reducer
export function additems(allitems) {
    return {
        type: Add_items,
        allitems,
    }
}
//to create a new product , the data is passing to payload
export function createProduct(data) {
    return {
        type: create_product,
        payload: data,
    }
}
//to view the item , here item is passed in view
export function itemView(item) {
    return {
        type: Item_view,
        view: item,
    }
}
// to add the item in cart , passing the item to reducer
export function addCart(cart) {
    return {
        type: Add_cart,
        cart,
    }
}
export function cartItem() {
    return {
        type: Card_item,
    };
}
export function modifyCart(item) {
    return {
        type: modify_cart,
        modifyItem: item,
    }

}
// to remove the item from cart , passing the item
export function removeCart(item) {
    return {
        type: remove_cart,
        item,
    };
}
// to edit the item , passing the id and data as payload
export function editItem(id, data) {
    return {
        type: edit_Item,
        payload: { id, data }
    };
}
// to delete the item , passing the id as payload

export function deleteItem(id) {
    return {
        type: delete_item,
        payload: id
    };
}
import { Add_cart, Add_items, Card_item, create_product, delete_item, edit_Item, Item_view, modify_cart, remove_cart } from "../actions";
// all the initial states
const initialState = {
    allitems: [],  //store all the items 
    cart: [],  // store all the items that are added to cart
    itemView: "",  // store which item is viewed
    totalCart: 0,  // store the total items present in cart
};
function products(state = initialState, actions) {
    switch (actions.type) {
        case Add_items:
            // getting all the items
            return {
                ...state,
                allitems: actions.allitems,
            };

        case create_product:
            //create a product
            return {
                ...state,
                allitems: [actions.payload, ...state.allitems]
            }

        case Item_view:
            // view the item
            return {
                ...state,
                itemView: actions.view,

            }



        case Add_cart:
            // add the item to cart
            let avail = state.cart.indexOf(actions.cart);
            console.log("avail", avail);

            if (avail !== -1) {
                actions.cart.qty += 1;

                return {
                    ...state,
                    // cart: [actions.cart, ...state.cart],
                };
            } else {
                return {
                    ...state,
                    cart: [actions.cart, ...state.cart],
                }

            }

        case Card_item:
            // store total cart 
            let { cart } = state;
            let total = cart.reduce((total, item) => {
                return (total += item.qty)
            }, 0);
            return {
                ...state,
                totalCart: total,
            }


        case modify_cart:
            //modify the state
            let index = state.cart.indexOf(actions.modifyItem)
            let modifyCart = null;
            if (index !== -1) {
                state.cart[index] = actions.modifyItem
                modifyCart = state.cart;
            }
            return {
                ...state,
                cart: [...modifyCart],
            };


        case remove_cart:
            // remove the item from cart


            return {
                ...state,
                cart: state.cart.filter((ele) => ele.id != actions.item.id),
            }



        case edit_Item:
            // edit the item 
            console.log("edit", actions.payload);
            const { id, data } = actions.payload;
            let newState = state.allitems;
            newState.map((el) => {
                if (el.id === id) {
                    el.title = data.title;
                    el.price = data.price;
                    el.description = data.description;
                    el.change = data.change;
                    el.rating = data.rating;
                }

            })
            return {
                ...state,
                allitems: newState,

            }
        case delete_item:
            // delete the item
            return {

                ...state,
                allitems: state.allitems.filter((ele) => ele.id !== actions.payload.id),
            }


        default:
            return state;

    }
}
export default products;
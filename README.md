# React-ECommerce App

# Deployed URL :

# API Reference :

https://my-json-server.typicode.com/Rk344300/ecart/products

# Step to run the Project:

Clone repo :

To install the dependencies :

`npm install`

To run the application :

`npm start`

open http://localhost:3000 to view it in your browser

# Feature

1. Navbar

- Showing cart items count
- Showing relevant navigation links

2. All products page

- Showing list of products from the API.
- Each product is editable by clicking on the “pencil” button. And we can edit that product inline. On finish editing the product, showing Notification.
- Each product is deletable, on clicking of the delete button user will be able to delete the product and showing Notification.
- Implement a sort button. On clicking it will sort by “price” and show a cross button just beside it. On clicking the cross button removing the sort.
- Giving the button to add a product to cart.

3. Create page

- On clicking the Add button adding the product and show Notification

4. Product detail page

- Showing all the details of a product
- Giving a button to add a product to cart

5. Cart page

- Showing all the items in the cart

# Folder Structure

└── src
├── actions
│ └── index.js
├── api
│ └── index.js
├── Components
│ ├── AddItem.js
│ ├── Cart.js
│ ├── CartItem.js
│ ├── ItemDetails.js
│ ├── Navbar.js
│ ├── ProductItem.js
│ ├── ProductList.js
│ └── SortItem.js
├── Notification
│ └── config.js
├── reducers
│ └── index.js
├── App.css
├── App.js  
 ├── db.json
├── index.css
└── index.js

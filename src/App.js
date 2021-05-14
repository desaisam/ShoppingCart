import "./App.css";
import React, { useState } from "react";

import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import ProductList from "./components/product-list/ProductList";

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  const [items, setItems] = useState(products);
  const [sort, setSort] = useState("None");
  const [filter, setFilter] = useState("None");
  const addToCart = (prod) => {
    console.log(cartItem);
    const cartItems = cartItem.slice();

    let alreadyPresent = false;
    cartItems.forEach((item) => {
      if (item.id === prod.id) {
        item.count++;
        alreadyPresent = true;
      }
    });
    if (!alreadyPresent) {
      cartItems.push({ ...prod, count: 1 });
    }
    setCartItem(cartItems);
  };
  const sortProducts = (event) => {
    setSort(event.target.value);
    if (event.target.value === "price") {
      const sorted = [...items].sort((a, b) => b.price - a.price);
      setItems(sorted);
    }
    if (event.target.value === "None") {
      const sorted = [...items].sort((a, b) => -(b.id - a.id));
      setItems(sorted);
    }
    if (event.target.value === "name") {
      const sorted = [...items].sort((a, b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1;
        }

        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        }
      });
      setItems(sorted);
    }
  };

  const filterProducts = (event) => {
    if (event.target.value === "None") {
      setFilter(event.target.value);
      setItems(products);
    } else {
      setFilter(event.target.value);
      const filterdProds = products.filter(
        (product) => product.category === event.target.value
      );
      setItems(filterdProds);
    }
  };

  const incrementQty = (prod) => {
    console.log(`Incrementing the Qty`);
    const cartItems = cartItem.slice();
    let index = cartItems.findIndex((x) => x.id === prod.id);
    cartItems[index].count++;
    setCartItem(cartItems);
  };

  const decrementQty = (prod) => {
    console.log(`Decrementing the Qty`);
    const cartItems = cartItem.slice();
    let index = cartItems.findIndex((x) => x.id === prod.id);
    if (cartItems[index].count > 0) cartItems[index].count--;
    setCartItem(cartItems);
  };
  return (
    <div className="App">
      <header className="App-Header">
        <h1>Welcome to Congo.com</h1>
        <br />
        <br />
        <br />
        <div className="App-Deals">
          <h5>------------- Current Deals -------------</h5>
          <h6>
            CHEAP-SAVER -{" "}
            <span className="App-coupondesc">
              Save 20% off most expensive Cheap brand item
            </span>
          </h6>
          <h6>
            GAMER-10 -{" "}
            <span className="App-coupondesc">Save 10% Off all Games</span>
          </h6>
          <h6>
            DAY-SAVER -{" "}
            <span className="App-coupondesc">
              Save X% off total, where X is the current day of the month
              (april-21 would be 21% off)
            </span>
          </h6>
        </div>
      </header>
      <div className="App-container">
        <ProductList
          products={items}
          sortProducts={sortProducts}
          filterProducts={filterProducts}
          addToCart={addToCart}
        ></ProductList>
        <ShoppingCart
          cartItem={cartItem}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        ></ShoppingCart>
      </div>
    </div>
  );
}

const products = [
  {
    id: 0,
    name: "LG Dishwasher",
    category: "Appliance",
    description: "A high quality dishwasher for all your dishwashing needs.",
    price: 549.99,
  },
  {
    id: 1,
    name: "Cheap Brand Dishwasher",
    category: "Appliance",
    description:
      "A ...dishwasher, perfect for those with a sense of adventure.",
    price: 320.0,
  },
  {
    id: 2,
    name: "Dice",
    category: "Games",
    description: "(3) six-sided dice",
    price: 9.99,
  },
  {
    id: 3,
    name: "Cheap Brand Toothbrush",
    category: "Health and Beauty",
    description: "Gets the job done, mostly, probably.",
    price: 2.99,
  },
  {
    id: 4,
    name: "Settlers of Catan",
    category: "Games",
    description:
      "A modern classic, your friends will love you for taking it very seriously.",
    price: 10.0,
  },
  {
    id: 5,
    name: "Req Square Monopoly",
    category: "Games",
    description:
      "Monopoly in the Eastern Bloc.  The state owns everything so players can't buy properties.  So how do you play?  We're not sure, but you should probably get those factories sorted out.",
    price: 10.0,
  },
  {
    id: 6,
    name: "Ultra Rotary Toothbrush",
    category: "Health and Beauty",
    description: "12,000 RPM of enamel-busting power.",
    price: 600.0,
  },
];

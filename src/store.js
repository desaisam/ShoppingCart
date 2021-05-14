import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const initialState = {
  products: [
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
  ],
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

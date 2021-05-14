import React from "react";
import "./ProductList.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default function ProductList({
  products,
  addToCart,
  filterProducts,
  sortProducts,
}) {
  return (
    <div className="ProductList">
      <h2>Products</h2>
      <div className="ProductList-filter">
        <label htmlFor="sort">Sort By</label>
        <select onChange={sortProducts}>
          <option default>None</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor="filter">Filter by Category</label>
        <select name="filter" id="sort" onChange={filterProducts}>
          <option default>None</option>
          <option value="Appliance">Appliance</option>
          <option value="Games">Games</option>
          <option value="Health and Beauty">Health and Beauty</option>
        </select>
      </div>
      {products.map((prod) => {
        return (
          <Card key={prod.id} className="ProductList-product">
            <Card.Body>
              <Card.Title>
                {prod.name} - ${prod.price}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {prod.category}
              </Card.Subtitle>
              <Card.Text>{prod.description}</Card.Text>
              {/* <Card.Link href="#">Add To Cart</Card.Link> */}
              <Button onClick={() => addToCart(prod)}>Add To Cart</Button>
            </Card.Body>
          </Card>
        );
      })}
      <br />
      <br />
    </div>
  );
}

import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { phonesData } from "./product.data";

const Products = () => {
  const [items, setItems] = useState(phonesData);

  const incQty = (id) => {
    const updatedItems = items.map((item) => {
      return item.id === id ? { ...item, qty: item.qty + 1 } : item;
    });

    setItems(updatedItems);
  };

  const decQty = (id) => {
    const updatedItems = items.map((item) => {
      return item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item;
    });

    setItems(updatedItems);
  };

  return (
    <div>
      <h1 className="bg-info text-white">Products List</h1>
      {items.map((item) => (
        <div className="d-inline-flex align-items-stretch" key={item.id}>
          <Card
            className="shadow p-3 m-2 bg-white rounded"
            style={{ width: "13rem", height: "35rem" }}
          >
            <Card.Img
              className="p-2"
              variant="top"
              src={require(`./assets/${item.image}.jfif`)}
              style={{ height: "14rem" }}
            />
            <Card.Body className="d-flex flex-column align-items-center text-center">
              <Card.Title className="text-primary">{item.modal}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <h5>Price: ₹ {item.price}</h5>
              <div>
                <p>
                  Qty:
                  <Button
                    onClick={() => incQty(item.id)}
                    className="btn btn-primary"
                  >
                    +
                  </Button>
                  <span className="mx-2">{item.qty}</span>
                  <Button
                    onClick={() => decQty(item.id)}
                    className="btn btn-danger"
                  >
                    -
                  </Button>
                </p>
              </div>
              <Button variant="primary" className="mt-auto">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;

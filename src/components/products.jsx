import React from "react";
import { Card, Button } from "react-bootstrap";

export const Products = ({ productsData }) => {
  return (
    <div classname="productCont">
      {productsData.map((data) => {
        return (
          <div className="productsCards">
            <Link>
              <Card
                style={{ width: "18rem", display: "flex" }}
                classname="card"
              >
                <Card.Img variant="top" src={data.imgUrl} />
                <Card.Body>
                  <Card.Title>
                    {data.name} ${data.price}
                  </Card.Title>
                  <Button variant="primary">Shop Now</Button>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

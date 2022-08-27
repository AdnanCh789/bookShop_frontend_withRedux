import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <div className="card">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
          <p className="lead">{product.description}</p>
          <p className="lead">{product.price}</p>
          <Link to="#">
            <button className="btn btn-outline-primary">View Product</button>
          </Link>
          <Link to="#">
            <button className="btn btn-outline-primary">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

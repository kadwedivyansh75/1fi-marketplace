import { ArrowUpRight } from "lucide-react";

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function ProductCard({ product, onClick }) {
  const emi = Math.round(product.price / 12);

  return (
    <button
      className="product-card"
      onClick={onClick}
    >
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <div className="product-arrow">
          <ArrowUpRight size={15} />
        </div>
      </div>

      <div className="product-info">

        <span className="product-brand">
          {product.brand}
        </span>

        <h3>{product.name}</h3>

        <div className="product-price">
          {formatPrice(product.price)}
        </div>

        <div className="product-emi">
          EMI from{" "}
          <strong>
            ₹{emi.toLocaleString("en-IN")}/mo
          </strong>
        </div>

      </div>
    </button>
  );
}

export default ProductCard;
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { marketplaceApi } from "../services/marketplaceApi";
import { formatPrice } from "../utils/emi";
import BottomNav from "../components/BottomNav";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] =
    useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProduct();
  }, [id]);

  async function loadProduct() {
    try {
      setLoading(true);
      setError("");

      const data =
        await marketplaceApi.getProductById(id);

      if (!data) {
        setError("Product not found.");
        return;
      }

      setProduct(data);
      setSelectedVariant(data.variants[0]);
    } catch {
      setError("Unable to load this product.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="app">
        <div className="loading-state">
          <div className="loader" />
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="app">
        <div className="error-state">
          <h3>{error || "Product not found."}</h3>

          <button
            onClick={() => navigate("/marketplace")}
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <main className="product-details-page">

        {/* Header */}

        <header className="details-header">
          <button
            className="back-button"
            onClick={() => navigate("/marketplace")}
          >
            <ArrowLeft size={19} />
          </button>

          <strong>Pay using 1Fi</strong>
        </header>

        {/* Product identity */}

        <section className="details-product-header">

          <div className="details-product-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="details-product-title">
            <span>{product.brand}</span>

            <h1>{product.name}</h1>

            <p>
              <ShieldCheck size={13} />
              Eligible for EMI
            </p>
          </div>

        </section>

        <div className="details-line" />

        {/* Main purchase area */}

        <section className="purchase-area">

          <span className="purchase-label">
            SELECT YOUR OPTION
          </span>

          <h2>{product.name}</h2>

          <p className="purchase-subtitle">
            Choose a variant and pay comfortably through
            your 1Fi EMI plan.
          </p>

          <div className="purchase-price">
            {formatPrice(selectedVariant.price)}
          </div>

        </section>

        {/* Variant */}

        <section className="details-block">

          <div className="details-block-heading">
            <span>CHOOSE</span>
            <h2>Variant</h2>
          </div>

          <div className="variant-list">

            {product.variants.map((variant) => {
              const selected =
                selectedVariant.name === variant.name;

              return (
                <button
                  key={variant.name}
                  className={`variant-option ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    setSelectedVariant(variant)
                  }
                >
                  <div>
                    <strong>{variant.name}</strong>

                    <small>
                      {formatPrice(variant.price)}
                    </small>
                  </div>

                  {selected && (
                    <span className="variant-check">
                      <Check size={15} />
                    </span>
                  )}
                </button>
              );
            })}

          </div>

        </section>

        {/* EMI information */}

        <section className="info-card">

          <div className="info-card-icon">
            <ShieldCheck size={19} />
          </div>

          <div>
            <strong>Flexible EMI options</strong>

            <p>
              Select an EMI plan that works best for
              your purchase on the next step.
            </p>
          </div>

        </section>

        {/* Product details */}

        <section className="details-description-card">

          <div className="details-block-heading">
            <span>ABOUT</span>
            <h2>Product details</h2>
          </div>

          <p>
            {product.description}
          </p>

        </section>

        {/* CTA */}

        <button
          className="primary-cta details-cta"
          onClick={() =>
            navigate(`/product/${product.id}/emi`, {
              state: {
                product,
                variant: selectedVariant,
              },
            })
          }
        >
          Continue
          <ChevronRight size={17} />
        </button>

      </main>

      <BottomNav />
    </div>
  );
}

export default ProductDetails;